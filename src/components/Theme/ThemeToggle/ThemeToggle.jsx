import { useContext } from 'react';
import { ThemeContext } from '@components/Theme/ThemeContext/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className='theme-toggle'>
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
