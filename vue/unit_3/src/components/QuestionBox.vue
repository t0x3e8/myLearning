<template>
  <div>
    <b-jumbotron>
      <template v-slot:lead>
        <span v-html="currentQuestion.question" />
      </template>

      <hr class="my-4" />

      <p>
        <b-list-group>
          <b-list-group-item
            v-for="(answer, index) in shuffledAnswers"
            :key="index"
            @click="selectAnswer(index)"
            :class="answerStyle(index)"
          >
            <span v-html="answer" />
          </b-list-group-item>
        </b-list-group>
      </p>

      <b-button
        variant="success"
        :disabled="selectedAnswerIndex === null || isQuestionAnswered === true"
        @click="submitAnswer"
      >Submit</b-button>
      <b-button variant="primary" @click="nextQuestion">Next Question</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      shuffledAnswers: [],
      indexOfCorrectAnswer: null,
      selectedAnswerIndex: null,
      isQuestionAnswered: false
    };
  },
  props: {
    currentQuestion: {},
    next: Function,
    submit: Function
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler: function() {
        this.selectedAnswerIndex = null; 
        this.isQuestionAnswered = false;
        this.updateAnswers();
      }
    }
  },
  methods: {
    nextQuestion() {
      this.next(this.isQuestionAnswered);
    },
    updateAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ];
      this.shuffledAnswers = _.shuffle(answers);
      this.indexOfCorrectAnswer = _.indexOf(
        this.shuffledAnswers,
        this.currentQuestion.correct_answer
      );
    },
    selectAnswer(index) {
      this.selectedAnswerIndex = index;
    },
    submitAnswer() {
      this.isQuestionAnswered = true;
      this.submit(this.indexOfCorrectAnswer === this.selectedAnswerIndex);
    },
    answerStyle: function(index) {
      let style = '';

      if (this.selectedAnswerIndex === index)
        style = 'selected';
      
      if (this.isQuestionAnswered && this.indexOfCorrectAnswer === index)
        style = 'correct'
      
      if (this.isQuestionAnswered && this.indexOfCorrectAnswer !== index && this.selectedAnswerIndex === index) 
        style = 'incorrect';

      return style;
    }
  }
};
</script>

<style>
.btn {
  margin: 0 5px 0 5px;
}

.list-group-item {
  margin-top: 5px;
}

.list-group-item:hover {
  background-color: lightgrey;
  cursor: pointer;
}

div.selected {
  background-color: lightblue;
}
div.correct {
  background-color: lightgreen;
}

div.incorrect {
  background-color: lightcoral;
}
</style>