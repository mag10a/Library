import BookListViewModel from './book-list-view-model.js';
import BookListController from './book-list-controller.js';

let bookList = angular.module('book-list', [])
    .controller('BookListCtrl', BookListController)
    .service('BookListViewModel', BookListViewModel);

export {bookList};