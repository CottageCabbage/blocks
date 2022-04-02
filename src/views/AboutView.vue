<template>
  <div class="about">
    <div class="card">
      <h2>BLOCKS</h2>
      Version: 1.0.0-beta <br />
      A fast and privacy-friend note-keeping app that saves your notes on localStorage.

      Made with Vue and love by CottageCabbage
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView'
});
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: calc(100vh - 45px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .card {
    height: 80%;
    width: 40%;
    background: black;
  }
}
</style>