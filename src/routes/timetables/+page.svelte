<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1 class="sr-only">Alednavigo</h1>

<section>
  <h2>Recherche</h2>
</section>

<section>
  <h2>Favoris</h2>
</section>

{#each data.lineSections as lineSection}
<section>
  <h2>{lineSection.title}</h2>
  <ul>
    {#each lineSection.lines as line}
    <li>
        <a href={`/timetables/${line.slug}`}>
          <img src={`/img/lines-icons/dark/${line.slug}.svg`} alt="">
        </a>
    </li>
    {/each}
  </ul>
</section>
{/each}

<a href="/timetables/metro-7/opera">(7) Opéra</a>
