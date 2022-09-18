<template>
  <div class="tab-page-new">
    <h2>Favoris et personnalisés</h2>
    <hr />
    <div v-for="category in lines" :key="category.name">
      <h2>{{ category.name }}</h2>
      <hr />
      <router-link v-for="line in category.lines" :key="line.slug" class="icon-line"
        :to="`${tabNumber}${line.href}`">
        <LineIcon type="dark" :line="line.slug" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import lines, { LineCategory } from './lines'
import LineIcon from '@/components/LineIcon.vue'

export default Vue.extend({
  name: 'TabPageNew',
  components: {
    LineIcon,
  },
  props: {
    tabNumber: Number,
  },
  data: (): {
    lines: LineCategory[];
  } => ({
    lines,
  }),
  methods: {
    redirectToHome () {
      this.$router.push('/1')
    },
  },
})
</script>

<style scoped>
.tab-page-new {
  padding: 0.5rem;
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
  margin: 0.5rem 0.5rem 0 0;
}

.icon-line img {
  width: 60px;
  height: 60px;
}
</style>
