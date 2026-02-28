export type NavLink = { label: string; href: string };
export type Category = { name: string; image: string; href: string };
export type Product = {
  id: string;
  name: string;
  price: string;
  compareAtPrice?: string;
  rating?: number;
  image: string;
  href: string;
  badge?: string;
};
export type Testimonial = { name: string; quote: string; avatar?: string };

export const navLinks: NavLink[] = [
  { label: 'New In', href: '#' },
  { label: 'Living', href: '#' },
  { label: 'Kitchen', href: '#' },
  { label: 'Bedroom', href: '#' },
  { label: 'Sale', href: '#' }
];

export const categories: Category[] = [
  { name: 'Tableware', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80', href: '#' },
  { name: 'Soft Furnishings', image: 'https://images.unsplash.com/photo-1600566753051-f0b4d3f30b95?auto=format&fit=crop&w=800&q=80', href: '#' },
  { name: 'Decor', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80', href: '#' }
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Aurora Ceramic Vase',
    price: '$58.00',
    compareAtPrice: '$72.00',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1612196808214-b7e239e5a14b?auto=format&fit=crop&w=800&q=80',
    href: '#',
    badge: 'Best Seller'
  },
  {
    id: 'p2',
    name: 'Linen Cushion Cover',
    price: '$36.00',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1582582429416-9c8cf58f8fcb?auto=format&fit=crop&w=800&q=80',
    href: '#'
  },
  {
    id: 'p3',
    name: 'Sandstone Dinner Set',
    price: '$84.00',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=800&q=80',
    href: '#',
    badge: 'Limited'
  },
  {
    id: 'p4',
    name: 'Noir Scented Candle',
    price: '$28.00',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1631270310932-19f84fca86e7?auto=format&fit=crop&w=800&q=80',
    href: '#'
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Maya R.',
    quote: 'Every piece feels intentional. The quality and textures are exactly what my home needed.'
  },
  {
    name: 'Daniel K.',
    quote: 'Fast shipping and beautiful packaging. Thana has become my go-to for thoughtful gifts.'
  }
];
