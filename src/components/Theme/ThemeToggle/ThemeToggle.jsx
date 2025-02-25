import { useContext } from 'react';
import { ThemeContext } from '@components/Theme/ThemeContext/ThemeContext';

import styles from './themeToggle.module.scss';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={styles.theme_toggle}>
      <span className={styles.icon}>{theme === 'light' ? '🌙' : '☀️'}</span>
      <span className={styles.text}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
