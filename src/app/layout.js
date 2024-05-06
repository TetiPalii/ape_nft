import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ape NFT',
  description:
    'Yacht Ape is a collection of unique digital apes that you can own in NFT format',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-MessinaSansMono bg-backgroundMainColor text-white w-screen  h-full min-h-screen pt-[70px]">
        {children}
      </body>
    </html>
  );
}
