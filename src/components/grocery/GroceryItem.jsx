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
      <div className='flex items-center gap-1 md:gap-2'>
        <input
          type='checkbox'
          id={`checkbox-${item.id}`}
          name='grocery'
          className='outline-none w-4 h-4'
          onChange={() => checkHandler(item)}
          value={item.name}
          checked={activeStatus === COMPLETED && item.completed}
        />
        <label htmlFor={`checkbox-${item.id}`}></label>
        <span>
          <span className='pr-1 md:pr-3'>{item.name}</span>
          <small
            className={`align-middle text-[.6rem] sm:text-xs md:text-sm ${
              darkMode
                ? 'text-baby-blue border-white'
                : 'text-white border-dark-green'
            } border-b-[1px] border-dashed tracking-wide`}
          >
            {item.date}
          </small>
        </span>
      </div>
      <MdDelete
        onClick={() => onRemove(item)}
        className='cursor-pointer text-xl hover:scale-125 transition ease-in-out'
      />
    </li>
  );
}

export default GroceryItem;
