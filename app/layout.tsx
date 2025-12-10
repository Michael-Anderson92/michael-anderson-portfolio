import '@/app/ui/global.css';
import { Analytics } from "@vercel/analytics/react";
import { montserrat, spaceGrotesk } from '@/app/ui/fonts';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Inline script to force scroll reset BEFORE anything else loads */}
        <Script id="scroll-reset" strategy="beforeInteractive">
          {`
            if ('scrollRestoration' in window.history) {
              window.history.scrollRestoration = 'manual';
            }
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
          `}
        </Script>
      </head>
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}