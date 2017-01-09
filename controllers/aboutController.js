angular.module('libraryApp')
  .controller('AboutController', AboutController);

aboutController.$inject = [];

function aboutController ($http) {
    var vm = this;
    vm.name = "Greice Silva"
  }
