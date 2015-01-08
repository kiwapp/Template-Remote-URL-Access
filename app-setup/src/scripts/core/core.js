require('../helpers/helpers');

angular.module('kiwappSetup', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngBabelfish', 'ui.router', 'kiwapp.api', 'helpers'])
    .controller('MainCtrl', require('./controllers/MainCtrl'))
    .factory('AppInstanceFactory', require('./factory/appInstanceFactory'))
    .config(function ($stateProvider, $urlRouterProvider, babelfishProvider) {
        'use strict';

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'core/partials/main.html',
                controller: 'MainCtrl',
                resolve: {
                    AppInstanceData: ["AppInstanceFactory", function (AppInstanceFactory) {
                        console.log("Resolution in progress...");
                        return AppInstanceFactory.load();
                    }]
                }
            });

        $urlRouterProvider.otherwise('/');

        // Init the babelfish module for the translation
        babelfishProvider.init({
            state: "home",
            lang: "fr-FR",
            url: "i18n/languages.json",
            namespace: "i18n",
            lazy: false
        });
    })
;

