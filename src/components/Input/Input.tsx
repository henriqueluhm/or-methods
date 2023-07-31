import { ReactElement } from 'react';
import { NumericFormat } from 'react-number-format';
import { useController, useFormContext } from 'react-hook-form';
import { InputProperties } from './types';
import './styles.css';

export default function Input({
  name,
  placeholder,
  defaultValue,
  rules,
  ...properties
}: InputProperties): ReactElement {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
    defaultValue,
    rules,
  });

  return (
    <div className="relative inputWrapper text-lg">
      <NumericFormat
        {...properties}
        name={name}
        value={field.value}
        onChange={field.onChange}
        autoComplete="off"
        className="p-2 outline-none bg-neutral-950 transition-all duration-400 border border-neutral-400 focus:border-white focus:shadow-neon rounded-sm"
      />
      <span className="absolute mt-1 text-base transition-all duration-400 text-neutral-500 left-0 p-2 pointer-events-none">
        {placeholder}
      </span>
    </div>
  );
}
