angular.module('libraryApp', ['ngRoute'])
       .config(config);


////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/books/index.html',  // this "partial" html file
      controller: 'BooksIndexController',         // uses this controller
      controllerAs: 'booksIndexCtrl'              // with this name
    })
    .when('/about', {
      templateUrl: 'templates/about.html',  // this "partial" html file
      controller: 'AboutController',         // uses this controller
      controllerAs: 'aboutCtrl'              // with this name
    })
    .when('/books/:id', {
      templateUrl: 'templates/books/show.html',
      controller: 'BooksShowController',
      controllerAs: 'booksShowCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
