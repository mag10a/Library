angular.module('starter.services', [])

.factory('Books',['$http', function($http) {
  // Might use a resource here that returns a JSON array
  // API key
  var API_KEY = 'HJ1OGI1P';
  var BASE_URL = 'http://isbndb.com/api/v2/json/' + API_KEY + '/book/';

  var transformResponse = function(data) {
    data = angular.fromJson(data);
      var returnData = {};
      if (data.hasOwnProperty('data')) {
          returnData = data.data[0];
          returnData['status'] = 'checkedIn';
      }
      return returnData;
  };
  return {
    getBook: function(isbn) {
      return $http.get(BASE_URL + isbn, {transformResponse: transformResponse, cache: true}).
          success(function(data) {
            console.log(data);
          }).
          error(function(error) {
            console.log(error);
          });
    },
      getAllBooks: function() {
          return $http.get('./data/books.json');
      }
  }
}]);
