import Vue from 'vue'
import Vuex from 'vuex'
//import axios from '@/api/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //初期データ
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
    //次に追加するデータ
    nextBoardId: 3
  },
  mutations: {
    //ボードを追加する
    addBoard (state, { title }) {
      state.boards.push({
        id: state.nextBoardId,
        title,
        done: false
      })
      //次に追加するボードのIDを更新
      state.nextBoardId++
    },
    //ボードの完了状態を変更
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
export default store
