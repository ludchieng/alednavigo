<template>
  <div class="page">
    <div
      v-for="category in linesByCategory"
      :key="category.name"
    >
      <DesignContentTitle>{{ category.name }}</DesignContentTitle>
      <router-link
        v-for="line in category.lines"
        :key="line.slugName"
        class="icon-line"
        :to="`/timetables/${$route.params.tab}/${line.slugName}`"
      >
        <LineIcon
          :line-slug-name="line.slugName"
          color="dark"
          size="lg"
          fade-in
        />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LineIcon from '@/components/LineIcon.vue'
import { getLinesByCategory } from '@/utils/localstore/lines'
import DesignContentTitle from '@/components/ui/UiContentTitle.vue'

export default Vue.extend({
  name: 'TimetablesHubPage',
  components: {
    LineIcon,
    DesignContentTitle,
  },
  computed: {
    linesByCategory () {
      return getLinesByCategory()
    },
  },
})
</script>

<style scoped>
.page {
  padding: 1rem;
}

.icon-line {
  display: inline-block;
  margin: 1rem 1rem 0 0;
}
</style>
