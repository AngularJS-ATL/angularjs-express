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

    /**
     * For demonstration purposes only, since we are using CORS
     * requests on a different server port than client, check to
     * see if we do any API calls, and if so, force the call to
     * our server's port with the original arguments and updated url.
     */
    var methods = ['delete', 'get', 'head', 'jsonp', 'post', 'put'];
    _.each(methods, function (method) {
      //var original = $http[method];
      $http[method] = _.wrap($http[method], function (original) {
        var args = [].splice.call(arguments, 1);
        var url = args[0];
        if (/api/.test(url)) {
          args[0] = 'http://localhost:3502/' + url;
        }
        return original.apply(this, args);
      });
    });
  }]);
