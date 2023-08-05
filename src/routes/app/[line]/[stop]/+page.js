import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (params.line === 'metro-7' && params.stop === 'opera') {
        return {
            title: 'Opéra',
        };
    }

    throw redirect(300, '/app');
}
