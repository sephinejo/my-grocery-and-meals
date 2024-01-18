import GroceryList from '../components/grocery/GroceryList';

function GroceryActive({ grocery, onCheck, onRemove }) {
  return (
    <GroceryList grocery={grocery} onCheck={onCheck} onRemove={onRemove} />
  );
}

export default GroceryActive;
