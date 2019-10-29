<template>
  <div>
    <h1>Here are our dogs</h1>
    <div>
      <b-table striped hover :items="dogs">
        <template v-slot:cell(name)="data">
          <router-link :to="'/pets/dogs/' + data.index">
            {{ data.value }}
          </router-link>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
