import { twMerge } from 'tailwind-merge';
import TableDestinationsHeader from './TableDestinationsHeader';
import Form from '../Form/Form';
import type { ReactElement } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { TableWrapperProperties } from './types';

export default function Table({
	tableSize
}: TableWrapperProperties): ReactElement {
	const { destinations, origins } = {
		destinations: Number.parseInt(tableSize.destinations, 10),
		origins: Number.parseInt(tableSize.origins, 10)
	};

	function onSubmit(data: FieldValues): void {
		console.log('table data', data);
	}

	return (
		<div className='flex-col-center w-full my-auto'>
			<Form
				id='origins-destinations'
				onSubmit={onSubmit}
				className='flex flex-col gap-10'
			>
				<div
					className={twMerge(
						`grid grid-flow-col grid-cols-[${destinations}] grid-rows-[${origins}] sm:text-sm text-xs lg:text-base`
					)}
				>
					<TableDestinationsHeader destinations={destinations} />
				</div>
			</Form>
		</div>
	);
}
