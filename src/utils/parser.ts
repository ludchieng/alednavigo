export const LineConnectionTypeDesc = {
  line: '',
  slugName: '',
}

export type LineConnectionType = {
  line: string,
  slugName: string,
}

export type RouteMapType = {
  drawing: string[],
  isTerminus?: boolean,
  slugName?: string,
  displayName?: string,
  lineConnections?: LineConnectionType[],
}

export type StopType = {
  monitoringRefs: string[],
  isTerminus: boolean,
  displayName: '',
  prevStops: string[],
  nextStops: string[],
  lineConnections: LineConnectionType[],
}

export type StopsType = {
  [x: string]: StopType
}

export const parseLine = (tsv: string) => {
  const rows = tsv.split('\n')
    // Remove empty lines
    .filter(row => !row.match(/^[\s\t]*$/))
    // Clean trailing \t at eol
    .map(row => row.replace(/[\s\t]+$/, ''))

  const splited = rows.map(r => r.split('@'))
  const transposed = (splited[0].map((_, colIndex) => splited.map(row => row[colIndex])))

  const rawLineDrawing = transposed[0].slice(1)
    .map(row => row.split('\t')
      .slice(0, -1)
      .map(cell => cell.trim()))

  const rawLineData = transposed[1].slice(1)
    .map(row => row.split('\t')
      .slice(1)
      .map(cell => cell.trim()))

  const header: string[] = transposed[1]
    .map(row => row.split('\t')
      .slice(1)
      .map(cell => cell.trim())).shift() as string[]

  if (!header.includes('monitoringRefs')) {
    throw Error('Invalid TSV data: line does not have "monitoringRefs" property')
  }

  header.unshift('drawing')
  const dataAsArray = rawLineData.map((row, i) => [rawLineDrawing[i], ...row])

  const dataAsObjects = dataAsArray
    .map(stop => stop.reduce(
      (acc: any, e, i) => ({ ...acc, [header[i]]: e }),
      {}),
    )

  dataAsObjects
    .filter(row => row.monitoringRefs)
    .forEach(stop => {
      // split inner string into an array
      ['monitoringRefs', 'prevStops', 'nextStops', 'lineConnections'].forEach((prop) => {
        stop[prop] = stop[prop] ? stop[prop].split(';') : []
      })
      // Add stop name on each 'lineConnections' when it is implicit
      stop.lineConnections = stop.lineConnections
        .map((conn: string) => (
          conn.replace(/^([^/]*)$/, `$1/${stop.slugName}`)
        ))
        .map((conn: string) => {
          const m = conn.match(/(.*)\/(.*)/)
          return { line: m?.[1] || '', slugName: m?.[2] || '' }
        })
      stop.isTerminus = stop.isTerminus === '1'
    })

  const stops = dataAsObjects
    .filter((e) => !!e.slugName && e.slugName !== '')
    .reduce(
      // eslint-disable-next-line no-return-assign, no-sequences
      (acc, e) => (acc[e.slugName] = { ...e }, delete acc[e.slugName].slugName, delete acc[e.slugName].drawing, acc),
      {},
    )

  const routeMap = [...dataAsObjects]
  routeMap.forEach(stop => {
    Object.keys(stop)
      .filter(key => !['drawing', 'isTerminus', 'slugName', 'displayName', 'lineConnections'].includes(key))
      .forEach(key => delete stop[key])
  })
  return { routeMap, stops }
}
