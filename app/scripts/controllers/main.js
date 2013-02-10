'use strict';

angularjsNodeApp.controller('MainCtrl', function($scope, $http) {
  $http.get('api/tips').success(function getTips(tips) {
    $scope.tips = tips;
  });

  $scope.createTip = function createTip(title, description) {
    $http.post('api/tips', {tip: { title: title, description: description} }).success(function saveTip(newTip) {
      $scope.tips.push(newTip);
      $scope.tipTitle = $scope.tipDescription = undefined;
    });
  };

  $scope.deleteTip = function deleteTip(tip) {
    $http.delete('api/tips/' + tip._id).success(function() {
      $scope.tips = _.without($scope.tips, tip);
    });
  };
});
