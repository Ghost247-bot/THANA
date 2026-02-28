'use client';

import Link from 'next/link';
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { navLinks } from '@/lib/data/home';
import { Input } from '@/components/ui/Input';

export function Header() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusables = drawer.querySelectorAll<HTMLElement>('a, button, input, [tabindex]:not([tabindex="-1"])');
    focusables[0]?.focus();

    const onKeyDown = (event: KeyboardEvent | globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key !== 'Tab' || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if ((event as globalThis.KeyboardEvent).shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!(event as globalThis.KeyboardEvent).shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  const onSearch = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <header className="border-b border-charcoal/10 bg-sand/90 backdrop-blur">
      {/* TODO(Figma: missing brand logo asset from “Homepage / Desktop” header). */}
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 lg:px-8">
        <button className="inline-flex rounded-md p-2 lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
          ☰
        </button>
        <Link href="/" className="text-xl font-bold tracking-wide">
          THANA HOMEWARE
        </Link>

        <nav className="ml-8 hidden gap-6 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-clay">
              {link.label}
            </Link>
          ))}
        </nav>

        <form onSubmit={onSearch} className="ml-auto hidden w-full max-w-xs lg:block" role="search">
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search homeware" aria-label="Search" />
        </form>

        <div className="ml-auto hidden gap-4 text-sm lg:flex">
          <button aria-label="Account">👤</button>
          <button aria-label="Wishlist">♡</button>
          <button aria-label="Cart">🛒</button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" aria-modal="true" role="dialog">
          <button className="absolute inset-0 bg-charcoal/30" aria-label="Close menu" onClick={() => setOpen(false)} />
          <div ref={drawerRef} className="absolute left-0 top-0 h-full w-80 bg-sand p-6 shadow-soft">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-semibold">Menu</p>
              <button onClick={() => setOpen(false)} aria-label="Close drawer">
                ✕
              </button>
            </div>
            <form onSubmit={onSearch} className="mb-6" role="search">
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search homeware" aria-label="Search" />
            </form>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-base font-medium">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
