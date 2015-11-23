import BookController from './book-controller.js';
import BookViewModel from './book-view-model.js';

let book = angular.module('book', [])
    .controller('BookCtrl', BookController)
    .service('BookViewModel', BookViewModel);

export {book};