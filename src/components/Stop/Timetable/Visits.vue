<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div>
    <details v-for="visit in visits" :key="visit.id" class="row">
      <summary class="visit">
        <div class="visit-code">
          {{ visit.journeyCode }}
        </div>
        <div v-if="visit.departureStatus === 'cancelled' || visit.arrivalStatus === 'cancelled'"
          class="visit-time visit-time-cancelled"
        >
          &times;
        </div>
        <div v-else-if="visit.nonStopPassage || !visit.departureTime"
          class="visit-time visit-time-shrouded"
          :key="`0-${updateCounter}`"
        >
          {{ ((visit.arrivalTime.valueOf() - Date.now()) / 1000 / 60).toFixed(0) }}
        </div>
        <div v-else class="visit-time" :key="`1-${updateCounter}`">
          {{ ((visit.time.valueOf() - Date.now()) / 1000 / 60).toFixed(0) }}
        </div>
        <div class="visit-destination">
          {{ visit.destination }}
        </div>
      </summary>

      <div v-if="visit.operator === 'SNCF' && !visit.nonStopPassage" class="visit-details">
        <div class="visit-details-times">
          <div v-if="visit.arrivalTime">
            <div class="visit-details-label">Arrivée</div>
            <div>
              <span class="datetime-hh">{{ visit.arrivalTime?.getHours().toString() }}</span>
              <span class="datetime-separator">:</span>
              <span class="datetime-mm">{{ visit.arrivalTime?.getMinutes().toString().padStart(2, '0') }}</span>
              <span class="datetime-ss">{{ visit.arrivalTime?.getSeconds().toString().padStart(2, '0') }}</span>
            </div>
            <div v-if="visit.arrivalStatus !== 'onTime'" class="visit-details-status">{{ visit.arrivalStatus }}</div>
          </div>
          <div>
            <div v-if="visit.plateform" class="visit-details-label">Voie</div>
            <div>{{ visit.plateform }}</div>
          </div>
          <div v-if="visit.departureTime">
            <div class="visit-details-label">Départ</div>
            <div>
              <span class="datetime-hh">{{ visit.departureTime?.getHours().toString() }}</span>
              <span class="datetime-separator">:</span>
              <span class="datetime-mm">{{ visit.departureTime?.getMinutes().toString().padStart(2, '0') }}</span>
              <span class="datetime-ss">{{ visit.departureTime?.getSeconds().toString().padStart(2, '0') }}</span>
            </div>
            <div v-if="visit.departureStatus !== 'onTime'" class="visit-details-status">{{ visit.departureStatus }}</div>
          </div>
        </div>
        <div class="visit-details-train">
          <div v-if="visit.journeyCode" class="visit-details-label">
            Mission
            <span class="visit-details-train-value">
              {{ visit.journeyCode }}
            </span>
          </div>
          <div v-if="visit.trainNumber" class="visit-details-label">
            Train no.
            <span class="visit-details-train-value">
              {{ visit.trainNumber }}
            </span>
          </div>
        </div>
      </div>

      <div v-else-if="visit.operator === 'SNCF' && visit.nonStopPassage" class="visit-details">
        <div class="visit-details-times">
          <div>
            <div class="visit-details-label">Passage sans arrêt</div>
            <div v-if="visit?.passageTime">
              <span class="datetime-hh datetime-shrouded">{{ visit.passageTime?.getHours().toString() }}</span>
              <span class="datetime-separator">:</span>
              <span class="datetime-mm datetime-shrouded">{{ visit.passageTime?.getMinutes().toString().padStart(2, '0') }}</span>
              <span class="datetime-ss">{{ visit.passageTime?.getSeconds().toString().padStart(2, '0') }}</span>
            </div>
            <div v-if="visit.departureStatus !== 'onTime'" class="visit-details-status">{{ visit.departureStatus }}</div>
          </div>
          <div>
            <div v-if="visit.plateform" class="visit-details-label">Voie</div>
            <div>{{ visit.plateform }}</div>
          </div>
        </div>
        <div class="visit-details-train">
          <div v-if="visit.journeyCode" class="visit-details-label">
            Mission
            <span class="visit-details-train-value">
              {{ visit.journeyCode }}
            </span>
          </div>
          <div v-if="visit.trainNumber" class="visit-details-label">
            Train no.
            <span class="visit-details-train-value">
              {{ visit.trainNumber }}
            </span>
          </div>
        </div>
      </div>

      <div v-else class="visit-details">
        <div class="visit-details-train">
          <div v-if="visit.departureTime" class="visit-details-label">
            Départ
            <span class="visit-details-train-value">
              <span class="datetime-hh">{{ visit.departureTime?.getHours().toString() }}</span>
              <span class="datetime-separator">:</span>
              <span class="datetime-mm">{{ visit.departureTime?.getMinutes().toString().padStart(2, '0') }}</span>
              <span class="datetime-ss">{{ visit.departureTime?.getSeconds().toString().padStart(2, '0') }}</span>
            </span>
          </div>
          <div v-else class="visit-details-label">
            Arrivée
            <span class="visit-details-train-value">
              <span class="datetime-hh">{{ visit.arrivalTime?.getHours().toString() }}</span>
              <span class="datetime-separator">:</span>
              <span class="datetime-mm">{{ visit.arrivalTime?.getMinutes().toString().padStart(2, '0') }}</span>
              <span class="datetime-ss">{{ visit.arrivalTime?.getSeconds().toString().padStart(2, '0') }}</span>
            </span>
          </div>
          <div v-if="visit.trainNumber" class="visit-details-label">
            Mission
            <span class="visit-details-train-value">
              {{ visit.trainNumber }}
            </span>
          </div>
        </div>
      </div>
    </details>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VisitType } from '@/utils/fetcher'

