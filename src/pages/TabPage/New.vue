<template>
  <div class="tab-page-new">
    <div v-for="category in linesByCategory" :key="category.name">
      <h2>{{ category.name }}</h2>
      <hr />
      <router-link v-for="line in category.lines" :key="line.slugName"
        class="icon-line" :to="`/${$store.state.tabNumber}/${line.slugName}`"
      >
        <LineIcon :lineSlugName="line.slugName" theme="dark" fadeIn />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LineIcon from '@/components/Line/Icon.vue'

export default Vue.extend({
  name: 'TabPageNew',
  components: { LineIcon },
  methods: {
    redirectToHome () {
      this.$router.push('/1')
    },
  },
  computed: {
    linesByCategory () {
      const res = {} as {[x: string]: any}
      const lines = JSON.parse(localStorage.getItem('lines') as string)
      for (const line of Object.entries(lines).filter(([k, v]) => k.trim() !== '').map(([k, v]) => v) as any[]) {
        if (!res[line.category]) res[line.category] = []
        res[line.category].push({ ...(delete line.category, line) })
      }
      return Object.entries(res).map(([category, lines]) => ({
        name: category,
        lines,
      })).filter((category) => !category.name.includes('TER'))
    },
  },
})
</script>

<style scoped>
.tab-page-new {
  padding: 1rem;
}

h2 {
  font-size: 1.1rem;
  margin: 2rem 0 0.1rem 0;
}

hr {
  margin: 0;
  height: 2px;
  max-width: 15rem;
  background-color: #2f2f2f;
  border: 0;
}

.icon-line {
  display: inline-block;
  margin: 1rem 1rem 0 0;
}

.icon-line img {
  width: 3.5rem;
  height: 3.5rem;
}
</style>
