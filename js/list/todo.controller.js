angular.module('todoApp')
  .controller('todoController', todoController);

  function todoController(List) {
    var vm = this;

    this.addToList = List.addToList;
    this.list = List.list;
    this.deleteItem = List.deleteItem;
  }
