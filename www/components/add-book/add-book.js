import AddBookController from './add-book-controller.js';

let addBook = angular.module('AddBook', [])
    .controller('addBookCtrl', AddBookController);

export {addBook};

