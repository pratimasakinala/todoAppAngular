angular.module('todoApp')
  .directive('todoList', function() {
    return {
      restrict: 'E',
      templateUrl: 'js/list/list.html' // relative to index.html
    };
  });
