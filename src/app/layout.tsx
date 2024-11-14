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

const APP_NAME = 'Sunoh';
const APP_DEFAULT_TITLE = 'Sunoh Dil Ki Dhun';
const APP_TITLE_TEMPLATE = '%s - Sunoh Music';
const APP_DESCRIPTION = 'Enjoy Music, in highest quality adfree';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0a0a0a',
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
