<template>
  <div class="settings-page">
    <h1>Paramètres</h1>
    <fieldset>
      <legend>Schéma de lignes</legend>
      <button class="btn-synchronize" @click="synchronize">Mettre à jour</button>
      <p>Dernière mise à jour : {{ updatedAt.toLocaleString() }}</p>
    </fieldset>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { synchronize } from '@/utils/localstore/synchronizer'

export default Vue.extend({
  name: 'SettingsPage',
  data: () => ({
    updatedAt: new Date(localStorage.getItem('lines.updatedAt') as string),
  }),
  methods: {
    synchronize () {
      synchronize().then(() => {
        this.updatedAt = new Date(localStorage.getItem('lines.updatedAt') as string)
      })
    },
  },
})
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  display: inline-block;
  margin: 0.5rem 1rem 1rem 0;
}

.settings-page {
  padding: 0 1rem;
}

fieldset {
  margin: 1rem 0;
  border-radius: 0.5rem;
}

.btn-synchronize {
  background: #f2f2f2;
  border: solid 1px #333;
  border-radius: 0.2rem;
  padding: 0.4rem;
  margin-top: 1rem;
  font-size: 0.95rem;
}
</style>
