'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="rounded-3xl bg-mist p-8">
        <h2 className="text-2xl font-semibold lg:text-3xl">Join our newsletter</h2>
        <p className="mt-2 text-charcoal/70">Get styling tips, exclusive offers, and first access to new arrivals.</p>
        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <Input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <Button type="submit" variant="secondary" className="sm:w-auto">
            Subscribe
          </Button>
        </form>
        {sent && <p className="mt-3 text-sm font-medium text-clay">Thanks for subscribing.</p>}
      </div>
    </section>
  );
}
