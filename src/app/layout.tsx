import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Roboto_Mono } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['200','400', '600'], 
  style: ['normal'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'OR Methods',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={twMerge(montserrat.variable, 'font-sans')}>{children}</body>
    </html>
  )
}