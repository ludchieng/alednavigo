<template>
  <div
    v-if="!isInline"
    class="schedules-details-time"
  >
    <UiSchedulesDetailsTimeWrapped
      v-if="visit.arrivalTime"
      label="Arrivée"
      :time="toTime(visit.arrivalTime)"
      :sublabel="visit.arrivalStatus !== 'onTime' ? visit.arrivalStatus : null"
    />
    <div>
      <div
        v-if="visit.platform"
        class="way-label"
      >
        Voie
      </div>
      <div class="way-value">
        {{ visit.platform }}
      </div>
    </div>
    <UiSchedulesDetailsTimeWrapped
      v-if="visit.departureTime"
      label="Départ"
      :time="toTime(visit.departureTime)"
      :sublabel="visit.departureStatus !== 'onTime' ? visit.departureStatus : null"
    />
  </div>
  <div
    v-else
    class="schedules-details-time"
  >
    <UiSchedulesDetailsTimeInline
      v-if="visit.departureTime"
      label="Départ"
      :time="toTime(visit.departureTime)"
    />
    <UiSchedulesDetailsTimeInline
      v-else
      label="Arrivée"
      :time="toTime(visit.arrivalTime)"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import UiSchedulesDetailsTimeWrapped from '@/components/ui/Schedules/UiSchedulesDetailsTimeWrapped.vue'
import UiSchedulesDetailsTimeInline from '@/components/ui/Schedules/UiSchedulesDetailsTimeInline.vue'
import { VisitType } from '@/utils/fetcher'
import { toTime } from '@/utils/time'

export default Vue.extend({
  name: 'StopSchedulesDetailsTimes',
  components: {
    UiSchedulesDetailsTimeWrapped,
    UiSchedulesDetailsTimeInline,
  },
  props: {
    visit: Object as PropType<VisitType>,
    isInline: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toTime,
  },
})
</script>

<style scoped>
.schedules-details-time {
  display: flex;
  max-width: 20rem;
  margin-right: 1rem;
  justify-content: space-between;
  font-size: 1.0625rem;
}

.way-label {
  font-size: 0.875rem;
}

.way-value {
  text-align: center;
  font-weight: 600;
  color: #222;
}
</style>
