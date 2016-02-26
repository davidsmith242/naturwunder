'use strict';

/**
 * @ngdoc function
 * @name wunderApp.controller:MonitoringCtrl
 * @description
 * # MonitoringCtrl
 * Controller of the wunderApp
 */
angular.module('wunderApp')
    .controller('MonitoringCtrl', ['$sce', function ($sce) {

        this.video1 = {
            sources: [
                {
                    src: $sce.trustAsResourceUrl("videos/2012_06_Schwarzstorch.m4v"),
                    type: "video/mp4"
                },
                {
                    src: $sce.trustAsResourceUrl("videos/2012_06_Schwarzstorch.webm"),
                    type: "video/webm"
                },
                {
                    src: $sce.trustAsResourceUrl("videos/2012_06_Schwarzstorch.ogv"),
                    type: "video/ogg"
                }
            ],
            theme: "bower_components/videogular-themes-default/videogular.css",
            plugins: {
                poster: "videos/2012_06_Schwarzstorch.jpg"
            }
        };
        
        this.video2 = {
            sources: [
                {
                    src: $sce.trustAsResourceUrl("videos/2013_02_Fuchs.m4v"),
                    type: "video/mp4"
                },
                {
                    src: $sce.trustAsResourceUrl("videos/2013_02_Fuchs.webm"),
                    type: "video/webm"
                },
                {
                    src: $sce.trustAsResourceUrl("videos/2013_02_Fuchs.ogv"),
                    type: "video/ogg"
                }
            ],
            theme: "bower_components/videogular-themes-default/videogular.css",
            plugins: {
                poster: "videos/2013_02_Fuchs.jpg"
            }
        };

  }]);