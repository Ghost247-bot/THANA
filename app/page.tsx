import { AnnouncementBar } from '@/components/home/AnnouncementBar';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { Footer } from '@/components/home/Footer';
import { Header } from '@/components/home/Header';
import { HeroSection } from '@/components/home/HeroSection';
import { Newsletter } from '@/components/home/Newsletter';
import { ProductSection } from '@/components/home/ProductSection';
import { PromoBanner } from '@/components/home/PromoBanner';
import { Testimonials } from '@/components/home/Testimonials';
import { ValueProps } from '@/components/home/ValueProps';
import { products } from '@/lib/data/home';

export default function HomePage() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <CategoriesSection />
      <ProductSection title="Best Sellers" products={products} />
      <PromoBanner />
      <ProductSection title="New Arrivals" products={[...products].reverse()} />
      <ValueProps />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
