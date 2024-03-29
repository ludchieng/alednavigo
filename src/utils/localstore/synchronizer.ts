import { parseLine } from '../parser'
import { setLine } from './lines'

export const lastUpdatedAt = () => {
  const updatedAt = localStorage.getItem('lines.updatedAt')
  return updatedAt ? new Date(updatedAt) : null
}

export const synchronize = async () => {
  const lines = await synchronizeFile('/schemas/lines.json', 'lines')
  return Promise.all(
    Object.values(lines).map((line: any) => synchronizeLine(line.slugName)),
  ).then(() => {
    localStorage.setItem('lines.updatedAt', new Date().toISOString())
  })
}

export const synchronizeLine = async (line: string) => {
  const res = await fetch(`/schemas/lines/${line}.tsv`)
  if (res.status >= 400) return
  const tsv = await res.text()
  const { routeMap, stops } = parseLine(tsv)
  setLine(line, { routeMap, stops })
}

export const synchronizeFile = async (file: string, localKey: string) => {
  const res = await fetch(file)
  if (res.status >= 400) return
  const data = await res.json()
  localStorage.setItem(localKey, JSON.stringify(data))
  return data
}
