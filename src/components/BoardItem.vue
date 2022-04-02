<template>
  <div class="boardItem" draggable="false">
    <div class="itemHeader">
      <span @click="renameBlock">
        {{ data.title }}
      </span>
      <span class="headerBtns">
        <img
          src="@/assets/edit.svg"
          @click="blockContentEditable = true"
          v-if="blockContentEditable === false"
        />
        <img
          src="@/assets/save.svg"
          @click="saveEditedContents"
          v-if="blockContentEditable === true"
        />
        <img src="@/assets/x.svg"/>
      </span>
    </div>
    <div class="itemBody" :contenteditable="blockContentEditable">
      {{ data.contents }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BoardItem',
  props: ['data'],
  data () {
    return {
      blockContentEditable: false
    }
  },
  methods: {
    saveEditedContents () {
      this.blockContentEditable = false
    },
    renameBlock () {
      console.log('placeholder')
    }
  }
});
</script>

<style scoped lang="scss">
.boardItem {
  width: 350px;
  height: 450px;
  background: #111;

  .itemHeader {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 10px;
    background: #777;
    color: #eee;

    .headerBtns {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  .itemBody {
    padding: 10px;
    height: calc(100% - 30px);
    outline: none;
    color: #eee;
  }
}
</style>