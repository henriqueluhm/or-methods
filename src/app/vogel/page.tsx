'use client';
import Form from '@/components/Form/Form';
import Input from '@/components/Input/Input';
import Title from '@/components/Title/Title';
import Button from '@/components/Button/Button';
import type { TableSizeForm } from './types';
import type { KeyboardEvent, ReactElement } from 'react';

function onKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
	if (event.key === '.') event.preventDefault();
}

const defaultInputProperties = {
	allowNegative: false,
	defaultValue: '2',
	onKeyDown: onKeyDown
};

export default function VogelPage(): ReactElement {
	function onSubmit(data: TableSizeForm): void {
		console.log('data', data);
	}

	return (
		<div className='h-full w-full flex-col flex items-center justify-start'>
			<Title />
			<div className='flex-col-center w-full my-auto'>
				<Form
					id='origins-destinations'
					onSubmit={onSubmit}
					className='flex flex-col gap-10'
				>
					<Input
						{...defaultInputProperties}
						name='origins'
						placeholder='how many origins?'
						required
					/>
					<Input
						{...defaultInputProperties}
						name='destinations'
						placeholder='how many destinations?'
						required
					/>

					<Button type='submit' className='text-base'>
						generate table
					</Button>
				</Form>
			</div>
		</div>
	);
}
