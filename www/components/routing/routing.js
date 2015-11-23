let routing = function routing($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'components/menu/menu.html',
            controller: 'MenuCtrl as menuCtrl'
        })
        .state('app.login', {
            url: '/login',
            views: {
                'library': {
                    templateUrl: 'components/login/login-template.html',
                    controller: 'LoginCtrl as loginCtrl'
                }
            }
        })
        .state('app.available', {
            url: '/available/:bookStatus',
            views: {
                'library': {
                    templateUrl: 'components/book-list/book-list-template.html',
                    controller: 'BookListCtrl as listCtrl'
                }
            }
        })
        .state('app.checkedOut', {
            url: '/checkedOut/:bookStatus',
            views: {
                'library': {
                    templateUrl: 'components/book-list/book-list-template.html',
                    controller: 'BookListCtrl as listCtrl'
                }
            }
        })
        .state('app.book', {
            url:'/book/:isbn/:status',
            views: {
                'library': {
                    templateUrl:'components/book/book-template.html',
                    controller: 'BookCtrl as bookCtrl'
                }
            }
        })
        .state('app.add-book', {
            url:'/add',
            views: {
                'library': {
                    templateUrl: 'components/add-book/add-book-template.html',
                    controller: 'addBookCtrl as add_book_ctrl'
                }
            }
        });

    $urlRouterProvider.otherwise('/app/login');
};

routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export {routing};

