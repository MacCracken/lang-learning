import './code-cell.css';
import { useEffect } from "react";
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from "./resizeable";
import { Cell } from "../state";
import { useActions } from "../hooks/use-actions";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { useCumulativeCode } from '../hooks/use-cumulative-code';

interface CodeCellProps {
  cell: Cell
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const timeout = 750;
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);
  
  useEffect(() => {
    if(!bundle) {
      createBundle(cell.id, cumulativeCode);
      return
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode)
    }, timeout);
    
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cumulativeCode, cell.id, createBundle]);

  return (
    <Resizable direction='vertical'>
      <div style={{ height: 'calc(100% - 10px)', display: 'flex', flexDirection: 'row'}}>
        <Resizable direction='horizontal'>
          <CodeEditor 
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        <div className='progress-wrapper'>
          {!bundle || bundle.loading ? (
              <div className="progress-cover">
                <progress className="progress is-small is-primary" max='100'>
                  Loading
                </progress>
              </div>
          ) : (
            <Preview code={bundle.code} bundleStatus={bundle.err} />
          )}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeCell;