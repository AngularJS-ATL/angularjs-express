'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('angularjsNodeApp'));

  var MainCtrl,
    scope,
    sampleTip,
    $httpBackend,
    url = 'http://localhost:3502/api/tips';

  beforeEach(inject(function($controller, $injector) {
    sampleTip = { _id: 1, title: 'Test title', description: 'Test description' };
    $httpBackend = $injector.get('$httpBackend'); 
    $httpBackend.when('GET', url).respond([sampleTip]);

    scope = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });   
  }));

  it('should attach a list of tips', function() {
    $httpBackend.flush();
    expect(scope.tips.length).toBe(1);
  });

  it('should have a tip with a title and description', function() {
    $httpBackend.flush();
    var tip = scope.tips[0];
    expect(tip.title).toEqual('Test title');
    expect(tip.description).toEqual('Test description');
  });

  it('should add a tip to the list of tips', function() {    
    var newTip = { title: 'New tip', description: 'New description' };
    $httpBackend.flush();
    $httpBackend.when('POST', url).respond(newTip);
    scope.createTip(newTip);
    $httpBackend.flush();
    expect(scope.tips.length).toBe(2);
  });

  it('should remove a tip from the list of tips', function() {
    $httpBackend.flush();
    $httpBackend.when('DELETE', url + '/' + sampleTip._id).respond();
    scope.deleteTip(sampleTip);
    $httpBackend.flush();
    expect(scope.tips.length).toBe(0);
  })
});