export default Vue.extend({
  name: 'StopTimetableVisits',
  props: {
    visits: {} as PropType<VisitType[]>,
  },
  data: () => ({
    updateCounter: 0,
    updateInterval: 0,
  }),
  created () {
    this.updateInterval = setInterval(() => {
      ++this.updateCounter
    }, 5000)
  },
  destroyed () {
    clearInterval(this.updateInterval)
  },
})
</script>

<style scoped>

.row {
  margin: 0 -1rem;
}

.visit {
  display: flex;
  min-height: 2.8rem;
  align-items: center;
}

.row:nth-child(even) {
  background-color: #ededed;
}

.visit-code {
  padding: 0.3rem 0.5rem 0.3rem 1rem;
  margin-right: 0.5rem;
  max-width: 2.4rem;
  min-width: 2.4rem; /* Prevents weird shrink */
  background: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  color: #555;
  border-radius: 0 0.2rem 0.2rem 0;
  overflow-x: hidden;
}

.visit-time {
  background-color: #202b3b;
  color: #ffc700;
  font-size: 1.2rem;
  font-weight: 600;
  min-width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.3rem;
  line-height: 2.2rem;
  text-align: center;
}

.visit-time-shrouded {
  background-color: #C2C2C2;
  color: #444;
  font-weight: 500;
  font-size: 1rem;
}

.visit-time-cancelled {
  background-color: #E59999;
  color: #a03434;
  font-size: 1.5rem;
  font-weight: 500;
}

.visit-destination {
  padding: 0.4rem 0.4rem 0.4rem 0.5rem;
}

.visit-details {
  padding: 0.2rem 0 1rem 1rem;
  overflow-x: auto;
  color: #3f3f3f;
}

.visit-details-label {
  color: #777;
  font-size: 0.9rem;
}

.visit-details-times {
  display: flex;
  max-width: 20rem;
  margin: 0 1rem 0.5rem 0;
  justify-content: space-between;
}

.visit-details-status {
  font-style: italic;
  color: #515151;
  font-size: 0.9rem;
}

.visit-details-train {
  line-height: 1.5;
}

.visit-details-train-value {
  margin-left: 0.25rem;
  font-weight: 600;
  color: #3f3f3f;
}

.datetime-shrouded {
  color: #777;
}

.datetime-hh,
.datetime-mm {
  font-size: 1.1rem;
  font-weight: 600;
}

.datetime-separator {
  color: #999;
  font-size: 1.05rem;
}

.datetime-ss {
  padding-left: 0.1rem;
  color: #777;
}

</style>
