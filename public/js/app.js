var PortfolioApp = angular.module('PortfolioApp', ['ngRoute']);

PortfolioApp.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/projects.ejs',
    controller : 'ProjectsController as projects'
  });

  $routeProvider.when('/contact', {
    templateUrl : 'pages/contact.ejs',
    controller : 'ContactController as contact'
  });

  $routeProvider.when('/projects', {
    templateUrl : 'pages/projects.ejs',
    controller : 'ProjectsController as projects'
  });

  $routeProvider.when('/background', {
    templateUrl : 'pages/background.ejs',
    controller : 'BackgroundController as background'
  });

  $routeProvider.when('/comming_soon', {
    templateUrl : 'pages/comming_soon.ejs',
    controller : 'CommingController as comming'
  });

});