<template>
  <div class="board">
    <BoardItem
      v-for="(block, index) in store.blocksData"
      :key="index"
      :data="block"
    />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BoardItem from '@/components/BoardItem.vue'

import { useStore } from '@/store/index'

export default defineComponent({
  name: 'HomeView',
  components: {
    BoardItem
  },
  data () {
    return {
      store: useStore()
    }
  },
  mounted () {
    this.store.getLocalStorageData()
  }
});
</script>

<style scoped>
.board {
  width: calc(100% - 250px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>