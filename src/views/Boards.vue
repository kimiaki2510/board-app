<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Title
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="boards in desserts"
                :key="boards.title"
              >
                <td>{{ boards.title }}</td>
              </tr>
            </tbody>
          </template>
      </v-simple-table>
        <v-card-actions>
          <v-btn class="mx-2" fab dark color="green" @click="addList">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data(){
    return{
      headers: [
        { text: 'タイトル', value: 'title' }
      ],
      boards: [
        {
          title: 'Vue.js'
        }
      ]
    }
  }
}
</script>
