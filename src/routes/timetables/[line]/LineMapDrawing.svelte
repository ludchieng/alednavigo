<script lang="ts">
  export let content: string;
  export let isTerminus: boolean;
</script>

{#if content === '*'}
  <svg class="drawing-stop" viewBox="0 0 16 16">
    <circle cx="8" cy="8" r={isTerminus ? 6 : 4} />
  </svg>
{:else if content === '^'}
  <svg class="drawing-path" viewBox="0 0 16 16">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
    <path d="M0,8 a8,-8 0 0,1 8,-8 L0,0 Z" />
  </svg>
{:else if content === 'v'}
  <svg class="drawing-path" viewBox="0 0 16 16">
    <path d="M0,8 a8,8 0 0,0 8,8 L0,16 Z" />
    <path d="M8,16 a8,-8 0 0,0 8,-8 L16,16 Z" />
  </svg>
{:else if content === 'o\\'}
  <svg class="drawing-path" viewBox="0 0 16 16">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
  </svg>
{:else if content === 'o/'}
  <svg class="drawing-path" viewBox="0 0 16 16" transform="rotate(90)">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
  </svg>
{:else if content === '\\o'}
  <svg class="drawing-path" viewBox="0 0 16 16" transform="rotate(180)">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
  </svg>
{:else if content === '/o'}
  <svg class="drawing-path" viewBox="0 0 16 16" transform="rotate(270)">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
  </svg>
{:else if content === '\\.'}
  <svg class="drawing-path" viewBox="0 0 16 16">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
  </svg>
{:else if content === '/.'}
  <svg class="drawing-path" viewBox="0 0 16 16" transform="rotate(90)">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
  </svg>
{:else if content === '.\\'}
  <svg class="drawing-path" viewBox="0 0 16 16" transform="rotate(180)">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
  </svg>
{:else if content === './'}
  <svg class="drawing-path" viewBox="0 0 16 16" transform="rotate(270)">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
  </svg>
{/if}

{#if ['↑', '↓'].includes(content)}
  <span>{content}</span>
{/if}

<style>
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
</style>
