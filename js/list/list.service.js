angular.module('todoApp')
  .service('List', List);

  function List() {
    this.addToList = (item) => {
      console.log('adding '+ item + ' to list');

      let items = checkLocalStorage();
      items.push(item);

      localStorage.setItem('todo', JSON.stringify(items));
    };

    this.deleteItem = (item) => {
      console.log('deleting ' + item + ' from list');

      let items = checkLocalStorage(),
        index = items.indexOf(item);

      if (index >= 0) items.splice(index, 1);

      localStorage.setItem('todo', JSON.stringify(items));
    }

    this.list = () => {
      let items = checkLocalStorage();
      if (items) return items;
    };

    function checkLocalStorage() {
      var items = localStorage.getItem('todo');

      if (items !== null && items !== undefined) items = JSON.parse(items);
      else items = [];

      return items;
    }
  }
