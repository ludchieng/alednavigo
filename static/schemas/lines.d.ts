export type LineRef = string

export type Line = {
  show: boolean
  index: number
  category: string
  label: string
  slug: string
}

export type Lines = Record<LineRef, Line>
