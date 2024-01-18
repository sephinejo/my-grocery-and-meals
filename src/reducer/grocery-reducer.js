import { v4 as uuid } from 'uuid';

const ACTIVE = 'active';
const COMPLETED = 'completed';
const REMOVED = 'removed';
const STORAGE_KEY = 'grocery';

function groceryReducer(grocery, action) {
  let newGrocery;
  const newDate = new Date().toLocaleString('en', {
    dateStyle: 'short',
    timeStyle: 'short',
  });

  switch (action.type) {
    case 'add': {
      const { itemName, date } = action;

      const newItem = {
        name: itemName
          .trim()
          .split(' ')
          .map(
            (word) =>
              word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' '),
        completed: false,
        removed: false,
        date,
        id: uuid(),
      };

      newGrocery = [newItem, ...grocery];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newGrocery));
      return newGrocery;
    }

    case 'check': {
      const { item, activeStatus } = action;

      if (activeStatus === COMPLETED) {
        item.completed = false;
      } else {
        item.completed = true;
      }
      item.date = newDate;
      item.removed = false;

      newGrocery = [...grocery];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newGrocery));
      return newGrocery;
    }

    case 'remove': {
      const { item, activeStatus, setActiveStatus } = action;
      if (activeStatus === REMOVED) {
        newGrocery = grocery.filter((i) => i.id !== item.id);
        if (newGrocery.length === 0) {
          setActiveStatus(ACTIVE);
          newGrocery = [];
          localStorage.setItem(STORAGE_KEY, JSON.stringify(newGrocery));
          return newGrocery;
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newGrocery));
        return newGrocery;
      } else {
        item.removed = true;
        item.completed = false;
        // item.date = newDate;
        newGrocery = [...grocery];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newGrocery));
        return newGrocery;
      }
    }

    default: {
      throw Error(`Unknown action type: ${action.type}`);
    }
  }
}

export default groceryReducer;
