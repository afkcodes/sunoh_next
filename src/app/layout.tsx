import type { Metadata } from 'next';
import localFont from 'next/font/local';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${lexend.variable}  antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
