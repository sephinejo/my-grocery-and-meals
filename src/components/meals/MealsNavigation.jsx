import { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { DarkModeContext } from '../../context/DarkModeContext';

function MealsNavigation() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav>
      <ul
        className={`absolute right-[.5rem] top-[-2rem] uppercase flex items-center gap-3 ${
          darkMode ? 'text-white' : 'text-brunswick-green'
        }`}
      >
        <li className='border-b-2 border-transparent opacity-0'>
          TEMP NAVIGATION
        </li>
        <li onClick={toggleDarkMode} className='cursor-pointer'>
          {darkMode ? (
            <MdOutlineLightMode className='text-xl' />
          ) : (
            <MdOutlineDarkMode className='text-xl' />
          )}
        </li>
      </ul>
    </nav>
  );
}

export default MealsNavigation;
