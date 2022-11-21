export type DateTime = {
  hh: string,
  mm: string,
  ss: string
}

export const toDateTime = (date: Date) => {
  return {
    hh: date.getHours().toString(),
    mm: date.getMinutes().toString().padStart(2, '0'),
    ss: date.getSeconds().toString().padStart(2, '0'),
  }
}
