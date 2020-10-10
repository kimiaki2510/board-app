<template>
  <v-flex>
    <v-card>
      <v-card-text>
        <v-form v-on:submit.prevent="addBoard">
          <v-text-field v-model="title" label="title" />
        </v-form>
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
          <input type="checkbox" v-bind:checked="board.done">
          {{ board.title }}
        </li>
      </ul>
    </div>
  </v-flex>
</template>
<script>
export default {
  computed: {
    boards() {
      return this.$store.state.boards
    }
  }
}
</script>
