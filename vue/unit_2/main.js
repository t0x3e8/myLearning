Vue.component('books-list', 
  {
    props: ['books', 'header'],
    template: '<div>{{ header }}<hr> <ul><li v-for="book in books">{{ book.title | capitalize }}</li></ul></div>',
    filters: {
      capitalize: function(value) {
        return value.toUpperCase();
      }
    },
    created: function() {
      console.log('created');
    },
    updated: function() {
      console.log('updated');
    },
    mounted: function() {
      console.log('mounted');
    },
    destroyed: function() {
      console.log('destoyed');
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
    newBook: "", 
    isDestroyed: true
  },
  methods: {
    addBook: function() {
      this.books.push({ title: this.newBook });
      this.newBook = "";
    },
    destroyComponent: function() {
      this.isDestroyed = !this.isDestroyed;
    }
  },
  computed: { 
    countLetters: function() {
      if (this.newBook.length > 0)
        return ' {' + this.newBook.length + '}';
    }
  }
});