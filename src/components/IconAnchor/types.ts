import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface IconAnchorProperties {
	alt: string;
	href: string;
	src: StaticImport;
	rounded?: boolean;
}
