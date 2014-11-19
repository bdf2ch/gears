/*****
 *
 *****/


"use strict";


var authorization = angular.module('Authorization', [])
    .config(function ($provide) {
        $provide.factory("Authorization", ["$log", function ($log) {
            var module = {};

            return module;
        }]);
    })
    .run(function ($log) {
        $log.log("AUTHORIZATION LAUNCHED");
    });

authorization.controller("AuthorizationCtrl", ["$log", "$scope", function ($log, $scope) {

}]);
