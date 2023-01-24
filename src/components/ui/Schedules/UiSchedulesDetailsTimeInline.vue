<template>
  <div>
    <div class="label">
      {{ label }}
    </div>
    <div class="value">
      <UiClock :time="time" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import UiClock from '@/components/ui/UiClock.vue'
import { Time, toTime } from '@/utils/time'

export default Vue.extend({
  name: 'UiSchedulesDetailsTimeInline',
  components: {
    UiClock,
  },
  props: {
    label: String,
    time: {} as PropType<Time>,
  },
  methods: {
    toTime,
  },
})
</script>

<style scoped>
.label,
.value {
  display: inline-block;
  line-height: 1.5;
}

.label {
  margin-right: 0.5rem;
  color: #777;
  font-size: 0.9rem;
}

.value {
  font-size: 1.1rem;
}
</style>
