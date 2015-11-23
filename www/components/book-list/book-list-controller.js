class BookListController {
    constructor($stateParams, $scope, viewModel) {
        this.viewModel = viewModel;

        let self = this;
        $scope.$on('$ionicView.beforeEnter', function() {
            self.viewModel.init($stateParams.bookStatus);
        });
    }
}
// add book
//  books.$add({notes:'awesome book.'});
// change book
// books[index][field] = newvalue;
// books.$save();

// TODO login page.
BookListController.$inject = [
    '$stateParams',
    '$scope',
    'BookListViewModel'
];

export default BookListController;