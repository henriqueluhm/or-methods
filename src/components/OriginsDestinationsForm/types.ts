import type { TableSize } from '@/commonTypes';
import type { SubmitHandler } from 'react-hook-form';

export interface OriginsDestinationsFormProperties {
	onSubmit: SubmitHandler<TableSize>;
}
