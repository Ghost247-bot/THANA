import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-16">
      <div className="space-y-6">
        {/* TODO(Figma: missing final headline/subheadline copy from “Homepage / Desktop” hero). */}
        <p className="text-xs uppercase tracking-[0.2em] text-charcoal/70">Designed for mindful living</p>
        <h1 className="text-4xl font-semibold leading-tight lg:text-6xl">Timeless homeware for everyday rituals.</h1>
        <p className="max-w-lg text-charcoal/70">Curated ceramics, soft textiles, and warm accents made to bring calm into every room.</p>
        <div className="flex flex-wrap gap-3">
          <Button href="#">Shop Collection</Button>
          <Button href="#" variant="ghost">
            Explore New In
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-[2rem] bg-mist">
        <div className="relative aspect-[4/5] lg:aspect-[4/3]">
          <Image
            src="https://images.unsplash.com/photo-1616594039964-3c65f4ec6f4d?auto=format&fit=crop&w=1200&q=80"
            alt="Neutral-toned home decor styling"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
