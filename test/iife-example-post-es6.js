(function() {
  'use strict';

  const ExampleService = $q => ({ example: () => $q.resolve() });

  angular.module('app.example').service('ExampleService', ExampleService);
})();
