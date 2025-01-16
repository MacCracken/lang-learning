import './action-bar.css'
import { useActions } from "../hooks/use-actions";

interface IconButtonProps {
  onClick: () => void;
  iconClass: string;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, iconClass, ariaLabel }) => (
  <button className="button is-primary is-small" onClick={onClick} aria-label={ariaLabel}>
    <span className="icon">
      <i className={iconClass}></i>
    </span>
  </button>
);

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className="action-bar">
      <IconButton 
        onClick={() => moveCell(id, 'up')} 
        iconClass="fas fa-arrow-up" 
        ariaLabel="Move cell up" 
      />
      <IconButton 
        onClick={() => moveCell(id, 'down')} 
        iconClass="fas fa-arrow-down" 
        ariaLabel="Move cell down" 
      />
      <IconButton 
        onClick={() => deleteCell(id)} 
        iconClass="fas fa-times" 
        ariaLabel="Delete cell" 
      />
    </div>
  );
};

export default ActionBar;