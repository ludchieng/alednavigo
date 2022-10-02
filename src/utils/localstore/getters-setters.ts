import { LineDescriptionType } from '../parser'

export const setLine = (line: string, lineDescription: Partial<LineDescriptionType>) => {
  Object.entries(lineDescription).forEach(([key, value]) => {
    localStorage.setItem(`lines.${line}.${key}`, JSON.stringify(value))
  })
}

export const getStopName = (line: string, slugName: string) => {
  return JSON.parse(
    localStorage.getItem(`lines.${line}.stops`) as string,
  )[slugName]
}
