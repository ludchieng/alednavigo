<template>
  <div class="new-tab-page">
    <h2>Favoris et personnalisés</h2>
    <hr />
    <h2>Métros</h2>
    <hr />
    <h2>RER</h2>
    <hr />
    <h2>Transiliens</h2>
    <hr />
    <h2>Tramways</h2>
    <hr />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NewTab',
})
</script>

<style scoped>
h2 {
  font-size: 1rem;
  margin: 4rem 0 0 0;
}

h2:first-child {
  margin: 1rem 0 0 0;
}

hr {
  margin: 0;
  height: 2px;
  width: 13rem;
  background-color: #2f2f2f;
}
</style>
