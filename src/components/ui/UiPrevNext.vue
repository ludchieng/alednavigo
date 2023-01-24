<template>
  <div class="prev-next">
    <ul class="prev-list-items">
      <li
        v-for="({ label, link }, i) in prevItems"
        :key="i"
        class="prev"
      >
        <router-link :to="link">
          <span class="label">
            {{ label }}
          </span>
        </router-link>
      </li>
    </ul>
    <ul class="next-list-items">
      <li
        v-for="({ label, link }, i) in nextItems"
        :key="i"
        class="next"
      >
        <router-link :to="link">
          <span class="label">
            {{ label }}
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export type PrevNextItem = {
  label: string,
  link: string,
}

export default Vue.extend({
  name: 'UiPrevNext',
  props: {
    prevItems: [] as PropType<PrevNextItem[]>,
    nextItems: [] as PropType<PrevNextItem[]>,
  },
})
</script>

<style scoped>
.prev-next {
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
}

.prev-list-items,
.next-list-items {
  width: calc(50% - 0.25rem);
}

.prev a,
.next a {
  display: flex;
  padding: 0.8rem 0;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  background-color: #dfdfdf;
  border-radius: 0.4rem;
  text-align: center;
}

.prev a::before {
  content: '〈';
}
.next a::after {
  content: '〉';
}

.label {
  display: inline-block;
  width: 100%;
  padding: 0.1rem 0.3rem 0 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
