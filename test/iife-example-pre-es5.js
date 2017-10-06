(function () {
  'use strict';

  angular.module('app.example').service('ExampleService', ExampleService);

  ExampleService.$notInject = ['$q'];
  ExampleService.$alsoNotInject = 5;
  ExampleService.$inject = ['$q'];
  function ExampleService($q) {
    var example = function() {
      return $q.resolve();
    };
    return {
      example: example
    };
  }
})();
