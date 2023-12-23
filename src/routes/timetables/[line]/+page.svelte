<script lang="ts">
  import { page } from '$app/stores';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<section class="wrapper">
  <table>
    {#each data.lineMap as row}
      <tr>
        {#each row.drawing as cell}
          <td class:filled={cell !== ''}>
            {#if cell === '*'}
              <svg class="drawing-stop" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r={row.isTerminus ? 6 : 4} />
              </svg>
            {:else if cell === '^'}
              <svg class="drawing-path" viewBox="0 0 16 16">
                <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
                <path d="M0,8 a8,-8 0 0,1 8,-8 L0,0 Z" />
              </svg>
            {:else if cell === 'v'}
              <svg class="drawing-path" viewBox="0 0 16 16">
                <path d="M0,8 a8,8 0 0,0 8,8 L0,16 Z" />
                <path d="M8,16 a8,-8 0 0,0 8,-8 L16,16 Z" />
              </svg>
            {:else if cell === 'o\\'}
              <svg class="drawing-path" viewBox="0 0 16 16">
                <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
              </svg>
            {:else if cell === 'o/'}
              <svg class="drawing-path" viewBox="0 0 16 16" transform="rotate(90)">
                <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
              </svg>
            {:else if cell === '\\o'}
              <svg class="drawing-path" viewBox="0 0 16 16" transform="rotate(180)">
                <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
              </svg>
            {:else if cell === '/o'}
              <svg class="drawing-path" viewBox="0 0 16 16" transform="rotate(270)">
                <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
              </svg>
            {:else if cell === '\\.'}
              <svg class="drawing-path" viewBox="0 0 16 16">
                <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
              </svg>
            {:else if cell === '/.'}
              <svg class="drawing-path" viewBox="0 0 16 16" transform="rotate(90)">
                <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
              </svg>
            {:else if cell === '.\\'}
              <svg class="drawing-path" viewBox="0 0 16 16" transform="rotate(180)">
                <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
              </svg>
            {:else if cell === './'}
              <svg class="drawing-path" viewBox="0 0 16 16" transform="rotate(270)">
                <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
              </svg>
            {/if}
            {#if ['↑', '↓'].includes(cell)}
              <span>{cell}</span>
            {/if}
          </td>
        {/each}
        {#if row.slugName}
          <td class="label">
            <a
              class="label-text"
              class:label-terminus={row.isTerminus}
              href="/timetables/{$page.params.line}/{row.slugName}"
            >
              {row.displayName}
              {#if row.lineConnections}
                <div class="line-connections">
                  {#each row.lineConnections as connection}
                    <img
                      src="/img/lines-icons/colors/{connection.line}.svg"
                      alt={connection.line}
                    />
                  {/each}
                </div>
              {/if}
            </a>
          </td>
        {/if}
      </tr>
    {/each}
  </table>
</section>

<style>
  .wrapper {
    margin: 6rem 1rem;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  td,
  tr {
    padding: 0;
    margin: 0;
    height: 1rem;
  }

  td {
    position: relative;
    font-size: 1rem;
    width: 1rem;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .filled {
    background-color: #2f2f2f;
    width: 1rem;
    min-height: 1.3rem;
    padding: 0;
    font-size: 1rem;
    text-align: center;
    color: #ffffff;
    line-height: 2.7rem;
    vertical-align: top;
  }

  .drawing-stop {
    display: block;
    z-index: 0;
    position: absolute;
    transform: translate(-0.25rem, 0.5rem);
    width: 1.5rem;
    fill: #fff;
    stroke: #2f2f2f;
    stroke-width: 2.5px;
  }

  .drawing-path {
    display: block;
    fill: #fff;
  }

  .label {
    padding: 0.2rem 0;
    flex-shrink: 1;
    flex-grow: 1;
    width: auto;
  }

  .label-terminus {
    font-weight: 700;
    color: #000;
  }

  .label-text {
    display: inline-block;
    padding: 0.4rem 0 0.4rem 1rem;
    min-width: 70%;
    margin-right: 0.75rem;
    text-decoration: inherit;
    color: inherit;
  }

  .line-connections > img {
    margin-top: 0.2rem;
    margin-right: 0.2rem;
  }
</style>
