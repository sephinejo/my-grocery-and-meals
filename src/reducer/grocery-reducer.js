const ACTIVE = 'active';
const COMPLETED = 'completed';
const REMOVED = 'removed';

function groceryReducer(grocery, action) {
  switch (action.type) {
    case 'add': {
      const { newItem } = action;
      return [newItem, ...grocery];
    }

    case 'check': {
      const { item, activeStatus } = action;
      if (activeStatus === COMPLETED) {
        item.completed = false;
      } else {
        item.completed = true;
      }
      item.removed = false;

      return [...grocery];
    }

    case 'remove': {
      const { item, activeStatus, setActiveStatus } = action;
      if (activeStatus === REMOVED) {
        const removedGrocery = grocery.filter((i) => i.id !== item.id);
        if (removedGrocery.length === 0) {
          setActiveStatus(ACTIVE);
          return [];
        }
        return [...removedGrocery];
      } else {
        item.removed = true;
        item.completed = false;
        return [...grocery];
      }
    }

    default: {
      throw Error(`Unknown action type: ${action.type}`);
    }
  }
}

export default groceryReducer;
