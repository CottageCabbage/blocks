<template>
  <header>
    <h1 id="logo">BLOCKS</h1>

    <div id="newBlockInput">
      <input
        type="text"
        placeholder="Create New Block"
        @keypress.enter="createNewTask"
        v-model="newBlockTitle"
      />
    </div>

    <nav>
      <router-link to="/">Board</router-link> |
      <router-link to="/about/">About</router-link>
    </nav>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { nanoid } from 'nanoid'

export default defineComponent({
  name: 'HeaderComponent',
  data () {
    return {
      newBlockTitle: String ('')
    }
  },
  methods: {
    createNewTask () {
      if (localStorage.getItem('blocks') !== null && this.newBlockTitle !== '') {
        const data = JSON.parse(localStorage.getItem('blocks') || '{}')
        const newBlock = {
          title: String (this.newBlockTitle),
          id: nanoid(),
          contents: String ('Edit this, I dare you.')
        }
        data.push(newBlock)
        localStorage.setItem('blocks', JSON.stringify(data))
        this.newBlockTitle = ''
      }
    }
  }
})
</script>

<style lang="scss">
header {
  height: 45px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  // border-bottom: 1px solid #6669;

  #logo {
    font-size: 1.5rem;
    color: #fff;
    font-weight: bolder;
    font-family: 'Montserrat', sans-serif;
  }

  #newBlockInput{
    height: 100%;
    width: 50%;
    display: flex;
    gap: 10px;

    > input {
      height: 100%;
      min-width: 200px;
      flex-basis: 90%;
      padding: 5px;
      appearance: none;
      background: transparent;
      color: white;
      font-size: 1rem;
      border: none;

      &:focus, &:focus-visible, &:focus-within {
        outline: none;
        border-bottom: 1px solid #888;
      }
    }
    > button {
      flex-basis: 10%;
      height: 100%;
      padding: 5px;
      border: none;
      background: #444;
    }
  }

  > nav > a {
    color: pink;
    text-decoration: none;
  }
}
</style>