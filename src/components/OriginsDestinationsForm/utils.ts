import { KeyboardEvent } from 'react';

export function onInputKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
	if (event.key === '.') event.preventDefault();
}

export const defaultInputProperties = {
	allowNegative: false,
	required: true,
	defaultValue: '2',
	onKeyDown: onInputKeyDown
};
