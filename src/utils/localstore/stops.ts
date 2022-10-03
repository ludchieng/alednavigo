export const getStop = (line: string, slugName: string) => {
  return JSON.parse(
    localStorage.getItem(`lines.${line}.stops`) as string,
  )[slugName]
}
