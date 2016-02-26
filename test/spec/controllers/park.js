'use strict';

describe('Controller: ParkCtrl', function () {

  // load the controller's module
  beforeEach(module('wunderApp'));

  var ParkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParkCtrl = $controller('ParkCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ParkCtrl.awesomeThings.length).toBe(3);
  });
});
