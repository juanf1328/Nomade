import React, { useState, useContext } from "react";
import '../components/Header.css';
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [darkMode, setDarkmode] = useState(false);
  const color = useContext(ThemeContext);

  const handleClick = () => {
    setDarkmode(!darkMode);
  };

  return (
    <div className="Header">
      <h1 style={{color}}>Bienvenido</h1>
      <button type="button" 
        className="mOscuro"
        onClick={handleClick}>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
        
      </button>
    </div>
  );
};

export default Header;
