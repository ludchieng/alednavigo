<template>
  <img v-if="type == 'dark' && line == 'metro-1'" src="@/assets/lines/dark/metro-1.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-2'" src="@/assets/lines/dark/metro-2.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-3'" src="@/assets/lines/dark/metro-3.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-3bis'" src="@/assets/lines/dark/metro-3bis.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-4'" src="@/assets/lines/dark/metro-4.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-5'" src="@/assets/lines/dark/metro-5.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-6'" src="@/assets/lines/dark/metro-6.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-7'" src="@/assets/lines/dark/metro-7.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-7bis'" src="@/assets/lines/dark/metro-7bis.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-8'" src="@/assets/lines/dark/metro-8.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-9'" src="@/assets/lines/dark/metro-9.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-10'" src="@/assets/lines/dark/metro-10.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-11'" src="@/assets/lines/dark/metro-11.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-12'" src="@/assets/lines/dark/metro-12.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-13'" src="@/assets/lines/dark/metro-13.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-14'" src="@/assets/lines/dark/metro-14.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-15'" src="@/assets/lines/dark/metro-15.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-16'" src="@/assets/lines/dark/metro-16.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-17'" src="@/assets/lines/dark/metro-17.svg" />
  <img v-else-if="type == 'dark' && line == 'metro-18'" src="@/assets/lines/dark/metro-18.svg" />
  <img v-else-if="type == 'dark' && line == 'rer-a'" src="@/assets/lines/dark/rer-a.svg" />
  <img v-else-if="type == 'dark' && line == 'rer-b'" src="@/assets/lines/dark/rer-b.svg" />
  <img v-else-if="type == 'dark' && line == 'rer-c'" src="@/assets/lines/dark/rer-c.svg" />
  <img v-else-if="type == 'dark' && line == 'rer-d'" src="@/assets/lines/dark/rer-d.svg" />
  <img v-else-if="type == 'dark' && line == 'rer-e'" src="@/assets/lines/dark/rer-e.svg" />
  <img v-else-if="type == 'dark' && line == 'transilien-h'" src="@/assets/lines/dark/transilien-h.svg" />
  <img v-else-if="type == 'dark' && line == 'transilien-j'" src="@/assets/lines/dark/transilien-j.svg" />
  <img v-else-if="type == 'dark' && line == 'transilien-k'" src="@/assets/lines/dark/transilien-k.svg" />
  <img v-else-if="type == 'dark' && line == 'transilien-l'" src="@/assets/lines/dark/transilien-l.svg" />
  <img v-else-if="type == 'dark' && line == 'transilien-n'" src="@/assets/lines/dark/transilien-n.svg" />
  <img v-else-if="type == 'dark' && line == 'transilien-p'" src="@/assets/lines/dark/transilien-p.svg" />
  <img v-else-if="type == 'dark' && line == 'transilien-r'" src="@/assets/lines/dark/transilien-r.svg" />
  <img v-else-if="type == 'dark' && line == 'transilien-u'" src="@/assets/lines/dark/transilien-u.svg" />
  <img v-else-if="type == 'dark' && line == 'tramway-1'" src="@/assets/lines/dark/tramway-1.svg" />
  <img v-else-if="type == 'dark' && line == 'tramway-2'" src="@/assets/lines/dark/tramway-2.svg" />
  <img v-else-if="type == 'dark' && line == 'tramway-3a'" src="@/assets/lines/dark/tramway-3a.svg" />
  <img v-else-if="type == 'dark' && line == 'tramway-3b'" src="@/assets/lines/dark/tramway-3b.svg" />
  <img v-else-if="type == 'dark' && line == 'tramway-4'" src="@/assets/lines/dark/tramway-4.svg" />
  <img v-else-if="type == 'dark' && line == 'tramway-5'" src="@/assets/lines/dark/tramway-5.svg" />
  <img v-else-if="type == 'dark' && line == 'tramway-6'" src="@/assets/lines/dark/tramway-6.svg" />
  <img v-else-if="type == 'dark' && line == 'tramway-7'" src="@/assets/lines/dark/tramway-7.svg" />
  <img v-else-if="type == 'dark' && line == 'tramway-8'" src="@/assets/lines/dark/tramway-8.svg" />
  <img v-else-if="type == 'dark' && line == 'tramway-9'" src="@/assets/lines/dark/tramway-9.svg" />
  <img v-else-if="type == 'dark' && line == 'tramway-10'" src="@/assets/lines/dark/tramway-10.svg" />
  <img v-else-if="type == 'dark' && line == 'tramway-11'" src="@/assets/lines/dark/tramway-11.svg" />
  <img v-else-if="type == 'dark' && line == 'tramway-12'" src="@/assets/lines/dark/tramway-12.svg" />
  <img v-else-if="type == 'dark' && line == 'tramway-13'" src="@/assets/lines/dark/tramway-13.svg" />

  <img v-else-if="type == 'white' && line == 'metro-1'" src="@/assets/lines/white/metro-1.svg" />
  <img v-else-if="type == 'white' && line == 'metro-2'" src="@/assets/lines/white/metro-2.svg" />
  <img v-else-if="type == 'white' && line == 'metro-3'" src="@/assets/lines/white/metro-3.svg" />
  <img v-else-if="type == 'white' && line == 'metro-3bis'" src="@/assets/lines/white/metro-3bis.svg" />
  <img v-else-if="type == 'white' && line == 'metro-4'" src="@/assets/lines/white/metro-4.svg" />
  <img v-else-if="type == 'white' && line == 'metro-5'" src="@/assets/lines/white/metro-5.svg" />
  <img v-else-if="type == 'white' && line == 'metro-6'" src="@/assets/lines/white/metro-6.svg" />
  <img v-else-if="type == 'white' && line == 'metro-7'" src="@/assets/lines/white/metro-7.svg" />
  <img v-else-if="type == 'white' && line == 'metro-7bis'" src="@/assets/lines/white/metro-7bis.svg" />
  <img v-else-if="type == 'white' && line == 'metro-8'" src="@/assets/lines/white/metro-8.svg" />
  <img v-else-if="type == 'white' && line == 'metro-9'" src="@/assets/lines/white/metro-9.svg" />
  <img v-else-if="type == 'white' && line == 'metro-10'" src="@/assets/lines/white/metro-10.svg" />
  <img v-else-if="type == 'white' && line == 'metro-11'" src="@/assets/lines/white/metro-11.svg" />
  <img v-else-if="type == 'white' && line == 'metro-12'" src="@/assets/lines/white/metro-12.svg" />
  <img v-else-if="type == 'white' && line == 'metro-13'" src="@/assets/lines/white/metro-13.svg" />
  <img v-else-if="type == 'white' && line == 'metro-14'" src="@/assets/lines/white/metro-14.svg" />
  <img v-else-if="type == 'white' && line == 'metro-15'" src="@/assets/lines/white/metro-15.svg" />
  <img v-else-if="type == 'white' && line == 'metro-16'" src="@/assets/lines/white/metro-16.svg" />
  <img v-else-if="type == 'white' && line == 'metro-17'" src="@/assets/lines/white/metro-17.svg" />
  <img v-else-if="type == 'white' && line == 'metro-18'" src="@/assets/lines/white/metro-18.svg" />
  <img v-else-if="type == 'white' && line == 'rer-a'" src="@/assets/lines/white/rer-a.svg" />
  <img v-else-if="type == 'white' && line == 'rer-b'" src="@/assets/lines/white/rer-b.svg" />
  <img v-else-if="type == 'white' && line == 'rer-c'" src="@/assets/lines/white/rer-c.svg" />
  <img v-else-if="type == 'white' && line == 'rer-d'" src="@/assets/lines/white/rer-d.svg" />
  <img v-else-if="type == 'white' && line == 'rer-e'" src="@/assets/lines/white/rer-e.svg" />
  <img v-else-if="type == 'white' && line == 'transilien-h'" src="@/assets/lines/white/transilien-h.svg" />
  <img v-else-if="type == 'white' && line == 'transilien-j'" src="@/assets/lines/white/transilien-j.svg" />
  <img v-else-if="type == 'white' && line == 'transilien-k'" src="@/assets/lines/white/transilien-k.svg" />
  <img v-else-if="type == 'white' && line == 'transilien-l'" src="@/assets/lines/white/transilien-l.svg" />
  <img v-else-if="type == 'white' && line == 'transilien-n'" src="@/assets/lines/white/transilien-n.svg" />
  <img v-else-if="type == 'white' && line == 'transilien-p'" src="@/assets/lines/white/transilien-p.svg" />
  <img v-else-if="type == 'white' && line == 'transilien-r'" src="@/assets/lines/white/transilien-r.svg" />
  <img v-else-if="type == 'white' && line == 'transilien-u'" src="@/assets/lines/white/transilien-u.svg" />
  <img v-else-if="type == 'white' && line == 'tramway-1'" src="@/assets/lines/white/tramway-1.svg" />
  <img v-else-if="type == 'white' && line == 'tramway-2'" src="@/assets/lines/white/tramway-2.svg" />
  <img v-else-if="type == 'white' && line == 'tramway-3a'" src="@/assets/lines/white/tramway-3a.svg" />
  <img v-else-if="type == 'white' && line == 'tramway-3b'" src="@/assets/lines/white/tramway-3b.svg" />
  <img v-else-if="type == 'white' && line == 'tramway-4'" src="@/assets/lines/white/tramway-4.svg" />
  <img v-else-if="type == 'white' && line == 'tramway-5'" src="@/assets/lines/white/tramway-5.svg" />
  <img v-else-if="type == 'white' && line == 'tramway-6'" src="@/assets/lines/white/tramway-6.svg" />
  <img v-else-if="type == 'white' && line == 'tramway-7'" src="@/assets/lines/white/tramway-7.svg" />
  <img v-else-if="type == 'white' && line == 'tramway-8'" src="@/assets/lines/white/tramway-8.svg" />
  <img v-else-if="type == 'white' && line == 'tramway-9'" src="@/assets/lines/white/tramway-9.svg" />
  <img v-else-if="type == 'white' && line == 'tramway-10'" src="@/assets/lines/white/tramway-10.svg" />
  <img v-else-if="type == 'white' && line == 'tramway-11'" src="@/assets/lines/white/tramway-11.svg" />
  <img v-else-if="type == 'white' && line == 'tramway-12'" src="@/assets/lines/white/tramway-12.svg" />
  <img v-else-if="type == 'white' && line == 'tramway-13'" src="@/assets/lines/white/tramway-13.svg" />

  <img v-else-if="type == 'colors' && line == 'metro-1'" src="@/assets/lines/colors/metro-1.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-2'" src="@/assets/lines/colors/metro-2.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-3'" src="@/assets/lines/colors/metro-3.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-3bis'" src="@/assets/lines/colors/metro-3bis.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-4'" src="@/assets/lines/colors/metro-4.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-5'" src="@/assets/lines/colors/metro-5.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-6'" src="@/assets/lines/colors/metro-6.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-7'" src="@/assets/lines/colors/metro-7.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-7bis'" src="@/assets/lines/colors/metro-7bis.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-8'" src="@/assets/lines/colors/metro-8.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-9'" src="@/assets/lines/colors/metro-9.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-10'" src="@/assets/lines/colors/metro-10.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-11'" src="@/assets/lines/colors/metro-11.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-12'" src="@/assets/lines/colors/metro-12.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-13'" src="@/assets/lines/colors/metro-13.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-14'" src="@/assets/lines/colors/metro-14.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-15'" src="@/assets/lines/colors/metro-15.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-16'" src="@/assets/lines/colors/metro-16.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-17'" src="@/assets/lines/colors/metro-17.svg" />
  <img v-else-if="type == 'colors' && line == 'metro-18'" src="@/assets/lines/colors/metro-18.svg" />
  <img v-else-if="type == 'colors' && line == 'rer-a'" src="@/assets/lines/colors/rer-a.svg" />
  <img v-else-if="type == 'colors' && line == 'rer-b'" src="@/assets/lines/colors/rer-b.svg" />
  <img v-else-if="type == 'colors' && line == 'rer-c'" src="@/assets/lines/colors/rer-c.svg" />
  <img v-else-if="type == 'colors' && line == 'rer-d'" src="@/assets/lines/colors/rer-d.svg" />
  <img v-else-if="type == 'colors' && line == 'rer-e'" src="@/assets/lines/colors/rer-e.svg" />
  <img v-else-if="type == 'colors' && line == 'transilien-h'" src="@/assets/lines/colors/transilien-h.svg" />
  <img v-else-if="type == 'colors' && line == 'transilien-j'" src="@/assets/lines/colors/transilien-j.svg" />
  <img v-else-if="type == 'colors' && line == 'transilien-k'" src="@/assets/lines/colors/transilien-k.svg" />
  <img v-else-if="type == 'colors' && line == 'transilien-l'" src="@/assets/lines/colors/transilien-l.svg" />
  <img v-else-if="type == 'colors' && line == 'transilien-n'" src="@/assets/lines/colors/transilien-n.svg" />
  <img v-else-if="type == 'colors' && line == 'transilien-p'" src="@/assets/lines/colors/transilien-p.svg" />
  <img v-else-if="type == 'colors' && line == 'transilien-r'" src="@/assets/lines/colors/transilien-r.svg" />
  <img v-else-if="type == 'colors' && line == 'transilien-u'" src="@/assets/lines/colors/transilien-u.svg" />
  <img v-else-if="type == 'colors' && line == 'tramway-1'" src="@/assets/lines/colors/tramway-1.svg" />
  <img v-else-if="type == 'colors' && line == 'tramway-2'" src="@/assets/lines/colors/tramway-2.svg" />
  <img v-else-if="type == 'colors' && line == 'tramway-3a'" src="@/assets/lines/colors/tramway-3a.svg" />
  <img v-else-if="type == 'colors' && line == 'tramway-3b'" src="@/assets/lines/colors/tramway-3b.svg" />
  <img v-else-if="type == 'colors' && line == 'tramway-4'" src="@/assets/lines/colors/tramway-4.svg" />
  <img v-else-if="type == 'colors' && line == 'tramway-5'" src="@/assets/lines/colors/tramway-5.svg" />
  <img v-else-if="type == 'colors' && line == 'tramway-6'" src="@/assets/lines/colors/tramway-6.svg" />
  <img v-else-if="type == 'colors' && line == 'tramway-7'" src="@/assets/lines/colors/tramway-7.svg" />
  <img v-else-if="type == 'colors' && line == 'tramway-8'" src="@/assets/lines/colors/tramway-8.svg" />
  <img v-else-if="type == 'colors' && line == 'tramway-9'" src="@/assets/lines/colors/tramway-9.svg" />
  <img v-else-if="type == 'colors' && line == 'tramway-10'" src="@/assets/lines/colors/tramway-10.svg" />
  <img v-else-if="type == 'colors' && line == 'tramway-11'" src="@/assets/lines/colors/tramway-11.svg" />
  <img v-else-if="type == 'colors' && line == 'tramway-12'" src="@/assets/lines/colors/tramway-12.svg" />
  <img v-else-if="type == 'colors' && line == 'tramway-13'" src="@/assets/lines/colors/tramway-13.svg" />
  <img v-else />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LineIcon',
  props: {
    type: String,
    line: String,
  },
})
</script>

<style scoped>

</style>
