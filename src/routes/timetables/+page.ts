import type { PageLoad } from './$types';
import type { Lines } from '../../../static/schemas/lines';
import { groupBy } from '$lib/utils/groupBy';

const LINES_SECTIONS = ['Métros', 'RER', 'Transilien', 'Tramways'];
const LINES_SECTIONS_ORDER = { Métros: 0, RER: 1, Transilien: 2, Tramways: 3 };

export const load: PageLoad = async ({ fetch }) => {
  const linesSectionsData: Lines = await (await fetch('/schemas/lines.json')).json();

  const lines = groupBy(Object.values(linesSectionsData), (line) => line.category);

  const linesSections = Object.entries(lines)
    .filter(([category]) => LINES_SECTIONS.includes(category))
    .map(([category, lines]) => ({
      title: category,
      lines: lines
        .filter((line) => line.show)
        .sort((a, b) => {
          return a.index > b.index;
        })
        .map((line) => ({
          label: line.label,
          slug: line.slug,
        })),
    }))
    .sort((a, b) => {
      return LINES_SECTIONS_ORDER[a.title] > LINES_SECTIONS_ORDER[b.title];
    });

  return {
    lineSections: linesSections,
  };
};
