import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/lib/data/home';

export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <h2 className="mb-6 text-2xl font-semibold lg:text-3xl">Featured Collections</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.name} href={category.href} className="group relative overflow-hidden rounded-3xl">
            <div className="relative aspect-[5/6]">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10" />
            <p className="absolute bottom-4 left-4 text-lg font-semibold text-white">{category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
