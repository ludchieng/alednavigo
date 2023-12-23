type StopSlug = string;

type Stop = {
  '#': number,
  monitoringRefs: string[],
  isTerminus: boolean,
  displayName: string,
  prevStops: string[],
  nextStops: string[],
  lineConnections: Array<{ line: string, slugName: string }>
}

export type LineMaps = Array<{
  drawing: string[],
  isTerminus: true,
  slugName: string,
  displayName: string,
  lineConnections: Array<{ line: string, slugName: string }>
} | {
  drawing: string[],
}>;
