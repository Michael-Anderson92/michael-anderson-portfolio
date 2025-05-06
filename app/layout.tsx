import '@/app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
import { Analytics } from "@vercel/analytics/react";
import { montserrat } from '@/app/ui/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}<Analytics /></body>
    </html>
  );
}