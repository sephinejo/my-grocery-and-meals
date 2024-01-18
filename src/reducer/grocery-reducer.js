const ACTIVE = 'active';
const COMPLETED = 'completed';
const REMOVED = 'removed';
const STORAGE_KEY = 'grocery';

function groceryReducer(grocery, action) {
  let newGrocery;
  switch (action.type) {
    case 'add': {
      const { newItem } = action;

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
