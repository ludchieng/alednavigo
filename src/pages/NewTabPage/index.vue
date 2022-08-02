<template>
  <div class="new-tab-page">
    <h2>Favoris et personnalisés</h2>
    <hr />
    <div v-for="category in lines" :key="category.name">
      <h2>{{ category.name }}</h2>
      <hr />
      <a v-for="line in category.lines" :key="line.slug" class="icon-line">
        <LineIcon type="dark" :line="line.slug" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import lines, { LineCategory } from './lines'
import LineIcon from '@/components/LineIcon.vue'

export default Vue.extend({
  name: 'NewTabPage',
  components: {
    LineIcon,
  },
  data: (): {
    lines: LineCategory[];
  } => ({
    lines,
  }),
})
</script>

<style scoped>
.new-tab-page {
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
