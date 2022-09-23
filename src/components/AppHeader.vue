<template>
  <header>
    <div class="logo">
      <router-link :to="`/${ $route.params.tab }`">
        <img alt="Logo Alednavigo" src="@/assets/icon-light.png" />
      </router-link>
    </div>
    <button id="btn-synchronize" @click="synchronize">Synchronize</button>
  </header>
</template>

<script lang="ts">
import { synchronize } from '@/utils/synchronizer'
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHeader',
  methods: {
    synchronize () {
      synchronize()
    },
  },
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

#btn-synchronize {
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  border: solid 1px #333;
  border-radius: 0.2rem;
  padding: 0.5rem;
}

.logo img {
  display: block;
  width: 32px;
}
</style>
