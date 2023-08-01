import { ButtonHTMLAttributes, ReactNode, RefObject } from 'react';

export interface ButtonProperties
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}
