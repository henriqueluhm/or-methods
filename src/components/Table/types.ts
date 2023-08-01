import { TableSize } from '@/commonTypes';

export interface TableWrapperProperties {
	tableSize: TableSize;
}

export interface TableDestinationsHeaderProperties {
	destinations: number;
}

export interface TableInputCellProperties {
	name: string;
	defaultValue: string;
}
