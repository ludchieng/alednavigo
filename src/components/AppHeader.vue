<template>
  <header>
    <div>
      <router-link v-if="$route.params.line"
        class="icon-line"
        :to="`/${ $route.params.tab }/${ $route.params.line }`"
      >
      <LineIcon :lineSlugName="$route.params.line" theme="colors" />
      </router-link>
    </div>
    <div>
      <router-link class="logo" :to="`/${ $route.params.tab }`">
        <img alt="Logo Alednavigo" src="@/assets/icon-light.png" />
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import LineIcon from '@/components/Line/Icon.vue'
export default Vue.extend({
  name: 'AppHeader',
  components: { LineIcon },
})
</script>

<style scoped>
header {
  z-index: 100;
  display: grid;
  grid-template-columns: 40% 20% 40%;
  position: fixed;
  padding: 0.5rem 0;
  width: 100%;
  background-color: #ffffff;
}

.logo {
  display: block;
  width: 2rem;
  margin: 0 auto;
}

.logo img {
  display: block;
  width: 2rem;
}

.icon-line {
  display: inline-block;
  margin-left: 0.5rem;
}

.icon-line img {
  width: 2rem;
  height: 2rem;
}
</style>
