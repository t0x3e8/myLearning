Vue.component('books-list', 
  {
    props: ['books', 'header'],
    template: '<div>{{ header }}<hr> <ul><li v-for="book in books">{{ book.title | capitalize }}</li></ul></div>',
    filters: {
      capitalize: function(value) {
        return value.toUpperCase();
      }
    }
  }
)

new Vue({
  el: "#app",
  component: ['books-list'],
  data: {
    books: [
      { title: "The God father" },
      { title: "Bible" }
    ],
    newBook: ""
  },
  methods: {
    addBook: function() {
      this.books.push({ title: this.newBook });
      this.newBook = "";
    }
  },
  computed: { 
    countLetters: function() {
      if (this.newBook.length > 0)
        return ' {' + this.newBook.length + '}';
    }
  }
});