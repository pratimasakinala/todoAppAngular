angular.module('todoApp')
  .service('Update', Update);

  function Update() {
    this.name = 'Amy';
    // console.log('inside update service');
  }
