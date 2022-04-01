<template id="app">
  <HeaderComponent />
  <main>
    <SidebarComponent />
    <router-view/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SidebarComponent from './components/layout/SidebarComponent.vue'
import HeaderComponent from '@/components/layout/HeaderComponent.vue'

export default defineComponent({
  components: {
    HeaderComponent,
    SidebarComponent
  }
})
</script>

<style>
@import url('https://api.fonts.coollabs.io/css2?family=Montserrat&family=Roboto&display=swap');

* {box-sizing: border-box; margin: 0; padding: 0;}

html, body, #app {
  height: 100%;
  width: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', 'Roboto', sans-serif;
}

main {
  display: flex;
  flex-direction: row;

  height: 100%;

  background: #223;
}
</style>
