import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    blocksData: {}
  }),
  actions: {
    getLocalStorageData () {
      const blocksData = [{
        title: "Get Started",
        width: "350px",
        height: "400px",
        contents: "Hello there!"
      }, {title: "Thing"}]
      this.blocksData = blocksData
    }
  }
})
