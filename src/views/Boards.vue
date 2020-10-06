<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-data-table :headers='headers' :item='boards'>
          <template v-slot:item="props">
            <td class="text-xs-left">{{ props.item.title }}</td>
          </template>
        </v-data-table>
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
