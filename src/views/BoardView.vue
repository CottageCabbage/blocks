<template>
  <div class="board">
    <BoardItem
      v-for="block in store.blocksData"
      :key="block.id"
      :data="block"
    />
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
    if (localStorage.getItem('blocks') === null) {
      this.store.setDefaults()
    } else {
      this.store.getLocalStorageData()
      this.store = useStore()
    }

    document.addEventListener("storage", this.store.getLocalStorageData)
  }
});
</script>

<style scoped>
.board {
  margin: 0;
  padding: 0;
  border: none;
  width: calc(100% - 250px);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
}
</style>