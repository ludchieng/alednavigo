<template>
  <DesignIcon
    v-if="lineSlugName"
    :src="`/img/lines-icons/${color}/${lineSlugName}.svg`"
    :alt="`${lineSlugName}`"
    :size="size"
    :fade-in="fadeIn"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import DesignIcon, { DesignIconSize } from '@/components/ui/UiIcon.vue'

export type LineIconColor = 'colors' | 'light' | 'dark'

export default Vue.extend({
  name: 'LineIcon',
  components: {
    DesignIcon,
  },
  props: {
    lineSlugName: String,
    fadeIn: {
      type: Boolean,
      default: false,
    },
    color: String as PropType<LineIconColor>,
    size: String as PropType<DesignIconSize>,
  },
})
</script>

<style scoped>
</style>
