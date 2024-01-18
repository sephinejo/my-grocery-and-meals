import { useContext, useReducer, useState } from 'react';
import GroceryForm from '../components/grocery/GroceryForm';
import GroceryNavigation from '../components/grocery/GroceryNavigation';
import GroceryPrices from '../components/grocery/GroceryPrices';
import groceryReducer from '../reducer/grocery-reducer';
import { DarkModeContext } from '../context/DarkModeContext';
import GroceryList from '../components/grocery/GroceryList';

const ACTIVE = 'active';
const COMPLETED = 'completed';
const REMOVED = 'removed';
const STORAGE_KEY = 'grocery';

function Grocery() {
  const [grocery, dispatch] = useReducer(groceryReducer, [], init);
  const [activeStatus, setActiveStatus] = useState(ACTIVE);
  const [itemName, setItemName] = useState('');
  const { darkMode } = useContext(DarkModeContext);

  const filteredGrocery = getFilteredGrocery(grocery, activeStatus);

  const changeHandler = (e) => {
    setItemName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (itemName.trim().length === 0) return;

    dispatch({ type: 'add', itemName });

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
        <GroceryList
          activeStatus={activeStatus}
          grocery={filteredGrocery}
          onCheck={checkHandler}
          onRemove={removeHandler}
        />

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

function init() {
  const storedGrocery = JSON.parse(localStorage.getItem(STORAGE_KEY));
  return storedGrocery;
}

function getFilteredGrocery(grocery, activeStatus) {
  let filteredGrocery;

  if (activeStatus === ACTIVE) {
    filteredGrocery = grocery.filter(
      (item) => !item.completed && !item.removed
    );
  } else if (activeStatus === COMPLETED) {
    filteredGrocery = grocery.filter((item) => item.completed);
  } else if (activeStatus === REMOVED) {
    filteredGrocery = grocery.filter((item) => item.removed);
  }

  return filteredGrocery;
}
