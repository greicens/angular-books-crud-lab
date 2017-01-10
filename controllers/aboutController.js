angular.module('libraryApp')
  .controller('AboutController', aboutController);

aboutController.$inject = [];

function aboutController ($http) {
    var vm = this;
    vm.name = "Greice Silva"
  }
