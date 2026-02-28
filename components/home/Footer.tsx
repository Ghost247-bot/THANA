import Link from 'next/link';

const groups = {
  Shop: ['New In', 'Best Sellers', 'Sale'],
  Support: ['Shipping', 'Returns', 'Contact'],
  Company: ['About', 'Journal', 'Careers']
};

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-bold">THANA HOMEWARE</p>
          <p className="mt-3 text-sm text-charcoal/70">Objects and textiles designed to elevate daily living.</p>
        </div>
        {Object.entries(groups).map(([title, links]) => (
          <div key={title}>
            <h3 className="font-semibold">{title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-charcoal/70">
              {links.map((label) => (
                <li key={label}>
                  <Link href="#" className="hover:text-charcoal">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-charcoal/10 px-4 py-4 text-center text-xs text-charcoal/60">
        © {new Date().getFullYear()} Thana Homeware. All rights reserved.
      </div>
    </footer>
  );
}
