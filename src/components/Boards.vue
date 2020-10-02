<template>
  <v-flex>
    <v-card>
      <v-card-text>
        <v-form>
          <v-text-field v-model="title" label="Title" />          
        </v-form>
        <v-card-actions>
          <v-btn class="mx-2" fab dark color="indigo" @click="addList">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'Boards',
  data: () => ({
  }),
}
</script>
