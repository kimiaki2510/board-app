import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: [
      {
        id: 1,
        title: 'iphone',
        done: false
      },
      {
        id: 2,
        title: 'native',
        done: true
      }
    ],
    nextBoardId: 3
  },
  mutations: {
    addBoard (state, { title }) {
      state.boards.push({
        id: state.nextBoardId,
        title,
        done: false
      })
      state.nextBoardId++
    },
    toggleBoardStatus (state, { id }) {
      const filtered = state.boards.filter(board => {
        return board.id === id
      })
      filtered.forEach(board => {
        board.done = !board.done
      })
    },
  },
})

//export default store
