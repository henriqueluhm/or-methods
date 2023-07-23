import { ReactNode } from "react"

export interface ButtonProperties {
    onClick: () => void
    children: ReactNode
}