import { testimonials } from '@/lib/data/home';

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <h2 className="mb-6 text-2xl font-semibold lg:text-3xl">What customers say</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.name} className="rounded-3xl border border-charcoal/10 bg-white p-6">
            <p className="text-lg leading-relaxed">“{testimonial.quote}”</p>
            <footer className="mt-4 text-sm font-semibold text-charcoal/70">— {testimonial.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
