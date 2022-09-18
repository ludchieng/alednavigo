<template>
  <header>
    <div class="logo">
      <router-link :to="`/${ $route.params.tab }`">
        <img alt="Logo Alednavigo" src="@/assets/icon-light.png" />
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHeader',
})
</script>

<style scoped>
header {
  position: fixed;
  padding: 0.5rem 0;
  width: 100%;
  background-color: #ffffff;
}

.logo {
  display: block;
  width: 32px;
  margin: 0 auto;
}

.logo img {
  display: block;
  width: 32px;
}
</style>
