'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.scss';

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Strona główna', path: '/' },
    { name: 'Kwatery', path: '/kwatery' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
      <div className={styles.logo}>
        <Link href='/'>RoomWork</Link>
      </div>
      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label='Otwórz menu'
      >
        ☰
      </button>
      <ul className={styles.navLinks}>
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li
              key={item.path}
              className={isActive ? styles.active : styles.noActive}
              onClick={() => setMenuOpen(false)} // Zamknij menu po kliknięciu linku
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
