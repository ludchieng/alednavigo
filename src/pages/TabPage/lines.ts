export type Line = {
  name: string,
  slug: string,
  href: string,
}

export type LineCategory = {
  name: string,
  lines: Line[]
}

const lines: LineCategory[] = [
  {
    name: 'Métros',
    lines: [
      { name: 'Métro 1', slug: 'metro-1', href: '/metros/1' },
      { name: 'Métro 2', slug: 'metro-2', href: '/metros/2' },
      { name: 'Métro 3', slug: 'metro-3', href: '/metros/3' },
      { name: 'Métro 3 bis', slug: 'metro-3bis', href: '/metros/3bis' },
      { name: 'Métro 4', slug: 'metro-4', href: '/metros/4' },
      { name: 'Métro 5', slug: 'metro-5', href: '/metros/5' },
      { name: 'Métro 6', slug: 'metro-6', href: '/metros/6' },
      { name: 'Métro 7', slug: 'metro-7', href: '/metros/7' },
      { name: 'Métro 7 bis', slug: 'metro-7bis', href: '/metros/7bis' },
      { name: 'Métro 8', slug: 'metro-8', href: '/metros/8' },
      { name: 'Métro 9', slug: 'metro-9', href: '/metros/9' },
      { name: 'Métro 10', slug: 'metro-10', href: '/metros/10' },
      { name: 'Métro 11', slug: 'metro-11', href: '/metros/11' },
      { name: 'Métro 12', slug: 'metro-12', href: '/metros/12' },
      { name: 'Métro 13', slug: 'metro-13', href: '/metros/13' },
      { name: 'Métro 14', slug: 'metro-14', href: '/metros/14' },
      { name: 'Métro 15', slug: 'metro-15', href: '/metros/15' },
      { name: 'Métro 16', slug: 'metro-16', href: '/metros/16' },
      { name: 'Métro 17', slug: 'metro-17', href: '/metros/17' },
      { name: 'Métro 18', slug: 'metro-18', href: '/metros/18' },
    ],
  },
  {
    name: 'RER',
    lines: [
      { name: 'RER A', slug: 'rer-a', href: '/rer/a' },
      { name: 'RER B', slug: 'rer-b', href: '/rer/b' },
      { name: 'RER C', slug: 'rer-c', href: '/rer/c' },
      { name: 'RER D', slug: 'rer-d', href: '/rer/d' },
      { name: 'RER E', slug: 'rer-e', href: '/rer/e' },
    ],
  },
  {
    name: 'Transiliens',
    lines: [
      { name: 'Train H', slug: 'transilien-h', href: '/transiliens/h' },
      { name: 'Train J', slug: 'transilien-j', href: '/transiliens/j' },
      { name: 'Train K', slug: 'transilien-k', href: '/transiliens/k' },
      { name: 'Train L', slug: 'transilien-l', href: '/transiliens/l' },
      { name: 'Train N', slug: 'transilien-n', href: '/transiliens/n' },
      { name: 'Train P', slug: 'transilien-p', href: '/transiliens/p' },
      { name: 'Train R', slug: 'transilien-r', href: '/transiliens/r' },
      { name: 'Train U', slug: 'transilien-u', href: '/transiliens/u' },
    ],
  },
  {
    name: 'Tramways',
    lines: [
      { name: 'Tramway 1', slug: 'tramway-1', href: '/tramways/1' },
      { name: 'Tramway 2', slug: 'tramway-2', href: '/tramways/2' },
      { name: 'Tramway 3a', slug: 'tramway-3a', href: '/tramways/3a' },
      { name: 'Tramway 3b', slug: 'tramway-3b', href: '/tramways/3b' },
      { name: 'Tramway 4', slug: 'tramway-4', href: '/tramways/4' },
      { name: 'Tramway 5', slug: 'tramway-5', href: '/tramways/5' },
      { name: 'Tramway 6', slug: 'tramway-6', href: '/tramways/6' },
      { name: 'Tramway 7', slug: 'tramway-7', href: '/tramways/7' },
      { name: 'Tramway 8', slug: 'tramway-8', href: '/tramways/8' },
      { name: 'Tramway 9', slug: 'tramway-9', href: '/tramways/9' },
      { name: 'Tramway 10', slug: 'tramway-10', href: '/tramways/10' },
      { name: 'Tramway 11', slug: 'tramway-11', href: '/tramways/11' },
      { name: 'Tramway 12', slug: 'tramway-12', href: '/tramways/12' },
      { name: 'Tramway 13', slug: 'tramway-13', href: '/tramways/13' },
    ],
  },
]

export default lines
