'use strict';

/**
 * @ngdoc function
 * @name wunderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wunderApp
 */
angular.module('wunderApp')
    .controller('MainCtrl', function ($scope) {

        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        var slides = $scope.slides = [];
        var currIndex = 0;

        for (var i = 0; i <= 20; i++) {
            slides.push({
                image: 'images/slideshow/d_spessart_'+i+'.jpg',
                text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 50],
                id: currIndex++
            });
        }

    });