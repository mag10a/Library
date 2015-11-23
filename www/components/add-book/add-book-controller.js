class AddBookController {
    constructor($window, bookService, $ionicLoading) {
        this.$window = $window;
        this.service = bookService;
        this.$ionicLoading = $ionicLoading;
        this.title = 'Scan Book';
        this.scanBook();
    }

    scanBook() {
        let self = this;
        if (this.$window.cordova && this.$window.cordova.plugins) {
            cordova.plugins.barcodeScanner.scan(
                (result) => {
                    alert(result.text);
                    self.codeFound(result.text);
                },
                (error) => {
                    alert(error);
                }
            )
        } else {
            console.log('cordova undefined');
            self.codeFound('0803733577');
        }
    }

    codeFound(code) {
        let self = this;
        this.$ionicLoading.show();
        this.service.getBook(code).then(
            (book) => {
                console.log(book);
                self.book = book.data;
            },
            (error) => {
                console.log(error);
            }
        ).finally(
            () => {
                self.$ionicLoading.hide();
            }
        )
    }

    saveBook() {

    }

    cancelBook() {

    }
}

AddBookController.$inject = ['$window', 'book-service', '$ionicLoading'];

export default AddBookController;