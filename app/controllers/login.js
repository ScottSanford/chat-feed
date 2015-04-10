angular.module('chatFeedApp')

	.controller('loginCtrl', ['$scope', '$location', 'FBRef', '$firebaseAuth', function($scope, $location, FBRef, $firebaseAuth){

		var auth = $firebaseAuth(FBRef);
		
		$scope.login = function() {
		  auth.$authWithOAuthPopup("facebook").then(function(authData) {
		    console.log("Logged in as:", authData);
		    $location.path('/chat-feed');
		    $scope.$apply();
		  }).catch(function(error) {
		    console.log("Authentication failed:", error);
		  });
		}
	}]);