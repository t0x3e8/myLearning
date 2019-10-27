<template>
  <div>
    <h1>Cats</h1>
    <div>
      <b-table striped hover :items="cats">
        <template v-slot:cell(name)="data">
          <a href="/dogs">{{ data.value }}</a>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cats: this.$store.state.cats
    }
  },
  mounted () {}
}
</script>
