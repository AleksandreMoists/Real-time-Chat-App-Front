// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "../styles/globals.css"
import { ThemeProvider } from '@/components/ui/theme-provider';
import { ModeToggle } from '@/components/ModeToggle/ModeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Real-Time Chat App',
  description: 'A real-time chat application built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme='light'
            enableSystem={true}
            disableTransitionOnChange
        >
        <div className={'fixed top-4 right-4 z-50'}>
          <ModeToggle />
        </div>

        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}