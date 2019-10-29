<template>
  <div>
    This is the {{ $route.params.species }} of index {{ $route.params.id }}
    {{ pet}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      pet: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    this.pet = this[this.$route.params.species][this.$route.params.id]
  }
}
</script>
