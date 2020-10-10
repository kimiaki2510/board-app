<template>
  <v-flex>
    <v-card>
      <v-card-text>
        <v-card-actions>
          <v-btn class="mx-2" fab dark color="indigo" @click="addList">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
    <div>
      <h2>Boards一覧</h2>
      <ul>
        <li v-for="board in boards" v-bind:key="board.id">
          <input type="checkbox" v-bind:checked="board.done"
           v-on:change="toggleBoardStatus(board)">
          {{ board.title }}
        </li>
      </ul>
      <form v-on:submit.prevent="addBoard">
        <input type="text" v-model="newBoardTitle" placeholder="新しいボード">
      </form>
    </div>
  </v-flex>
</template>

<script>
export default {
  data(){
    return {
      newBoardTitle: '',
    }
  },
  computed: {
    boards() {
      return this.$store.state.boards
    },
  },
  methods: {
    addBoard () {
      this.$store.commit('addBoard', {
        title: this.newBoardTitle,
      })
      this.newBoardTitle = ''
    },
    toggleBoardStatus (board) {
      this.$store.commit('toggleBoardStatus', {
        id: board.id
      })
    },
  }
}
</script>
