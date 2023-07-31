import { ReactElement } from 'react';
import IconAnchor from '../IconAnchor/IconAnchor';

import githubSvg from '../../../public/github.svg';
import linkedInSvg from '../../../public/linkedIn.svg';

export default function Footer(): ReactElement {
	return (
		<footer className='w-full h-[40px] flex-center font-thin text-sm xl:text-base gap-x-2'>
			developed by:{' '}
			<IconAnchor
				alt='github'
				href='https://github.com/henriqueluhm'
				src={githubSvg}
				rounded
			/>
			<IconAnchor
				alt='linkedIn'
				href='https://www.linkedin.com/in/henrique-luhm-a319a71b0/'
				src={linkedInSvg}
			/>
		</footer>
	);
}
