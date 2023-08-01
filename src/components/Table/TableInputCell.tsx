import { FocusEvent, ChangeEvent, ReactElement, useState } from 'react';
import { TableInputCellProperties } from './types';
import { useController, useFormContext } from 'react-hook-form';

export default function TableInputCell({
	name,
	defaultValue
}: TableInputCellProperties): ReactElement {
	const [lastValidValue, setLastValidValue] = useState<string>('');

	const { setValue, control } = useFormContext();
	const { field } = useController({
		name,
		control,
		defaultValue
	});

	function onBlur(event: FocusEvent<HTMLInputElement>): void {
		if (event.target.value === '') setValue(name, lastValidValue);
	}

	function onChange(event: ChangeEvent<HTMLInputElement>): void {
		field.onChange(event);
		if (event.target.value !== '') setLastValidValue(event.target.value);
	}

	return (
		<input
			{...field}
			id={name}
			name={name}
			defaultValue={defaultValue}
			onChange={onChange}
			onBlur={onBlur}
			className='col-span-1 md:max-w-[110px] lg:max-w-[140px] sm:max-w-[80px] min-w-[40px] max-w-[50px] outline-none bg-neutral-950 border border-neutral-400 focus:border-white focus:shadow-neon transition-all duration-200 text-center'
		/>
	);
}
