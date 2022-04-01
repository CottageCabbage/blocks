<template>
  <aside>
    <h2>Your Blocks:</h2>
    <div class="blockList">
      <div
        v-for="(block, index) in store.blocksData"
        :key="index"
        :data="block"
        class="blockList-item"
        >
        {{ block.title }}
      </div>
    </div>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store/index'

export default defineComponent({
  name: 'SidebarComponent',
  data () {
    return {
      store: useStore()
    }
  }
})
</script>

<style lang="scss">
aside {
  height: 100%;
  width: 250px;
  padding: 10px;
  background: #111;
  color: #eee;

  h2 {
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: 5px;
    border-bottom: 2px solid #444;
  }

  .blockList {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    gap: 8px;
  }
}
</style>
