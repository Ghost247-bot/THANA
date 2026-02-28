import { InputHTMLAttributes } from 'react';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="h-11 w-full rounded-full border border-charcoal/20 bg-white px-4 text-sm placeholder:text-charcoal/50"
    />
  );
}
