<script>
  import { page } from '$app/stores';
  import Layout from '$lib/ui/Layout.svelte';
  import Header from '$lib/ui/Header.svelte';
  import '$lib/ui/css/main.css';
  import breadcrumbBracket from '$lib/ui/img/breadcrumb-bracket.svg';
</script>

<Layout>
  <Header slot="header">
    <div slot="left" class="header-left">
      <a href="/">
        <img class="logo" src="/img/app-icons/icon.png" alt="Accueil" />
      </a>
      {#if $page.params.line}
        <img src={breadcrumbBracket} alt="" />
        <a href="/timetables/{$page.params.line}/">
          <img
            class="line"
            src="/img/lines-icons/colors/{$page.params.line}.svg"
            alt="Ligne {$page.params.line}"
          />
        </a>
      {/if}
    </div>

    <div slot="center"></div>

    <div slot="right">00:00:00</div>
  </Header>

  <slot slot="main" />

  <div slot="footer">
    <p>Footer</p>
  </div>
</Layout>

<style>
  .line,
  .logo {
    display: block;
    width: 2rem;
  }

  .header-left {
    display: flex;
    gap: 0.5rem;
  }
</style>
