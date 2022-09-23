import { parseLine } from '@/utils/parser'
import line1 from './mockdata/line-1'
import line2 from './mockdata/line-2'

describe('parser', () => {
  it('parse line from tsv (golden master 1)', () => {
    expect(parseLine(line1.tsv)).toStrictEqual({
      routeMap: line1.routeMap,
      stops: line1.stops,
    })
  })

  it('parse line from tsv (golden master 2)', () => {
    expect(parseLine(line2.tsv)).toStrictEqual({
      routeMap: line2.routeMap,
      stops: line2.stops,
    })
  })
})
