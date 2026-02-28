'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/lib/data/home';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  return (
    <article className="group rounded-3xl border border-charcoal/10 bg-white p-4 transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={product.href} className="relative mb-4 block overflow-hidden rounded-2xl">
        <div className="relative aspect-[4/5]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
        {product.badge && (
          <div className="absolute left-3 top-3">
            <Badge label={product.badge} />
          </div>
        )}
      </Link>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">{product.name}</h3>
        <p className="text-sm">
          {product.compareAtPrice && <span className="mr-2 text-charcoal/40 line-through">{product.compareAtPrice}</span>}
          <span className="font-semibold">{product.price}</span>
        </p>
        <Button
          className="w-full"
          variant={added ? 'secondary' : 'primary'}
          onClick={() => {
            setAdded(true);
            setTimeout(() => setAdded(false), 1200);
          }}
        >
          {added ? 'Added' : 'Add to cart'}
        </Button>
      </div>
    </article>
  );
}
