export const RouteMapTypes = [{
  drawing: [''],
  slugName: '',
  displayName: '',
  lineConnections: [''],
}, {
  drawing: [''],
}]

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
      stop.lineConnections = stop.lineConnections.map((connection: string) => (
        connection.replace(/^([^/]*)$/, `$1/${stop.slugName}`)
      ))
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
      .filter(key => !['drawing', 'slugName', 'displayName', 'lineConnections'].includes(key))
      .forEach(key => delete stop[key])
  })
  return { routeMap, stops }
}
