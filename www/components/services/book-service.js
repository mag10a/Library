import Book from '../models/book-model.js';

class BookService {
    constructor($http, authorization, $firebaseObject) {
        this.$http = $http;
        this.authorization = authorization;
        this.$firebaseObject = $firebaseObject;

        this._apiKey = 'HJ1OGI1P';
        this._baseUrl = `http://isbndb.com/api/v2/json/${this._apiKey}/book/`;
        this.tempid = "b4a79868-d864-43f3-b23b-fc1865a06f9f";
    }

    getNewBook(isbn) {
        // TODO Transform this if going to the other server.
        return this.$http.get(this._baseUrl + isbn);
    }

    getBook(isbn) {
        let bookRef = this.authorization.databaseRef.child('books').child(isbn);
        let fullBook = this.$firebaseObject(bookRef);

        return fullBook.$loaded();
    }

    getAllBooks() {
        let usersBooks = this.authorization.databaseRef.child('users').child(this.tempid).child('books');
        let books = this.$firebaseObject(usersBooks);

        return books.$loaded();
    }
}

BookService.$inject = [
    '$http',
    'authorization',
    '$firebaseObject'
];

export default BookService;
