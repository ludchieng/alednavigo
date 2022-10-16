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
    <div class="datetime">
      <span class="datetime-hh">{{ datetime.hh }}</span>
      <span class="datetime-separator">:</span>
      <span class="datetime-mm">{{ datetime.mm }}</span>
      <span class="datetime-ss">{{ datetime.ss }}</span>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import LineIcon from '@/components/Line/Icon.vue'
export default Vue.extend({
  name: 'AppHeader',
  components: { LineIcon },
  data: () => ({
    clockInterval: 0,
    datetime: {} as { hh: string, mm: string, ss: string },
  }),
  created () {
    this.clockInterval = setInterval(() => {
      const t = new Date()
      this.datetime = {
        hh: t.getHours().toString(),
        mm: t.getMinutes().toString().padStart(2, '0'),
        ss: t.getSeconds().toString().padStart(2, '0'),
      }
    }, 500)
  },
  destroyed () {
    clearInterval(this.clockInterval)
  },
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

.datetime {
  padding: 0 0.5rem 0 2.5rem;
  text-align: center;
  line-height: 2rem;
  font-size: 1.3rem;
  color: #444;
  font-weight: 600;
}

.datetime-separator {
  color: #999;
  font-size: 1.2rem;
}

.datetime-ss {
  padding-left: 0.1rem;
  font-size: 1rem;
  color: #777;
}
</style>
