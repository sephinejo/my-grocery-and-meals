import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

function Header({ text }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <header
      className={`h-[9%] font-primary text-2xl uppercase text-center py-6 ${
        darkMode ? 'bg-eagles-midnight-green' : 'bg-islamic-green'
      } text-white flex justify-center items-center rounded-t-lg tracking-wide`}
    >
      My {text.toUpperCase()}.
    </header>
  );
}

export default Header;
