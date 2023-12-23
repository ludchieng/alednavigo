<script lang="ts">
  import LineMapLabel from './LineMapLabel.svelte';
  import LineMapDrawing from './LineMapDrawing.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<section class="wrapper">
  <table>
    {#each data.lineMap as row}
      <tr>
        {#each row.drawing as content}
          <td class:filled={content !== ''}>
            <LineMapDrawing {content} isTerminus={row.isStop && row.isTerminus} />
          </td>
        {/each}
        {#if row.isStop}
          <td class="label">
            <LineMapLabel
              displayName={row.displayName}
              href={row.href}
              isTerminus={row.isTerminus}
              lineConnections={row.lineConnections}
            />
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

  .label {
    padding: 0.2rem 0;
    flex-shrink: 1;
    flex-grow: 1;
    width: auto;
  }
</style>
