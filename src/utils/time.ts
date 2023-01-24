export type Time = {
  hh: string,
  mm: string,
  ss: string
}

export const toTime = (date: Date) => {
  return {
    hh: date.getHours().toString(),
    mm: date.getMinutes().toString().padStart(2, '0'),
    ss: date.getSeconds().toString().padStart(2, '0'),
  }
}
