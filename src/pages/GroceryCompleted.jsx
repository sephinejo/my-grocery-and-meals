import GroceryList from '../components/grocery/GroceryList';

function GroceryCompleted({ activeStatus, grocery, onCheck, onRemove }) {
  return (
    <GroceryList
      activeStatus={activeStatus}
      grocery={grocery}
      onCheck={onCheck}
      onRemove={onRemove}
    />
  );
}

export default GroceryCompleted;
