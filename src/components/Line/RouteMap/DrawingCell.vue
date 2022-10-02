<template>
  <svg v-if="content === '*'" class="drawing-stop" viewBox="0 0 16 16">
    <circle v-if="isLargeCircle" cx="8" cy="8" r="6"/>
    <circle v-else cx="8" cy="8" r="4"/>
  </svg>

  <svg v-else-if="content === '^'" class="drawing-path" viewBox="0 0 16 16">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
    <path d="M0,8 a8,-8 0 0,1 8,-8 L0,0 Z" />
  </svg>

  <svg v-else-if="content === 'v'" class="drawing-path" viewBox="0 0 16 16">
    <path d="M0,8 a8,8 0 0,0 8,8 L0,16 Z" />
    <path d="M8,16 a8,-8 0 0,0 8,-8 L16,16 Z" />
  </svg>

  <svg v-else-if="content === 'o\\'" class="drawing-path" viewBox="0 0 16 16">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
  </svg>

  <svg v-else-if="content === 'o/'" class="drawing-path" viewBox="0 0 16 16" transform="rotate(90)">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
  </svg>

  <svg v-else-if="content === '\\o'" class="drawing-path" viewBox="0 0 16 16" transform="rotate(180)">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
  </svg>

  <svg v-else-if="content === '/o'" class="drawing-path" viewBox="0 0 16 16" transform="rotate(270)">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
  </svg>

  <svg v-else-if="content === '\\.'" class="drawing-path" viewBox="0 0 16 16">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
  </svg>

  <svg v-else-if="content === '/.'" class="drawing-path" viewBox="0 0 16 16" transform="rotate(90)">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
  </svg>

  <svg v-else-if="content === '.\\'" class="drawing-path" viewBox="0 0 16 16" transform="rotate(180)">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
  </svg>

  <svg v-else-if="content === './'" class="drawing-path" viewBox="0 0 16 16" transform="rotate(270)">
    <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
  </svg>

  <span v-else-if="['↑', '↓'].includes(content)">{{ content }}</span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LineRouteMapDrawingCell',
  props: {
    content: String,
    isLargeCircle: {
      default: false,
      type: Boolean,
    },
  },
})
</script>

<style scoped>
.drawing-stop {
  display: block;
  z-index: 0;
  position: absolute;
  transform: translate(-0.25rem, 0.5rem);
  width: 1.5rem;
  fill: #fff;
  stroke: #2F2F2F;
  stroke-width: 2.5px;
}

.drawing-path {
  display: block;
  fill: #fff;
}
</style>
