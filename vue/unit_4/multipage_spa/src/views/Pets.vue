<template>
  <div>
    <div>
      <b-form >
        <b-form-group id="input-group-1" label="Name:" label-for="input-1" description="Pet's name">
          <b-form-input id="input-1" v-model="pet.name" type="text" disabled></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Mood:" label-for="input-2">
          <b-form-select id="input-2" v-model="pet.mood" :options="moods" disabled />
        </b-form-group>
        <b-form-group id="input-group-3" label="Age:" label-for="input-3">
          <b-form-input id="input-3" v-model="pet.age" type="number" disabled></b-form-input>
        </b-form-group >
        <b-form-group id="input-group-4" label="Length:" label-for="input-4">
          <b-form-input id="input-4" v-model="pet.length" type="number" disabled></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-5" disabled>
          <b-form-checkbox v-model="pet.available">Is it available for adoption?</b-form-checkbox>
        </b-form-group>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      pet: {},
      moods: []
    }
  },
  computed: {
    ...mapState(['cats', 'dogs'])
  },
  mounted () {
    this.pet = this[this.$route.params.species][this.$route.params.id]
    this.moods.push(this.pet.mood)
  }
}
</script>
