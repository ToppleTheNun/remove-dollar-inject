angular.module('app.example').service('ExampleService', ExampleService);

ExampleService.$notInject = ['$q'];
ExampleService.$alsoNotInject = 5;

function ExampleService($q) {
  var example = function () {
    return $q.resolve();
  };
  return {
    example: example
  };
}
