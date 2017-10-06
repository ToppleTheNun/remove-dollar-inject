(function() {
  'use strict';

  const ExampleService = $q => ({ example: () => $q.resolve() });

  ExampleService.$inject = ['$q'];
  angular.module('app.example').service('ExampleService', ExampleService);
})();
