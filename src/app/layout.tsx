import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import BottomNavigationBar from '~/components/BottomNavigation/BottomNavigationBar';
import PlayerSheet from '~/components/Sheet/PlayerSheet';
import QueryProvider from '~/providers/QueryProvider';
import { ThemeProvider } from '~/providers/ThemeProvider';

import './globals.css';

const lexend = localFont({
  src: './fonts/Lexend.ttf',
  variable: '--font-lexend',
  display: 'swap',
  fallback: ['sans-serif'],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Sunoh',
  description: 'Sunoh Music',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <head>
        <meta
          name='viewport'
          content='user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height'
        />
      </head>
      <body
        className={`${lexend.variable}  antialiased pb-32`}
        suppressHydrationWarning={true}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange>
          <QueryProvider>
            {children}
            <PlayerSheet />
            <BottomNavigationBar />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
