import { useContext } from 'react';
import { ThemeContext } from '@components/Theme/ThemeContext/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className='theme-toggle'>
      <span className='icon'>{theme === 'light' ? '🌙' : '☀️'}</span>
      <span className='text'>{theme === 'light' ? 'Dark' : 'Light'}</span>
    </button>
  );
}
