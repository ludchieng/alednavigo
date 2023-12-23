import type { PageLoad } from './$types';
import type { LineMap } from '../../../../static/schemas/line-maps/line-maps';

type LineMapRow =
  | {
      isStop: false;
      drawing: string[];
    }
  | {
      isStop: true;
      drawing: string[];
      href: string;
      isTerminus: boolean;
      slugName: string;
      displayName: string;
      lineConnections: string[];
    };

export const load: PageLoad = async ({ fetch, params }) => {
  const { line } = params;
  const lineMap: LineMap = await (await fetch(`/schemas/line-maps/${line}.json`)).json();

  return {
    lineMap: lineMap.map((row): LineMapRow => {
      const isStop = !!row.slugName;
      if (isStop) {
        return {
          isStop,
          drawing: row.drawing,
          displayName: row.displayName ?? '',
          slugName: row.slugName ?? '',
          href: `/timetables/${params.line}/${row.slugName}`,
          isTerminus: row.isTerminus ?? false,
          lineConnections: row.lineConnections?.map(({ line }) => line) ?? [],
        };
      } else {
        return {
          isStop,
          drawing: row.drawing,
        };
      }
    }),
  };
};
