import type { RegisterOptions } from 'react-hook-form';
import type { NumericFormatProps } from 'react-number-format';

export interface InputProperties extends NumericFormatProps {
	name: string;
	placeholder: string;
	rules?: RegisterOptions;
}
