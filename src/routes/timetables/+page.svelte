<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="wrapper">
  <h1 class="sr-only">Alednavigo</h1>

  {#each data.lineSections as lineSection}
    <section>
      <h2>{lineSection.title}</h2>
      <div class="separator" />
      <ul class="lines" aria-label={lineSection.title}>
        {#each lineSection.lines as line}
          <li>
            <a href={`/timetables/${line.slug}`}>
              <img src={`/img/lines-icons/dark/${line.slug}.svg`} alt={line.label} />
            </a>
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</div>

<style>
  .wrapper {
    padding: 6rem 1rem 0 1rem;
  }

  h2 {
    font-size: 1.125rem;
    margin: 0 0 0.125rem 0;
  }

  .separator {
    margin: 0 0 1.125rem 0;
    height: 2px;
    max-width: 15rem;
    background-color: #2f2f2f;
    border: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  ul.lines {
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .lines li img {
    width: 3.5rem;
    height: 3.5rem;
  }
</style>
