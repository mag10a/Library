class BookController {
    constructor(bookService, $stateParams) {
        let isbn = $stateParams.isbn;
        let status = $stateParams.status;

        let self = this;
        bookService.getBook(isbn).then(
            (book) => {
                self.book = book;
                self.book.status = status;
            }
        )
    }
}

BookController.$inject = [
    'bookService',
    '$stateParams'
];

export default BookController;