<template>
  <DesignPageTitle :text="stop.displayName">
    <div class="line-connections">
      <router-link
        v-for="conn in stop.lineConnections"
        :key="`${conn.line}/${conn.slugName}`"
        :to="`/timetables/${$route.params.tab}/${conn.line}/${conn.slugName}`"
      >
        <LineIcon
          :line-slug-name="conn.line"
          color="dark"
          size="md"
        />
      </router-link>
    </div>
  </DesignPageTitle>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { StopType } from '@/utils/parser'
import LineIcon from '@/components/LineIcon.vue'
import DesignPageTitle from '@/components/ui/UiPageTitle.vue'

export default Vue.extend({
  name: 'StopHeader',
  components: {
    LineIcon,
    DesignPageTitle,
  },
  props: {
    stop: {} as PropType<StopType>,
  },
})
</script>

<style scoped>
.line-connections {
  display: inline-block;
}

.line-connections img {
  width: 2rem;
  margin: 0.4rem 0.4rem 0.4rem 0;
  vertical-align: -0.8rem;
}
</style>
