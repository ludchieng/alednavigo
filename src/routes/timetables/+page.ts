import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  return {
    lineSections: [{
      title: 'Métros',
      lines: [
        {
          label: 'Métro 1',
          slug: 'metro-1',
        }
      ]
    }]
  }
};
