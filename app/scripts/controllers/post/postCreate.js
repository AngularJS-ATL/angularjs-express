
'use strict';

angularjsNodeApp.controller('PostCreateCtrl', function($scope, $routeParams, $http) {
  $http.get('/api/post/create').success(function(data) {
    $scope.post = data;
  });
});
