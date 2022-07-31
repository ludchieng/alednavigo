<template>
  <header>
    <div class="logo">
      <img alt="Logo Alednavigo" src="@/assets/icon-dark.png" />
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
  width: 100%;
}

.logo > img {
  display: block;
  width: 52px;
  margin: 0 auto;
}
</style>
