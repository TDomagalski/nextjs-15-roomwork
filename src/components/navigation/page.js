'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Strona główna', path: '/' },
    { name: 'Kwatery', path: '/kwatery' },
    { name: 'O nas', path: '/o-nas' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
      <div className={styles.logo}>
        <Link href='/'>TwojaFirma</Link>
      </div>
      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label='Otwórz menu'
      >
        ☰
      </button>
      <ul className={styles.navLinks}>
        {navItems.map((item) => (
          <li
            key={item.path}
            className={router.pathname === item.path ? styles.active : ''}
            onClick={() => setMenuOpen(false)} // Zamknij menu po kliknięciu linku
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
