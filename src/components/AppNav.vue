<template>
  <nav>
    <hr>
    <div class="nav-content">
      <a class="to-settings" href="">
        <img class="icon-settings" src="/img/mui/more-vert.svg" />
      </a>
      <div class="tabs-manager">
        <ul class="tabs">
          <li v-for="(tab, i) in tabs" :key="i" :class="`tab ${tabNumber === i+1 ? 'tab-active' : ''}`">
            <router-link :to="tab">{{ tab }}</router-link>
          </li>
          <div class="add-tab" @click="$emit('addTab')">
            +
          </div>
        </ul>
        <div class="btn-tabs-list">
          <img class="icon-tabs-list" src="/img/mui/reorder.svg" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppNav',
  props: {
    tabs: Array,
    tabNumber: Number,
  },
})
</script>

<style scoped>
nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  background-color: #2f2f2f;
  color: #ffffff;
}

hr {
  position: relative;
  top: 0;
  margin: 0 0 0 0;
  height: 0.3rem;
  background-color: #ffffff;
  border: 0;
}

a {
  color: inherit;
  text-decoration: inherit;
}

.nav-content {
  display: flex;
  align-items: center;
  height: 3.2rem;
}

.nav-content>div {
  display: flex;
  height: inherit;
  width: 100%;
  justify-content: space-between;
}

.to-settings {
  display: inline-block;
}

.icon-settings {
  width: 2rem;
  vertical-align: -5px;
}

.tabs-manager {
  overflow-x: scroll;
}

.tabs {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: flex-start;
  overflow-x: scroll;
}

.tab {
  display: block;
  padding: 0.6rem 0.5rem 0.6rem 0.5rem;
  margin-right: 2px;
  background-color: #202020;
  color: #ffffff;
  border-radius: 0 0 4px 4px;
}

.tab-active {
  background-color: #ffffff;
  color: #2f2f2f;
}

.add-tab {
  margin: 0.6rem 0.4rem 0.6rem 0.4rem;
  padding: 0 0.35rem 0.1rem 0.35rem;
  background-color: #282828;
  border-radius: 50%;
}

.btn-tabs-list {
  display: inline-block;
  padding-left: 0.5rem;
}

.icon-tabs-list {
  margin: 0.3rem;
  width: 1.8rem;
}
</style>
