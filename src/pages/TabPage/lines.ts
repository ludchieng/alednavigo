export type Line = {
  name: string,
  slug: string,
}

export type LineCategory = {
  name: string,
  lines: Line[]
}

const lines: LineCategory[] = [
  {
    name: 'RER',
    lines: [
      { name: 'RER A', slug: 'rer-a' },
      { name: 'RER D', slug: 'rer-d' },
    ],
  },
  {
    name: 'Tramways',
    lines: [
      { name: 'Tramway 2', slug: 'tramway-2' },
    ],
  },
]

export default lines
