angular.module("chatFeedApp", [
        'firebase',
        'ngRoute', 
        'ngAnimate', 
        'ezfb'
        ])

        .constant('FIREBASE_URL', 'https://dazzling-inferno-7726.firebaseio.com/')

        .factory('FBRef', function(FIREBASE_URL){
            return new Firebase(FIREBASE_URL);
        })

        .run(function (ezfb) {
          ezfb.init({
            appId: '958100614201092'
          })
        })

        .config(function ($routeProvider) { 
              $routeProvider
                .when('/', {
                    templateUrl: 'partials/login.html', 
                    controller: 'loginCtrl'
                })
                .when('/chat-feed', {
                    templateUrl: 'partials/chat-feed.html',
                    controller: 'chatFeedCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
          })
        