'use client';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button/Button';
import { ReactElement } from 'react';
import { AvailableMethods } from '@/types';
import Title from '@/components/Title/Title';

export default function Home(): ReactElement {
	const { push } = useRouter();

	function onSelectMethod(method: AvailableMethods): void {
		push(`/${method}`);
	}

	return (
		<div className='h-full w-full flex-col flex items-center justify-start'>
			<Title />

			<div className='flex-col-center w-full my-auto'>
				<Button
					onClick={(): void => onSelectMethod(AvailableMethods.vogel)}
				>
					vogel method
				</Button>
			</div>
		</div>
	);
}
