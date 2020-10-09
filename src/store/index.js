import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: [
      {
        id: 1,
        title: 'iphone'
      },
      {
        id: 2,
        title: 'native'
      }
    ],
    nextBoardId: 3
  }
})
