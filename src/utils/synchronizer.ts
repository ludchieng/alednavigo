import { parseLine } from './parser'

export const synchronize = async () => {
  const res = await fetch('/schemas/lines.json')
  if (res.status >= 400) return
  const lines = await res.json()
  localStorage.setItem('lines', JSON.stringify(lines))
  for (const type of lines) {
    for (const line of type.lines) {
      synchronizeLine(line.slugName)
    }
  }
  localStorage.setItem('lines.updatedAt', new Date().toISOString())
}

export const synchronizeLine = async (line: string) => {
  const res = await fetch(`/schemas/lines/${line}.tsv`)
  if (res.status >= 400) return
  const tsv = await res.text()
  const { routeMap, stops } = parseLine(tsv)
  localStorage.setItem(`lines.${line}.routeMap`, JSON.stringify(routeMap))
  localStorage.setItem(`lines.${line}.stops`, JSON.stringify(stops))
}
