'use client';

import * as React from 'react';

export default function BottomNav() {
  return (
    <footer className="bottom-0 w-full">
      <section className="my-4">
        <h1 className="text-center text-white italic">
          "Thanks for stopping by!"
        </h1>
      </section>
      <p 
  className="text-center mb-8"
  style={{
    color: 'var(--white)',
  }}
>
  © 2025 Michael Anderson | CrossHaven Web Solutions NGO. All rights reserved.
</p>
    </footer>
  );
}