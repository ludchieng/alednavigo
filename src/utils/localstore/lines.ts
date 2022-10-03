import { LineDescriptionType } from '../parser'

export const setLine = (line: string, lineDescription: Partial<LineDescriptionType>) => {
  Object.entries(lineDescription).forEach(([key, value]) => {
    localStorage.setItem(`lines.${line}.${key}`, JSON.stringify(value))
  })
}

export const getLineRouteMap = (lineSlugName: string) => {
  return JSON.parse(localStorage.getItem(`lines.${lineSlugName}.routeMap`) as string)
}

export const getLinesByRef = () => {
  return JSON.parse(localStorage.getItem('lines') as string)
}

export const getLinesByCategory = () => {
  const res = {} as { [x: string]: any }
  const lines = Object.entries(getLinesByRef())
    .filter(([k, v]) => k.trim() !== '')
    .map(([k, v]) => v) as any[]

  for (const line of lines) {
    if (!res[line.category]) res[line.category] = []
    res[line.category].push({ ...(delete line.category, line) })
  }

  return Object.entries(res)
    .map(([category, lines]) => ({
      name: category,
      lines,
    }))
    .filter((category) => !category.name.includes('TER'))
}
