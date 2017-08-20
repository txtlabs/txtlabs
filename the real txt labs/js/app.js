var app = angular.module("txt-portal", ["ui.router"]);

app.controller("navCtrl",function($scope){
  $scope.active = false;
})

app.config(function($stateProvider, $urlRouterProvider){


      $urlRouterProvider.otherwise('/overview')

      $stateProvider


        .state("overview", {
            url: '/overview',
            views: {
              'main': {
                  templateUrl: '/templates/about-us/overview.html',
              }
          }
      })

        .state("principle", {
            url: '/principle',
            views: {
              'main': {
                  templateUrl: '/templates/about-us/principle.html',
              }
          }
      })

        .state("unique", {
            url: '/unique',
            views: {
              'main': {
                  templateUrl: '/templates/about-us/unique.html',
              }
          }
      })

      });