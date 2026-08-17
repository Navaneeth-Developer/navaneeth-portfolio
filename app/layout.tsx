import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';


export const metadata: Metadata = {
  title: 'Navaneeth | Portfolio',
  description: 'Full-Stack Software Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}