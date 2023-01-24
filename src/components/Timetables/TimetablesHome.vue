<template>
  <div class="tab-page-new">
    <div v-for="category in linesByCategory" :key="category.name">
      <h2>{{ category.name }}</h2>
      <hr />
      <router-link v-for="line in category.lines" :key="line.slugName"
        class="icon-line" :to="`/timetables/${$route.params.tab}/${line.slugName}`"
      >
        <LineIcon
          :lineSlugName="line.slugName"
          color="dark"
          size="lg"
          fadeIn
        />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LineIcon from '@/components/LineIcon.vue'
import { getLinesByCategory } from '@/utils/localstore/lines'

export default Vue.extend({
  name: 'TimetablesHome',
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
</style>
