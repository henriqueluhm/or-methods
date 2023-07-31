import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProperties
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
