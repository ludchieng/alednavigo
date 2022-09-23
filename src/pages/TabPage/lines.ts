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
      { name: 'Métro 3 bis', slug: 'metro-3bis' },
      { name: 'Métro 4', slug: 'metro-4' },
      { name: 'Métro 5', slug: 'metro-5' },
      { name: 'Métro 6', slug: 'metro-6' },
      { name: 'Métro 7', slug: 'metro-7' },
      { name: 'Métro 7 bis', slug: 'metro-7bis' },
      { name: 'Métro 8', slug: 'metro-8' },
      { name: 'Métro 9', slug: 'metro-9' },
      { name: 'Métro 10', slug: 'metro-10' },
      { name: 'Métro 11', slug: 'metro-11' },
      { name: 'Métro 12', slug: 'metro-12' },
      { name: 'Métro 13', slug: 'metro-13' },
      { name: 'Métro 14', slug: 'metro-14' },
      { name: 'Métro 15', slug: 'metro-15' },
      { name: 'Métro 16', slug: 'metro-16' },
      { name: 'Métro 17', slug: 'metro-17' },
      { name: 'Métro 18', slug: 'metro-18' },
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
    name: 'Transiliens',
    lines: [
      { name: 'Train H', slug: 'transilien-h' },
      { name: 'Train J', slug: 'transilien-j' },
      { name: 'Train K', slug: 'transilien-k' },
      { name: 'Train L', slug: 'transilien-l' },
      { name: 'Train N', slug: 'transilien-n' },
      { name: 'Train P', slug: 'transilien-p' },
      { name: 'Train R', slug: 'transilien-r' },
      { name: 'Train U', slug: 'transilien-u' },
    ],
  },
  {
    name: 'Tramways',
    lines: [
      { name: 'Tramway 1', slug: 'tramway-1' },
      { name: 'Tramway 2', slug: 'tramway-2' },
      { name: 'Tramway 3a', slug: 'tramway-3a' },
      { name: 'Tramway 3b', slug: 'tramway-3b' },
      { name: 'Tramway 4', slug: 'tramway-4' },
      { name: 'Tramway 5', slug: 'tramway-5' },
      { name: 'Tramway 6', slug: 'tramway-6' },
      { name: 'Tramway 7', slug: 'tramway-7' },
      { name: 'Tramway 8', slug: 'tramway-8' },
      { name: 'Tramway 9', slug: 'tramway-9' },
      { name: 'Tramway 10', slug: 'tramway-10' },
      { name: 'Tramway 11', slug: 'tramway-11' },
      { name: 'Tramway 12', slug: 'tramway-12' },
      { name: 'Tramway 13', slug: 'tramway-13' },
    ],
  },
]

export default lines
