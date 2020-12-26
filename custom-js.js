var mainApp = angular.module('mainApp', ["ngRoute"]);

mainApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'aboutCtrl',
        templateUrl: 'templates/about.html'
    }).
    when('/education', {
        controller: 'educationCtrl',
        templateUrl: 'templates/education.html'
    }).
    when('/links', {
        controller: 'linksCtrl',
        templateUrl: 'templates/links.html'
    }).
    when('/experience', {
        controller: 'experienceCtrl',
        templateUrl: 'templates/experience.html'
    }).
    when('/interests', {
        controller: 'interestsCtrl',
        templateUrl: 'templates/interests.html'
    }).
    when('/skills', {
        controller: 'skillsCtrl',
        templateUrl: 'templates/skills.html'
    })
});

mainApp.controller('aboutCtrl', function($scope) {

});

mainApp.controller('educationCtrl', function($scope) {

});

mainApp.controller('experienceCtrl', function($scope) {

});

mainApp.controller('interestsCtrl', function($scope) {

});

mainApp.controller('linksCtrl', function($scope) {

});

mainApp.controller('skillsCtrl', function($scope) {

});