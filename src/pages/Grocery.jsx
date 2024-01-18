import { useContext, useReducer, useState } from 'react';
import { v4 as uuid } from 'uuid';
import GroceryForm from '../components/grocery/GroceryForm';
import GroceryActive from './GroceryActive';
import GroceryCompleted from './GroceryCompleted';
import GroceryRemoved from './GroceryRemoved';
import GroceryNavigation from '../components/grocery/GroceryNavigation';
import GroceryPrices from '../components/grocery/GroceryPrices';
import groceryReducer from '../reducer/grocery-reducer';
import { DarkModeContext } from '../context/DarkModeContext';

const ACTIVE = 'active';
const COMPLETED = 'completed';
const REMOVED = 'removed';

function Grocery() {
  const [grocery, dispatch] = useReducer(groceryReducer, []);
  const [activeStatus, setActiveStatus] = useState(ACTIVE);
  const [itemName, setItemName] = useState('');
  const { darkMode } = useContext(DarkModeContext);

  const activeGrocery = grocery.filter(
    (item) => !item.completed && !item.removed
  );
  const completedGrocery = grocery.filter((item) => item.completed);
  const removedGrocery = grocery.filter((item) => item.removed);

  const changeHandler = (e) => {
    setItemName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (itemName.trim().length === 0) return;

    const newItem = {
      name: itemName
        .trim()
        .split(' ')
        .map(
          (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' '),
      completed: false,
      removed: false,
      id: uuid(),
    };

    dispatch({ type: 'add', newItem });

    setItemName('');
  };

  const checkHandler = (item) => {
    dispatch({ type: 'check', item, activeStatus });
  };

  const removeHandler = (item) => {
    dispatch({ type: 'remove', item, activeStatus, setActiveStatus });
  };

  return (
    <>
      {/* NAVIGATION */}
      <GroceryNavigation
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
      />

      <main
        className={`h-[82%] overflow-auto font-default grid grid-cols-3 gap-[1px] ${
          darkMode ? 'text-white' : 'text-black'
        }`}
      >
        {/* LIST */}
        {(activeStatus === null || activeStatus === ACTIVE) && (
          <GroceryActive
            grocery={activeGrocery}
            onCheck={checkHandler}
            onRemove={removeHandler}
          />
        )}
        {activeStatus === COMPLETED && (
          <GroceryCompleted
            activeStatus={activeStatus}
            grocery={completedGrocery}
            onCheck={checkHandler}
            onRemove={removeHandler}
          />
        )}
        {activeStatus === REMOVED && (
          <GroceryRemoved
            grocery={removedGrocery}
            onCheck={checkHandler}
            onRemove={removeHandler}
          />
        )}

        {/* PRICE */}
        <GroceryPrices />
      </main>

      {/* FORM */}
      <GroceryForm
        itemName={itemName}
        onChange={changeHandler}
        onSubmit={submitHandler}
      />
    </>
  );
}

export default Grocery;
