/* eslint-disable quote-props */
/* eslint-disable no-tabs */
export default {
  tsv: `
  \t@ \tmonitoringRefs \tslugName           \tdisplayName         \tprevStops          \tnextStops         \tlineConnections
* \t@ \t         58876 \tgournay-sur-chevre \tGournay-sur-Chèvre  \t                   \tclaquos-les-troux \tline-2/gournay-le-vesoul
| \t@
* \t@ \t           469 \tclaquos-les-troux  \tClaquos – les Troux \tgournay-sur-chèvre \tcastel-aux-lopez  \t
* \t@ \t        134008 \tcastel-aux-lopez   \tCastel-aux-Lopez    \tclaquos-les-troux  \t                  \tline-2	
`,
  routeMap: [
    {
      drawing: ['*'],
      isTerminus: false,
      slugName: 'gournay-sur-chevre',
      displayName: 'Gournay-sur-Chèvre',
      lineConnections: [{
        line: 'line-2',
        slugName: 'gournay-le-vesoul',
      }],
    },
    {
      drawing: ['|'],
    },
    {
      drawing: ['*'],
      isTerminus: false,
      slugName: 'claquos-les-troux',
      displayName: 'Claquos – les Troux',
      lineConnections: [],
    },
    {
      drawing: ['*'],
      isTerminus: false,
      slugName: 'castel-aux-lopez',
      displayName: 'Castel-aux-Lopez',
      lineConnections: [{
        line: 'line-2',
        slugName: 'castel-aux-lopez',
      }],
    },
  ],
  stops: {
    'gournay-sur-chevre': {
      monitoringRefs: ['58876'],
      displayName: 'Gournay-sur-Chèvre',
      isTerminus: false,
      prevStops: [],
      nextStops: ['claquos-les-troux'],
      lineConnections: [{
        line: 'line-2',
        slugName: 'gournay-le-vesoul',
      }],
    },
    'claquos-les-troux': {
      monitoringRefs: ['469'],
      displayName: 'Claquos – les Troux',
      isTerminus: false,
      prevStops: ['gournay-sur-chèvre'],
      nextStops: ['castel-aux-lopez'],
      lineConnections: [],
    },
    'castel-aux-lopez': {
      monitoringRefs: ['134008'],
      displayName: 'Castel-aux-Lopez',
      isTerminus: false,
      prevStops: ['claquos-les-troux'],
      nextStops: [],
      lineConnections: [{
        line: 'line-2',
        slugName: 'castel-aux-lopez',
      }],
    },
  },
}
