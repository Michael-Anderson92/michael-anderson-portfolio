import '@/app/ui/global.css';
import { Analytics } from "@vercel/analytics/react";
import { montserrat, spaceGrotesk } from '@/app/ui/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${spaceGrotesk.variable}`}>
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}