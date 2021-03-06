var bookApp = angular.module('bookApp',[]);

bookApp.controller('BookListCtrl', function($scope){
  $scope.books = [
    {"title": "Tom Sawyer", "author": "Mark Twain", "price": 28, "qty": 2},
    {"title": "Alice's Adventure in Wonderland", "author": "Lewis Carroll", "price": 17, "qty": 1},
    {"title": "The Old Man and the Sea", "author": "Ernest Hemingway", "price": 15, "qty": 4}
  ];

  $scope.book = {};
  
  $scope.submit = function(book){
    $scope.books.push(book);
    $scope.book = {}; //reset form inputs
    $scope.bookForm.$setPristine();
  };

  $scope.remove = function($index){
     $scope.books.splice($index,1);     
  };

  $scope.totalPrice = function(){
    var total = 0;
    $scope.books.forEach(function(book){
      total += book.price;
    });
    return total;
  };

  $scope.totalQty = function(){
    var total = 0;
    $scope.books.forEach(function(book){
      total += book.qty;
    });
    return total;
  };

});