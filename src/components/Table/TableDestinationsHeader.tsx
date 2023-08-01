import { ReactElement, useEffect, useState } from 'react';
import { TableDestinationsHeaderProperties } from './types';
import TableInputCell from './TableInputCell';
import { nanoid } from 'nanoid';

interface DestinationHeaderCells {
	key: string;
	name: string;
	defaultValue: string;
}

export default function TableDestinationsHeader({
	destinations
}: TableDestinationsHeaderProperties): ReactElement {
	const [destinationHeaderCells, setDestinationHeaderCells] = useState<
		DestinationHeaderCells[]
	>([]);

	useEffect(() => {
		const destinationHeaderCellsTemp: DestinationHeaderCells[] = [];

		for (let index = 1; index <= destinations; index += 1) {
			destinationHeaderCellsTemp.push({
				key: nanoid(),
				name: `destination${index}_name`,
				defaultValue: `D${index}`
			});
		}

		setDestinationHeaderCells(destinationHeaderCellsTemp);
	}, [destinations]);

	return (
		<>
			<div id='emptyCell' className='col-span-1' />
			{destinationHeaderCells.map(({ key, name, defaultValue }) => (
				<TableInputCell
					key={key}
					name={name}
					defaultValue={defaultValue}
				/>
			))}
		</>
	);
}
