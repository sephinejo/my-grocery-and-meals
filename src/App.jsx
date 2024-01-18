import { useContext, useState } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import Header from './components/Header';
import Grocery from './pages/Grocery';
import Meals from './pages/Meals';

const CATEGORIES = ['grocery', 'meals'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('grocery');
  const { darkMode } = useContext(DarkModeContext);

  const selectHandler = (e) => {
    setSelectedCategory(e.target.textContent.toLowerCase());
  };

  return (
    <div
      className={`w-1vw h-lvh ${
        darkMode ? 'bg-gradient-blue-light' : 'bg-gradient-pastel'
      } flex flex-col items-center justify-center`}
    >
      {/* CONTENT */}
      <div className='max-w-contentWidth min-h-contentHeight w-3/5 h-3/5 opacity-90 rounded-lg box-shadow flex flex-col relative'>
        <nav>
          <ul
            className={`absolute left-0 top-[-2.5rem] uppercase flex items-center gap-1 ${
              darkMode ? 'text-white' : 'text-brunswick-green'
            }`}
          >
            {CATEGORIES.map((category, idx) => (
              <li
                key={idx}
                onClick={selectHandler}
                className={`cursor-pointer px-2 py-1 rounded-lg ${
                  darkMode
                    ? selectedCategory === category
                      ? 'bg-dark-blue'
                      : 'hover:bg-dark-blue-opacity'
                    : selectedCategory === category
                    ? 'bg-celadon'
                    : 'hover:bg-celadon-opacity'
                }`}
              >
                {category.toUpperCase()}
              </li>
            ))}
          </ul>
        </nav>

        {/* HEADER */}
        <Header text={selectedCategory} />

        {/* MAIN */}
        {selectedCategory === 'grocery' && <Grocery />}
        {selectedCategory === 'meals' && <Meals />}
      </div>
    </div>
  );
}

export default App;
