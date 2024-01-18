import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { DarkModeContext } from '../../context/DarkModeContext';

const COMPLETED = 'completed';

function GroceryList({ activeStatus, grocery, onCheck, onRemove }) {
  const { darkMode } = useContext(DarkModeContext);

  const checkHandler = (item) => {
    onCheck(item);
  };

  return (
    <ul
      className={`${
        darkMode ? 'bg-braves-navy' : 'bg-gradient-green'
      } col-span-2 p-3`}
    >
      {grocery.map((item) => (
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
      ))}
    </ul>
  );
}

export default GroceryList;
