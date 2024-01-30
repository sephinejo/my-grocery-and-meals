import GroceryItem from './GroceryItem';

function GroceryList({ activeStatus, grocery, onCheck, onRemove }) {
  return (
    <ul className='col-span-2 py-1 px-2 md:py-3 md:px-3 text-sm md:text-base'>
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
