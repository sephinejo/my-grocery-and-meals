import { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { DarkModeContext } from '../../context/DarkModeContext';

const ACTIVE = 'active';
const COMPLETED = 'completed';
const REMOVED = 'removed';

function GroceryNavigation({ activeStatus, setActiveStatus }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const activeStyle = 'border-celadon';

  const activeStatusHandler = (e) => {
    setActiveStatus(e.target.textContent.toLowerCase());
  };

  return (
    <nav>
      <ul
        className={`absolute right-[.5rem] top-[-2rem] uppercase flex items-center gap-3 ${
          darkMode ? 'text-white' : 'text-brunswick-green'
        }`}
      >
        <li onClick={toggleDarkMode} className='cursor-pointer'>
          {darkMode ? (
            <MdOutlineLightMode className='text-xl' />
          ) : (
            <MdOutlineDarkMode className='text-xl' />
          )}
        </li>
        <li
          onClick={activeStatusHandler}
          className={`border-b-2 ${
            activeStatus === ACTIVE ? activeStyle : 'border-transparent'
          } cursor-pointer`}
        >
          ACTIVE
        </li>
        <li
          onClick={activeStatusHandler}
          className={`border-b-2 ${
            activeStatus === COMPLETED ? activeStyle : 'border-transparent'
          } cursor-pointer`}
        >
          Completed
        </li>
        <li
          onClick={activeStatusHandler}
          className={`border-b-2 ${
            activeStatus === REMOVED ? activeStyle : 'border-transparent'
          } cursor-pointer`}
        >
          Removed
        </li>
      </ul>
    </nav>
  );
}

export default GroceryNavigation;
