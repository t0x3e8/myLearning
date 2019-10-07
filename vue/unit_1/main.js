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
  }
});