import { ReactElement } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Title(): ReactElement {
	const { push } = useRouter();
	const pathname = usePathname();

	function onGoHome(): void {
		push('/');
	}

	return (
		<div className='flex-col-center'>
			<p className='text-center'>
				{pathname === '/'
					? 'choose a method:'
					: `${pathname.split('/')[1]} method`}
			</p>

			{pathname !== '/' && (
				<button
					type='button'
					onClick={onGoHome}
					className='text-base font-thin group flex gap-2 mt-1'
				>
					<span className='opacity-0 group-hover:opacity-100 duration-200 transition-all'>
						&larr;{' '}
					</span>
					<p className='border-neutral-950 border-b mr-6 group-hover:text-white group-hover:border-white duration-200 transition-all'>
						choose another method
					</p>
				</button>
			)}
		</div>
	);
}
