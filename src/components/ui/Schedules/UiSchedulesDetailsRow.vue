<template>
  <div class="schedules-details-row">
    <span class="label">
      {{ label }}
    </span>
    <span class="value">
      {{ value }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UiSchedulesDetailsRow',
  props: {
    label: String,
    value: String,
  },
})
</script>

<style scoped>
.schedules-details-row {
  font-size: 0.9rem;
  line-height: 1.5;
}

.label {
  font-size: 0.875rem;
  color: #777;
}

.value {
  font-size: 0.9375rem;
  margin-left: 0.25rem;
  font-weight: 600;
  color: #3f3f3f;
}
</style>
