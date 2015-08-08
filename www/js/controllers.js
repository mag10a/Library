angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('LibraryCtrl', function($scope, Books) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  Books.getBook('0439389909').
  success(function(book) {
        $scope.books = [book];
      });
  //Books.getAllBooks().
  //success(function(books) {
  //      console.log(books);
  //      $scope.books = books;
  //    });
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
