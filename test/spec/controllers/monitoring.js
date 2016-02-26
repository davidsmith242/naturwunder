'use strict';

describe('Controller: MonitoringCtrl', function () {

  // load the controller's module
  beforeEach(module('wunderApp'));

  var MonitoringCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MonitoringCtrl = $controller('MonitoringCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MonitoringCtrl.awesomeThings.length).toBe(3);
  });
});
