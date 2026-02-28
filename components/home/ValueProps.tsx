const values = [
  { title: 'Free UK Delivery', desc: 'On orders over $75' },
  { title: '30-Day Returns', desc: 'Easy and stress-free' },
  { title: 'Crafted Quality', desc: 'Durable materials made to last' }
];

export function ValueProps() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="grid gap-4 rounded-3xl bg-white p-6 md:grid-cols-3">
        {values.map((item) => (
          <article key={item.title} className="rounded-2xl bg-sand p-5">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-charcoal/70">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
