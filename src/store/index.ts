import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    blocksData: {}
  }),
  actions: {
    setDefaults () {
      const blocksData = [{
        title: "Get Started",
        width: "350px",
        height: "400px",
        contents: "Hello there!"
      }]
      localStorage.setItem('blocks', JSON.stringify(blocksData))
      this.getLocalStorageData()
    },
    getLocalStorageData () {
      this.blocksData = JSON.parse(localStorage.getItem('blocks') || '{}')
    }
  }
})
