import { Geist, Geist_Mono } from 'next/font/google';

import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import './globals.scss';

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
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
