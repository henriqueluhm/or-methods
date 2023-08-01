'use client';
import Title from '@/components/Title/Title';
import { useState, type ReactElement } from 'react';
import OriginsDestinationsForm from '@/components/OriginsDestinationsForm/OriginsDestinationsForm';
import Table from '@/components/Table/Table';
import { TableSize } from '@/commonTypes';

export default function VogelPage(): ReactElement {
	const [tableSize, setTableSize] = useState<TableSize | undefined>();
	function onSubmit(data: TableSize): void {
		setTableSize(data);
	}

	return (
		<div className='h-full w-full flex-col flex items-center justify-start'>
			<Title />

			{tableSize ? (
				<Table tableSize={tableSize} />
			) : (
				<OriginsDestinationsForm onSubmit={onSubmit} />
			)}
		</div>
	);
}
