import AuthorizationService from './authorization-service.js';
import BookService from './book-service.js';

let services = angular.module('services', ['firebase'])
    .service('authorization', AuthorizationService)
    .service('bookService', BookService);

export {services};