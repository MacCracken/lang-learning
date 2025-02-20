import { useTypedSelector } from "./use-typed-selector";

export const useCumulativeCode = (cellId: string) => {
  return useTypedSelector((state) => {
    const { data, order } = state.cells;
    const orderedCells = order.map(id => data[id]);
    
    const showFunction = `
    import _React from 'react';
    import _ReactDOM from 'react-dom/client';
    var show = (value) => {
      const container = document.getElementById('root');

      if (typeof value === 'object') {
        if (value.$$typeof && value.props) {
          _ReactDOM.createRoot(container).render(value)
        } else {
          container.innerHTML = JSON.stringify(value);
        }
      } else {
        container.innerHTML = value;
      }
    };
  `;
    const showFunctionNoOp = 'var show = () => {}';
    const cumulativeCode = [];
    for (let c of orderedCells){
      if (c.type === 'code') {
        if (c.id === cellId) {
          cumulativeCode.push(showFunction);
        } else {
          cumulativeCode.push(showFunctionNoOp);
        }
        cumulativeCode.push(c.content);
      }
      if (c.id === cellId) {
        break;
      }
    }
    return cumulativeCode;
  }).join('\n');
};