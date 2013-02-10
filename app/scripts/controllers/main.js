'use strict';

angularjsNodeApp.controller('MainCtrl', function($scope, $http) {
  $http.get('api/tips').success(function getTips(tips) {
    $scope.tips = tips;
  });

  $scope.createTip = function createTip(tip) {
    $http.post('api/tips/create', {tip: tip }).success(function saveTip(newTip) {
      $scope.tips.push(newTip);
      $scope.newTip = undefined;
    });
  }
});
