/*****
 * GEARS
 *****/


"use strict";


var gears = angular.module('GEARS', [])
    .config(function ($provide) {
        $provide.factory("GEARS", function () {
            var module = {};

            return module;
        });
    })
    .run(function ($log) {
        $log.log("GEARS LAUNCHED");
    });

