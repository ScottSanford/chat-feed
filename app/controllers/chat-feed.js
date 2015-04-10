angular.module('chatFeedApp')

	.controller('chatFeedCtrl', ['$scope', 'FBRef', '$firebaseArray', 'FacebookService', 'ezfb', function($scope, FBRef, $firebaseArray, FacebookService, ezfb){

		var firebasePosts = FBRef.child('posts');

	    $scope.posts = $firebaseArray(firebasePosts);

		// $scope.profileid = FacebookService.id;
		// $scope.username = FacebookService.name;

	    ezfb.api('/me', function(data) {
		     console.log(data);
		     $scope.profileid = data.id;
		     $scope.username = data.name;
	    });

	    $scope.submitMessage = function() {
				ezfb.api('/me', function(data) {
					$scope.posts.$add({
				    	message: $scope.message,
				    	date: Date.now(),
						profileid: data.id, 
						username: data.name
					}); 
				$scope.message = '';
				})
		}

	}])