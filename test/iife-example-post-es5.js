(function() {
  'use strict';

  angular.module('app.example').service('ExampleService', ExampleService);

  function ExampleService($q) {
    var example = function() {
      return $q.resolve();
    };
    return {
      example: example
    };
  }
})();
