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
    name: 'Métros',
    lines: [
      { name: 'Métro 1', slug: 'metro-1' },
      { name: 'Métro 2', slug: 'metro-2' },
      { name: 'Métro 3', slug: 'metro-3' },
      { name: 'Métro 3bis', slug: 'metro-3bis' },
      { name: 'Métro 4', slug: 'metro-4' },
      { name: 'Métro 5', slug: 'metro-5' },
      { name: 'Métro 6', slug: 'metro-6' },
      { name: 'Métro 7', slug: 'metro-7' },
      { name: 'Métro 7bis', slug: 'metro-7bis' },
      { name: 'Métro 8', slug: 'metro-8' },
      { name: 'Métro 9', slug: 'metro-9' },
      { name: 'Métro 10', slug: 'metro-10' },
      { name: 'Métro 11', slug: 'metro-11' },
      { name: 'Métro 12', slug: 'metro-12' },
      { name: 'Métro 13', slug: 'metro-13' },
      { name: 'Métro 14', slug: 'metro-14' },
    ],
  },
  {
    name: 'RER',
    lines: [
      { name: 'RER A', slug: 'rer-a' },
      { name: 'RER B', slug: 'rer-b' },
      { name: 'RER C', slug: 'rer-c' },
      { name: 'RER D', slug: 'rer-d' },
      { name: 'RER E', slug: 'rer-e' },
    ],
  },
  {
    name: 'Transilien',
    lines: [
      { name: 'Transilien P', slug: 'transilien-p' },
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
