'use client'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button/Button'
import { ReactElement } from 'react'
import { AvailableMethods } from '@/types'

export default function Home(): ReactElement {
  const { push } = useRouter()

  function onSelectMethod(method: AvailableMethods): void {
    push(`/${method}`)
  }

  return (
    <div className="h-full w-full flex-col flex items-center justify-start">
      choose a method:

      <div className="flex items-center justify-center w-full flex-col my-auto">
        <Button onClick={(): void => onSelectMethod(AvailableMethods.vogel)}>
          vogel method
        </Button>
      </div>
    </div>
  )
}
