<template>
  <div id="app" v-if="questions.length > 0">
    <Header :totalAnswered="totalAnswered" :correctAnswers="correctAnswers" />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox :currentQuestion="questions[index]" :next="next" :submit="submit" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";

export default {
  name: "app",
  components: {
    Header,
    QuestionBox
  },
  data : function() {
    return {
      questions: [],
      index: 0,
      correctAnswers: 0,
      totalAnswered: 0
    }    
  },
  methods: {
    next(wasQuestionAnswered) {
      if(!wasQuestionAnswered) {
        this.totalAnswered++;
      }

      this.index++;
    },
    submit(isCorrectAnswer) {
      if (isCorrectAnswer) 
        this.correctAnswers++;
      
      this.totalAnswered++;
    }
  },
  mounted: function() {
    fetch('https://opentdb.com/api.php?amount=1000', {
      method: 'get'
    }).then((data) => {
      return data.json();
    }).then((jsonData) => {
      this.questions = jsonData.results;
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
