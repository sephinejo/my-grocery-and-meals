import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import MealsNavigation from '../components/meals/MealsNavigation';

function Meals() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <MealsNavigation />
      <main
        className={`h-full rounded-b-lg overflow-auto font-default p-3 ${
          darkMode
            ? 'text-white bg-gradient-blue'
            : 'text-black bg-gradient-green'
        }`}
      >
        Not Available at the Moment 😀
      </main>
    </>
  );
}

export default Meals;
