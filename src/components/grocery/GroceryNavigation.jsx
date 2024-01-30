import { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { DarkModeContext } from '../../context/DarkModeContext';

const navigation = ['active', 'completed', 'removed'];

function GroceryNavigation({ activeStatus, setActiveStatus }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const activeLightStyle = 'border-celadon';
  const activeDarkStyle = 'border-dark-blue';

  const activeStatusHandler = (e) => {
    setActiveStatus(e.target.textContent.toLowerCase());
  };

  return (
    <nav>
      <ul
        className={`absolute right-0 sm:right-[.5rem] top-[-1.5rem] sm:top-[-1.6rem] md:top-[-1.7rem] lg:top-[-2rem] uppercase flex items-center gap-2 lg:gap-3 text-xs md:text-sm lg:text-base ${
          darkMode ? 'text-white' : 'text-brunswick-green'
        }`}
      >
        {navigation.map((nav, idx) => (
          <li
            key={idx}
            onClick={activeStatusHandler}
            className={`border-b-2 ${
              darkMode
                ? activeStatus === nav
                  ? activeDarkStyle
                  : 'border-transparent'
                : activeStatus === nav
                ? activeLightStyle
                : 'border-transparent'
            } cursor-pointer`}
          >
            {nav.toUpperCase()}
          </li>
        ))}
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

export default GroceryNavigation;
