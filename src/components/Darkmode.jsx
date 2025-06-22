import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-800 text-white dark:bg-yellow-300 dark:text-black rounded"
        >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}
