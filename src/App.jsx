import { useContext, useState } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import Header from './components/Header';
import Grocery from './pages/Grocery';
import Meals from './pages/Meals';

const GROCERY = 'grocery';
const MEALS = 'meals';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(GROCERY);

  const { darkMode } = useContext(DarkModeContext);

  const selectedLightStyle = 'bg-celadon';
  const selectedDarkStyle = 'bg-dark-blue';
  const hoverLightStyle = 'bg-celadon-opacity';
  const hoverDarkStyle = 'bg-dark-blue-opacity';

  const selectHandler = (e) => {
    setSelectedCategory(e.target.textContent.toLowerCase());
  };

  return (
    <div
      className={`w-1vw h-lvh ${
        darkMode ? 'bg-gradient-blue' : 'bg-gradient-pastel'
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
            <li
              onClick={selectHandler}
              className={`cursor-pointer px-2 py-1 rounded-lg ${
                selectedCategory === GROCERY &&
                (darkMode
                  ? ` ${selectedDarkStyle} `
                  : ` ${selectedLightStyle} `)
              } ${
                darkMode
                  ? selectedCategory !== GROCERY && `hover:${hoverDarkStyle}`
                  : selectedCategory !== GROCERY && `hover:${hoverLightStyle}`
              }`}
            >
              Grocery
            </li>
            <li
              onClick={selectHandler}
              className={`cursor-pointer px-2 py-1 rounded-lg ${
                selectedCategory === MEALS &&
                (darkMode ? `${selectedDarkStyle}` : `${selectedLightStyle}`)
              } ${
                darkMode
                  ? selectedCategory !== MEALS && `hover:${hoverDarkStyle}`
                  : selectedCategory !== MEALS && `hover:${hoverLightStyle}`
              }`}
            >
              Meals
            </li>
          </ul>
        </nav>

        {/* HEADER */}
        <Header text={selectedCategory} />

        {/* MAIN */}
        {selectedCategory === GROCERY && <Grocery />}
        {selectedCategory === MEALS && <Meals />}
      </div>
    </div>
  );
}

export default App;
