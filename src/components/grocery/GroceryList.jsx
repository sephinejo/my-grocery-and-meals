import GroceryItem from './GroceryItem';

function GroceryList({ activeStatus, grocery, onCheck, onRemove }) {
  return (
    <ul className='col-span-2 py-3 px-3'>
      {grocery?.map((item) => (
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
