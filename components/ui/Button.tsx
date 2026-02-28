import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200';

const variants = {
  primary: 'bg-charcoal text-sand hover:bg-charcoal/90',
  secondary: 'bg-clay text-white hover:bg-clay/90',
  ghost: 'border border-charcoal/20 text-charcoal hover:border-charcoal/50'
};

export function Button({ children, href, variant = 'primary', className = '', onClick, type = 'button' }: ButtonProps) {
  const styles = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
