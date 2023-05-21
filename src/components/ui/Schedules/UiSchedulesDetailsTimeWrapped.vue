<template>
  <div class="schedules-details-time-wrapped">
    <div class="label">
      {{ label }}
    </div>
    <UiClock
      :time="time"
      :text-gray="isTimeTextGray"
    />
    <div
      v-if="sublabel"
      class="sublabel"
    >
      {{ sublabel }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import UiClock from '@/components/ui/UiClock.vue'
import { Time, toTime } from '@/utils/time'

export default Vue.extend({
  name: 'UiSchedulesDetailsTimeWrapped',
  components: {
    UiClock,
  },
  props: {
    label: String,
    time: Object as PropType<Time>,
    isTimeTextGray: {
      type: Boolean,
      default: false,
    },
    sublabel: String,
  },
  methods: {
    toTime,
  },
})
</script>

<style scoped>
.schedules-details-time-wrapped {
  margin-bottom: 0.5rem;
}

.label {
  font-size: 0.875rem;
}

.sublabel {
  font-style: italic;
  color: #515151;
  font-size: 0.9rem;
}
</style>
