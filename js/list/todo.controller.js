angular.module('todoApp')
  .controller('todoController', todoController);

  function todoController(List) {
    this.addToList = List.addToList;
    this.list = List.list;
    this.deleteItem = List.deleteItem;
  }
