'use strict';

require('./HeaderCtrl');
require('./MenuCtrl');
require('./LoginCtrl');
require('./DashboardCtrl');

angular.module('app').controller('mainController', function($scope) {
        // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});