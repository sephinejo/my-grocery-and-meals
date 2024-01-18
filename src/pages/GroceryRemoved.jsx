import GroceryList from '../components/grocery/GroceryList';

function GroceryRemoved({ grocery, onCheck, onRemove }) {
  return (
    <GroceryList grocery={grocery} onCheck={onCheck} onRemove={onRemove} />
  );
}

export default GroceryRemoved;
