import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { defaultInputProperties } from './utils';
import type { ReactElement } from 'react';
import { TableSize } from '@/commonTypes';
import type { OriginsDestinationsFormProperties } from './types';

export default function OriginsDestinationsForm({
	onSubmit
}: OriginsDestinationsFormProperties): ReactElement {
	return (
		<div className='flex-col-center w-full my-auto'>
			<Form<TableSize>
				id='origins-destinations'
				onSubmit={onSubmit}
				className='flex flex-col gap-10'
			>
				<Input
					{...defaultInputProperties}
					name='origins'
					placeholder='how many origins?'
				/>
				<Input
					{...defaultInputProperties}
					name='destinations'
					placeholder='how many destinations?'
				/>

				<Button type='submit' className='text-base'>
					generate table
				</Button>
			</Form>
		</div>
	);
}
