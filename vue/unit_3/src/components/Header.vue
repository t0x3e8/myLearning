<template>
  <div>
    <b-nav tabs>
      <b-nav-item disabled>Quiz of the world</b-nav-item>
      <b-nav-item disabled>Question {{ correctAnswers }}/{{ totalAnswered }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: [
    'totalAnswered',
    'correctAnswers'
  ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
