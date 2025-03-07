import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat, DM_Sans } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

// Use Montserrat for headings
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Use DM Sans for body text
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

// Keep Inter as a fallback
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'British AUC Sports - Football Trials & Academy Trips',
  description: 'British AUC Sports provides exceptional sports opportunities for aspiring athletes through football trials, academy trips, and educational programs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable} ${dmSans.variable} ${inter.variable}`}>
      <body className={dmSans.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  );
}
