import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

function GroceryForm({ onChange, onSubmit, itemName }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <form
      onSubmit={onSubmit}
      className='h-[9%] w-full rounded-b-lg bg-white font-primary relative'
    >
      <input
        type='text'
        placeholder='Enter your item'
        className='w-full h-full text-black rounded-b-lg px-3 text-lg outline-none'
        onChange={onChange}
        value={itemName}
      />
      <button
        type='submit'
        className={`absolute top-[.23rem] right-[.3rem] ${
          darkMode ? 'bg-eagles-midnight-green' : 'bg-laurel-green'
        } w-[19%] h-[84%] text-white inline rounded-xs text-lg`}
      >
        Enter
      </button>
    </form>
  );
}

export default GroceryForm;
