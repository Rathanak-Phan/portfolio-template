import React, { useState, useEffect } from 'react';

function ThemeMode() {
    // Load theme from localStorage or default to 'light'
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        // Apply theme class to <html> element
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Save theme to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Toggle between 'light' and 'dark' mode
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div onClick={toggleTheme}>
            {theme === 'light' ? <i className="fa-regular fa-moon"></i> : <i className="fa-regular fa-sun"></i>}
        </div>
    );
}

export default ThemeMode;
