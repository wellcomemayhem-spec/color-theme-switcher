import React, { useState } from 'react';
import './styles.css';

const ColorThemeSwitcher = ({ themes }) => {
    const [currentTheme, setCurrentTheme] = useState(themes[0]);

    const toggleTheme = () => {
        const nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
        setCurrentTheme(themes[nextIndex]);
    };

    return (
        <div className={`theme-switcher ${currentTheme}`}>  
            <button onClick={toggleTheme}>Switch Theme</button>
        </div>
    );
};

export default ColorThemeSwitcher;
