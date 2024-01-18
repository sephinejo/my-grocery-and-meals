import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import GroceryItem from './GroceryItem';

function GroceryList({ activeStatus, grocery, onCheck, onRemove }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <ul
      className={`${
        darkMode ? 'bg-braves-navy' : 'bg-gradient-green'
      } col-span-2 p-3`}
    >
      {grocery.map((item) => (
        <GroceryItem
          key={item.id}
          activeStatus={activeStatus}
          item={item}
          onCheck={onCheck}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default GroceryList;
