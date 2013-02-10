
'use strict';

angularjsNodeApp.controller('PostIndexCtrl', function($scope, $routeParams, $http) {
  $http.get('api/post/index').success(function(data) {
    $scope.post = data;
  });
});
