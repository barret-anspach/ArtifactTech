'use strict';

angular.module('artifactApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'ui.router'
])
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");

        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/",
                views: {
                    "": {
                        templateUrl: "views/home.html",
                        controller: 'HomeCtrl'
                    },
                    "nav": {
                        templateUrl: "views/nav.html"
                    }
                }
            })
            .state('about', {
                abstract: true,
                url: '/about',
                views: {
                    "": {
                        templateUrl: "views/about.html"
                    },
                    "nav": {
                        templateUrl: "views/nav.html"
                    }
                }
            })
            .state('about.main', {
                url: "/",
                templateUrl: "views/about.main.html"
            })
            .state('about.team', {
                abstract: true,
                url: '/team',
                template: "<div ui-view />"
            })
            .state('about.team.1', {
                url: "/1",
                templateUrl: "views/about.team.1.html"
            })
            .state('about.team.2', {
                url: "/2",
                templateUrl: "views/about.team.2.html"
            })
            .state('about.team.3', {
                url: "/3",
                templateUrl: "views/about.team.3.html"
            })
            .state('about.team.4', {
                url: "/4",
                templateUrl: "views/about.team.4.html"
            })
            .state('about.team.5', {
                url: "/5",
                templateUrl: "views/about.team.5.html"
            })
            .state('platform', {
                abstract: true,
                url: "/platform",
                views: {
                    "": {
                        templateUrl: "views/platform.html"
                    },
                    "nav": {
                        templateUrl: "views/nav.html"
                    }
                }
            })
            .state('platform.main', {
                url: "/",
                templateUrl: "views/platform.main.html"
            })
            .state('platform.curation', {
                url: "/curation",
                templateUrl: "views/platform.curation.html"
            })
            .state('platform.creation', {
                url: "/creation",
                templateUrl: "views/platform.creation.html"
            })
            .state('platform.commerce', {
                url: "/commerce",
                templateUrl: "views/platform.commerce.html"
            })
            .state('platform.analysis', {
                url: "/analysis",
                templateUrl: "views/platform.analysis.html"
            })
            .state('work', {
                abstract: true,
                url: "/work",
                views: {
                    "": {
                        templateUrl: "views/work.html"
                    },
                    "nav": {
                        templateUrl: "views/nav.html"
                    }
                }
            })
            .state('work.main', {
                url: "/",
                templateUrl: "views/work.main.html"
            })
            .state('work.fonograf', {
                url: "/fonograf",
                templateUrl: "views/work.fonograf.html"
            })
            .state('work.lens', {
                url: "/lens",
                templateUrl: "views/work.lens.html"
            })
            .state('contact', {
                url: "/contact",
                views: {
                    "": {
                        templateUrl: "views/contact.html"
                    },
                    "nav": {
                        templateUrl: "views/nav.html"
                    }
                }
            })
    })

    .run(function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });
