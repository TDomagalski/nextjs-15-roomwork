'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

import ThemeToggle from '@components/Theme/ThemeToggle/ThemeToggle';

import styles from './navbar.module.scss';

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Strona główna', path: '/' },
    { name: 'Kwatery', path: '/kwatery/' },
    { name: 'Kontakt', path: '/kontakt/' },
  ];

  return (
    <div className='container'>
      <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
          <Link href='/' onClick={() => setMenuOpen(false)}>
            RoomWork
          </Link>
        </div>
        <ThemeToggle />
        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
        >
          {menuOpen ? '✖' : '☰'}
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
    </div>
  );
};

export default Navbar;
