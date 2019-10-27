<template>
  <div>
    <h1>Dogs</h1>
    <div>
      <b-table striped hover :items="dogs"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dogs: this.$store.state.dogs
    }
  }
}
</script>
