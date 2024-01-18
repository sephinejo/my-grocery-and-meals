import { createContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('is-dark-mode')) || false
  );

  const toggleDarkMode = () => {
    localStorage.setItem('is-dark-mode', JSON.stringify(!darkMode));
    setDarkMode((mode) => !mode);
  };

  useEffect(() => {
    localStorage.setItem('is-dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeContext, DarkModeProvider };
