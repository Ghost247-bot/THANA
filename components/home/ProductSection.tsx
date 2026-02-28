import { Product } from '@/lib/data/home';
import { ProductCard } from '@/components/ui/ProductCard';

export function ProductSection({ title, products }: { title: string; products: Product[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold lg:text-3xl">{title}</h2>
        <a href="#" className="text-sm font-medium text-clay hover:underline">
          View all
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
