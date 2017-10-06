(function () {
  'use strict';

  const ExampleService = $q => ({ example: () => $q.resolve() });

  ExampleService.$notInject = ['$q'];
  ExampleService.$alsoNotInject = 5;

  angular.module('app.example').service('ExampleService', ExampleService);
})();
