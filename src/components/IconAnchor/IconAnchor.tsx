import Image from 'next/image';
import { ReactElement } from 'react';
import linkedInSvg from '../../../public/linkedIn.svg';
import { IconAnchorProperties } from './types';
import { twMerge } from 'tailwind-merge';

export default function IconAnchor({
	href,
	src,
	alt,
	rounded
}: IconAnchorProperties): ReactElement {
	return (
		<a
			href={href}
			target='_blank'
			className={twMerge(
				'w-5 h-5 sm:w-6 sm:h-6 hover:shadow-neon  duration-200',
				rounded ? 'rounded-full' : 'rounded-sm'
			)}
		>
			<Image src={src} alt={alt} className='w-5 h-5 sm:w-6 sm:h-6' />
		</a>
	);
}
