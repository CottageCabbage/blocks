import { defineStore } from 'pinia'
// import { nanoid } from 'nanoid'

export const useStore = defineStore('main', {
  state: () => ({
    blocksData: Object ({})
  }),
  actions: {
    setDefaults () {
      const blocksData = [{
        title: "Get Started",
        // id: nanoid()
        id: "default",
        contents: "Hello there!"
      }]
      localStorage.setItem('blocks', JSON.stringify(blocksData))
      this.getLocalStorageData()
    },
    getLocalStorageData () {
      this.blocksData = JSON.parse(localStorage.getItem('blocks') || '{}')
    },
    createNewBlock () {
      console.log('hello')
    }
  }
})
