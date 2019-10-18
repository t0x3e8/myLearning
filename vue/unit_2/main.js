new Vue({
  el: "#app",
  data: {
    header: "List of books:",
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
  filters: { 
    capitalize: function(value) {
      return value.toUpperCase();
    },
    addPrefix: function(value) {
      return value + " book";
    }
  },
  computed: { 
    countLetters: function() {
      if (this.newBook.length > 0)
        return ' {' + this.newBook.length + '}';
    }
  }
});