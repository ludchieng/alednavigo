<template>
  <header>
    <div>
      <router-link
        v-if="$route.params.line"
        class="icon-line"
        :to="`/timetables/${ $route.params.tab }/${ $route.params.line }`"
      >
        <LineIcon
          :line-slug-name="$route.params.line"
          color="colors"
          size="md"
        />
      </router-link>
    </div>
    <div>
      <router-link
        class="logo"
        :to="`/timetables/${ $route.params.tab || '' }`"
      >
        <img
          alt="Logo Alednavigo"
          src="@/assets/icon-light.png"
        >
      </router-link>
    </div>
    <div class="clock">
      <div>
        <UiClock :time="time" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import LineIcon from '@/components/LineIcon.vue'
import UiClock from '@/components/ui/UiClock.vue'
import { Time } from '@/utils/time'
export default Vue.extend({
  name: 'AppHeader',
  components: {
    LineIcon,
    UiClock,
  },
  data: () => ({
    clockInterval: 0,
    time: Object as Time,
  }),
  created () {
    this.clockInterval = setInterval(() => {
      const t = new Date()
      this.time = {
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

.clock {
  display: flex;
  justify-content: end;
  padding: 0 1rem 0 2.5rem;
  font-size: 1.3rem;
}

.clock > div {
  transform: translateX(0.75rem);
  min-width: 6.5rem;
  text-align: center;
  line-height: 2rem;
}
</style>
