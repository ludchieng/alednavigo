<script lang="ts">
  export let isTerminus: boolean;
  export let href: string;
  export let displayName: string;
  export let lineConnections: string[];
</script>

<a class="label-text" class:label-terminus={isTerminus} {href}>
  {displayName}
  {#if lineConnections}
    <div class="line-connections">
      {#each lineConnections as line}
        <img src="/img/lines-icons/colors/{line}.svg" alt={line} />
      {/each}
    </div>
  {/if}
</a>

<style>
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
