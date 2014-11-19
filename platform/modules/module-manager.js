/*****
 *
 *****/


"use strict";


var moduleManager = angular.module('ModuleManager', [])
    .config(function ($provide) {
        $provide.factory("ModuleManager", ["$log", function ($log) {
            var module = {};

            return module;
        }])
    })
    .run(function ($log) {
        $log.log("MODULE MANAGER LAUNCHED");
    });
