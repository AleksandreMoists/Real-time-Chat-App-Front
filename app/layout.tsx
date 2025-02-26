// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "../styles/globals.css"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Real-Time Chat App',
  description: 'A real-time chat application built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}