import { FormProvider, useForm } from 'react-hook-form';
import type { ReactElement } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { FormProperties } from './types';

export default function Form<T extends FieldValues>({
	id,
	children,
	className,
	defaultValues,
	onSubmit
}: FormProperties<T>): ReactElement {
	const methods = useForm<T>({
		defaultValues
	});

	return (
		<FormProvider {...methods}>
			<form
				id={id}
				onSubmit={methods.handleSubmit((data) => {
					onSubmit(data);
				})}
				className={className}
				noValidate
			>
				{children}
			</form>
		</FormProvider>
	);
}
