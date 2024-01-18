import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

function GroceryPrices() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? 'bg-astros-navy' : 'bg-gradient-green'} p-3`}>
      Prices
    </div>
  );
}

export default GroceryPrices;
