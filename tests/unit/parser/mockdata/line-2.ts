/* eslint-disable quote-props */
/* eslint-disable no-tabs */
export default {
  tsv: `
  \t  \t  \t@ \tmonitoringRefs \tslugName              \tdisplayName             \tprevStops                       \tnextStops             \tlineConnections           
  \t  \t* \t@ \t 411350;411351 \tgournay-le-vesoul     \tGournay-le-Vesoul       \t                                \tgartempes             \tline-1/gournay-sur-chevre 
  \t  \t* \t@ \t         41528 \tgartempes             \tGartempes               \tgournay-le-vesoul               \tcastel-aux-lopez      
  \t  \t| \t@ \t               \t                      \t                        
* \t  \t| \t@ \t        411359 \tpoissy                \tPoissy                  \t                                \tacheres-grand-cormier 
* \t  \t| \t@ \t        411358 \tacheres-grand-cormier \tAchères – Grand-Cormier \tpoissy
| \t| \t| \t@
  \t| \t  \t@ \t               \t                      \t                        
  \t* \t  \t@ \t         41527 \tcastel-aux-lopez      \tCastel-aux-Lopez        \tacheres-grand-cormier;gartempes \t                      \tline-1                    
`,
  routeMap: [
    {
      drawing: ['', '', '*'],
      slugName: 'gournay-le-vesoul',
      displayName: 'Gournay-le-Vesoul',
      lineConnections: [{
        line: 'line-1',
        slugName: 'gournay-sur-chevre',
      }],
    },
    {
      drawing: ['', '', '*'],
      slugName: 'gartempes',
      displayName: 'Gartempes',
      lineConnections: [],
    },
    {
      drawing: ['', '', '|'],
    },
    {
      drawing: ['*', '', '|'],
      slugName: 'poissy',
      displayName: 'Poissy',
      lineConnections: [],
    },
    {
      drawing: ['*', '', '|'],
      slugName: 'acheres-grand-cormier',
      displayName: 'Achères – Grand-Cormier',
      lineConnections: [],
    },
    {
      drawing: ['|', '|', '|'],
    },
    {
      drawing: ['', '|', ''],
    },
    {
      drawing: ['', '*', ''],
      slugName: 'castel-aux-lopez',
      displayName: 'Castel-aux-Lopez',
      lineConnections: [{
        line: 'line-1',
        slugName: 'castel-aux-lopez',
      }],
    },
  ],
  stops: {
    'gournay-le-vesoul': {
      monitoringRefs: ['411350', '411351'],
      displayName: 'Gournay-le-Vesoul',
      prevStops: [],
      nextStops: ['gartempes'],
      lineConnections: [{
        line: 'line-1',
        slugName: 'gournay-sur-chevre',
      }],
    },
    'gartempes': {
      monitoringRefs: ['41528'],
      displayName: 'Gartempes',
      prevStops: ['gournay-le-vesoul'],
      nextStops: ['castel-aux-lopez'],
      lineConnections: [],
    },
    'poissy': {
      monitoringRefs: ['411359'],
      displayName: 'Poissy',
      prevStops: [],
      nextStops: ['acheres-grand-cormier'],
      lineConnections: [],
    },
    'acheres-grand-cormier': {
      monitoringRefs: ['411358'],
      displayName: 'Achères – Grand-Cormier',
      prevStops: ['poissy'],
      nextStops: [],
      lineConnections: [],
    },
    'castel-aux-lopez': {
      monitoringRefs: ['41527'],
      displayName: 'Castel-aux-Lopez',
      prevStops: ['acheres-grand-cormier', 'gartempes'],
      nextStops: [],
      lineConnections: [{
        line: 'line-1',
        slugName: 'castel-aux-lopez',
      }],
    },
  },
}
