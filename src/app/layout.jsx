import { Geist, Geist_Mono } from 'next/font/google';

import { ThemeProvider } from '@components/Theme/ThemeContext/ThemeContext';
import Navbar from '@components/navbar/page';
import Footer from '@components/footer/page';

import '../styles/globals.scss';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'RoomWork - Kwatery pracownicze w Słomnikach',
  description: 'RoomWork - Kwatery pracownicze w Słomnikach opis działalności',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pl'>
      <ThemeProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
