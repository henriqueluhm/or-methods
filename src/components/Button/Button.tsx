import { ReactElement, useState } from 'react';
import { ButtonProperties } from './types';
import { twMerge } from 'tailwind-merge';

export default function Button({
  children,
  ...properties
}: ButtonProperties): ReactElement {
  return (
    <button
      {...properties}
      className={twMerge(
        'border select-none border-white text-neutral-400 py-2 px-6 bg-neutral-950 rounded-sm transition-all duration-200',

        'hover:text-neutral-300 hover:shadow-neon',

        'disabled:hover:shadow-none disabled:cursor-not-allowed disabled:hover:text-neutral-700 disabled:border-neutral-700 disabled:text-neutral-700',

        properties.className,
      )}
    >
      {children}
    </button>
  );
}
