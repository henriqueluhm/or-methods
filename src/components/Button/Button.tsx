import { ReactElement } from 'react'
import { ButtonProperties } from './types'

export default function Button({
  children,
  onClick,
}: ButtonProperties): ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border select-none border-white text-neutral-400 hover:text-neutral-300 py-2 px-6 bg-neutral-950 hover:shadow-button rounded-sm duration-200"
    >
      {children}
    </button>
  )
}
