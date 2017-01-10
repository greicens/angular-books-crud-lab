angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency
BooksShowController.$inject=['$http','$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  var bookId = $routeParams.id;
  vm.newBook = {};

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+ bookId
  }).then(function successCallback(response) {
    console.log("Hitting Get Success on BooksShowController", response.data);
    vm.book = response.data;
    vm.newBook = angular.copy(vm.book);
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);

  });

  vm.deleteBook = function (book){
    var bookId = $routeParams.id;
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/'+ bookId
    }).then(function deleteSucess(deletedBook){
      console.log(deletedBook, "this is the deleted book");
      $location.path('/');

    }), function deleteError (response){
      console.log("delete ERROR!", response);
    }
  }

  vm.editBook = function (book){
    console.log(book, "book passed to edit form");
    // console.log(bookId, "id edit function");
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/'+ book._id,
      data: book

    }).then(function editSucess(editBook){
      console.log(editBook, " edit Book")
      vm.book = editBook.data;

    }), function editError (response){
      console.log("ERROR!", response);
    }
  }

  vm.resetForm = function (){
    var bookId = $routeParams.id
    console.log(vm.bookCopy, "this is the bookCopy inside resetForm");
    vm.book = vm.bookCopy;
    $location.path('/books/' + bookId);
  }
}
