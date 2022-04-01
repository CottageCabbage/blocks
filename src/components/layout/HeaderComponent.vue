<template>
  <header>
    <nav>
      <router-link to="/">Board</router-link> |
      <router-link to="/about/">About</router-link>
    </nav>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent'
})
</script>

<style lang="scss">
header {
  height: 45px;
  padding: 10px;
  display: flex;
  align-items: center;
  background: #000;
  border-bottom: 1px solid #6669;

  > nav > a {
    color: pink;
    text-decoration: none;
  }
}
</style>