'use strict';

var angularjsNodeApp = angular.module('angularjsNodeApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/api/post/index', {
        templateUrl: 'views/post/postIndex.html',
        controller: 'PostIndexCtrl'
      })
      .when('/api/post/create', {
        templateUrl: 'views/post/postCreate.html',
        controller: 'PostCreateCtrl'
      })
      .when('/api/post/update/:id', {
        templateUrl: 'views/post/postUpdate.html',
        controller: 'PostUpdateCtrl'
      })
      .when('/api/post/view/:id', {
        templateUrl: 'views/post/postView.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]).run(['$http', function ($http) {
    var get = $http.get;
    $http.get = function (url, config) {
      if (/api/.test(url)) {
        url = 'http://localhost:3502/' + url;
      }
      
      return get(url, config);
    };

  }]);
