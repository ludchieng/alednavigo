<template>
  <header>
    <div>
      <router-link v-if="$route.params.line"
        class="icon-line"
        :to="`/${ $route.params.tab }/${ $route.params.line }`"
      >
        <LineIcon type="colors" :line="$route.params.line" />
      </router-link>
    </div>
    <div>
      <router-link class="logo" :to="`/${ $route.params.tab }`">
        <img alt="Logo Alednavigo" src="@/assets/icon-light.png" />
      </router-link>
    </div>
    <div class="btn-synchronize">
      <button @click="synchronize">Force Update</button>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { synchronize } from '@/utils/synchronizer'
import LineIcon from './LineIcon.vue'

export default Vue.extend({
  name: 'AppHeader',
  components: {
    LineIcon,
  },
  methods: {
    synchronize () {
      // TODO Remove
      synchronize().then(
        () => this.$router.push('/'),
      )
    },
  },
})
</script>

<style scoped>
header {
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

.btn-synchronize {
  padding-right: 0.5rem;
  text-align: right;
}

.btn-synchronize button {
  background: transparent;
  border: solid 1px #333;
  border-radius: 0.2rem;
  padding: 0.4rem;
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
