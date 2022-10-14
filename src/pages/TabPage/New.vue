<template>
  <div class="tab-page-new">
    <h2>Favoris et personnalisés</h2>
    <hr />
    <div v-for="category in linesByCategory" :key="category.name">
      <h2>{{ category.name }}</h2>
      <hr />
      <router-link v-for="line in category.lines" :key="line.slugName"
        class="icon-line" :to="`/${$route.params.tab}/${line.slugName}`"
      >
        <LineIcon :lineSlugName="line.slugName" theme="dark" fadeIn />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LineIcon from '@/components/Line/Icon.vue'
import { getLinesByCategory } from '@/utils/localstore/lines'

export default Vue.extend({
  name: 'TabPageNew',
  components: { LineIcon },
  computed: {
    linesByCategory () {
      return getLinesByCategory()
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
