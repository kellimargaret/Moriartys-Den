var moriartysDen = angular.module('moriartysDen', ['ui.router']);

moriartysDen.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
        controller: 'HeadersCtrl'
      },
      'body': {
        templateUrl: "partials/home.html"
      }
    }
  });
});
