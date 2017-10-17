(function() {
  'use strict';

  const ExampleService = $q => ({ example: () => $q.resolve() });

  ExampleService.$notInject = ['$q'];
  ExampleService.$alsoNotInject = 5;
  ExampleService.$inject = ['$q'];
  angular.module('app.example').service('ExampleService', ExampleService);
})();
