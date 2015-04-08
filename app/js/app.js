'use strict';

angular.module('omniapp', ['omniapp.controllers', 'omniapp.services', 'omniapp.directives', 'omniapp.filters', 'ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {templateUrl: 'app/partials/phone-list.html', controller: 'PhoneListCtrl'});
  $routeProvider.when('/projects/:projectId', {templateUrl: 'app/partials/phone-detail.html', controller: 'PhoneDetailCtrl'});
  $routeProvider.when('/skills', {templateUrl: 'app/partials/phone-skills.html', controller: 'PhoneSkillsCtrl'});
  $routeProvider.when('/contact', {templateUrl: 'app/partials/phone-contact.html', controller: 'PhoneContactCtrl'});
  $routeProvider.when('/directive', {templateUrl: 'app/partials/phone-directive.html', controller: 'PhoneSkillsCtrl'});
  $routeProvider.otherwise({redirectTo: '/projects'});
}]);
