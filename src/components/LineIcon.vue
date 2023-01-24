<template>
  <DesignIcon
    v-if="lineSlugName"
    :src="`/img/lines-icons/${color}/${lineSlugName}.svg`"
    :alt="`${lineSlugName}`"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import DesignIcon from '@/components/design/DesignIcon.vue'

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
    color: String,
  },
})
</script>

<style scoped>
</style>
