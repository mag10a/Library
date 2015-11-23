import {routing}        from './components/routing/routing.js';
import {menu}           from './components/menu/menu-controller.js';
import {bookList}       from './components/book-list/book-list.js';
import {bookService}    from './components/services/book-service.js';
import {book}           from './components/book/book.js';
import {addBook}        from './components/add-book/add-book.js';
import {services}       from './components/services/services.js';
import {loginCtrl}      from './components/login/login.js';

// Dependencies
import angularFire      from 'angularfire';
import firebase         from 'firebase';

angular
    .module('library', [
        'ionic',
        'menu',
        'book-list',
        'services',
        'book',
        'AddBook',
        'firebase',
        services.name,
        loginCtrl.name
    ])
    .config(routing)
    .run(['$ionicPlatform', '$ionicConfig',
        function($ionicPlatform, $ionicConfig) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }

            $ionicConfig.backButton.text('&emsp;').previousTitleText(false);
        });
    }]);
