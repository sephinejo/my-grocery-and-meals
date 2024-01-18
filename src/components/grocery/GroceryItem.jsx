import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { DarkModeContext } from '../../context/DarkModeContext';

const COMPLETED = 'completed';

function GroceryItem({ activeStatus, item, onCheck, onRemove }) {
  const { darkMode } = useContext(DarkModeContext);

  const checkHandler = (item) => {
    onCheck(item);
  };

  return (
    <li key={item.id} className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <input
          type='checkbox'
          id={`checkbox-${item.id}`}
          name='grocery'
          className={`outline-none w-4 h-4 ${
            darkMode ? 'text-white' : 'text-accent-brunswick-green'
          }`}
          onChange={() => checkHandler(item)}
          value={item.id}
          checked={activeStatus === COMPLETED && item.completed}
        />
        <label htmlFor={`checkbox-${item.id}`}></label>
        <span>{item.name}</span>
      </div>
      <MdDelete
        onClick={() => onRemove(item)}
        className='cursor-pointer text-xl'
      />
    </li>
  );
}

export default GroceryItem;
