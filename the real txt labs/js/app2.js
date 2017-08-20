var app = angular.module("txt-portal2", ["ui.router"]);

app.controller("navCtrl",function($scope){
  $scope.active = false;
})

app.config(function($stateProvider, $urlRouterProvider){


      $urlRouterProvider.otherwise('/education')

      $stateProvider


        .state("education", {
            url: '/education',
            views: {
              'main': {
                  templateUrl: '/templates/services/education.html',
              }
          }
      })

        .state("it", {
            url: '/it',
            views: {
              'main': {
                  templateUrl: '/templates/services/it.html',
              }
          }
      })

        .state("web", {
            url: '/web',
            views: {
              'main': {
                  templateUrl: '/templates/services/web.html',
              }
          }
      })

      });