<template>
  <div>
    <h1>Here are our cats</h1>
    <div>
      <b-table striped hover :items="cats">
        <template v-slot:cell(name)="data">
          <router-link :to="`/pets/cats/${data.index}`">
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
      'cats'
    ])
  }
}
</script>
