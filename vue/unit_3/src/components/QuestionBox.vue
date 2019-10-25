<template>
  <div>
    <b-jumbotron>
      <template v-slot:lead>
        Some questions here?
      </template>

      <hr class="my-4" />

      <p>
        List of answers
      </p>

      <b-button variant="success" href="#">Submit</b-button>
      <b-button variant="primary" href="#">Next Question</b-button>
    </b-jumbotron>
  </div>
</template>