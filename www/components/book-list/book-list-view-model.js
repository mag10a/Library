class BookListViewModel {
    constructor(service, $ionicModal, $scope, $timeout) {
        this.service = service;
        this.books = [];
        this.checkOutModal = {};
        this.$timeout = $timeout;

        $ionicModal.fromTemplateUrl('./components/book-list/check-out-modal-template.html', {
            scope: $scope.$new(),
            animation: 'slide-in-up'
        }).then((modal) => {
            this.checkOutModal = modal;
        });
    }

    init(status) {
        if (status === 'checkedOut') {
            this.title = 'Checked-out Books';
            this.actionName = 'Check-in';
            this.status = 'Checked-out';
        } else {
            this.title = 'Available Books';
            this.actionName = 'Check-out';
            this.status = 'Checked-in';
        }

        if (this.books.length === 0) {
            let self = this;
            this.service.getAllBooks().then(function (books) {
                self.books = books;
            });
        }
    }

    handleAction(book) {
        this.$timeout(() => {
            if (book.status === 'Checked-in') {
                book.status = 'Checked-out';
            } else {
                book.status = 'Checked-in';
            }
        });
    }
}

BookListViewModel.$inject = ['bookService', '$ionicModal', '$rootScope', '$timeout'];

export default BookListViewModel;