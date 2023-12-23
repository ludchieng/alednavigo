import type { PageLoad } from './$types';
import type { LineMap } from '../../../../static/schemas/line-maps/line-maps';

export const load: PageLoad = async ({ fetch, params }) => {
  const { line } = params;
  const lineMap: LineMap = await (await fetch(`/schemas/line-maps/${line}.json`)).json();
  return {
    lineMap,
  };
};
