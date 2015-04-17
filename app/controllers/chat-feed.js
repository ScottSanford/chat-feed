angular.module('chatFeedApp')

	.controller('chatFeedCtrl', ['$scope', '$location', 'FBRef', 'PostListService', '$firebaseAuth', 'FacebookService', 'ezfb', function($scope, $location, FBRef, PostListService, $firebaseAuth, FacebookService, ezfb){

		$scope.emojiMessage={};

		var auth = $firebaseAuth(FBRef);
		var getAuth = auth.$getAuth();
		$scope.facebookActive = null;
		$scope.guestActive = null;

		if (getAuth === null) {
			$scope.guestActive = true;
			$scope.username  = 'Guest' + Math.floor(Math.random() * 101);
			$scope.guestprofileid = 'http://www.murketing.com/journal/wp-content/uploads/2009/04/nopic_192.gif';		
		}

		if (getAuth) {
			$scope.facebookActive = true;
			auth.$waitForAuth().then(function(data){
				console.log(data);
				var fbprofileId = data.facebook.id;
				$scope.facebookprofileid = "http://graph.facebook.com/" + fbprofileId + "/picture?type=large";
			    $scope.username  = data.facebook.displayName;
			})			
		}

		$scope.logout = function() {
			FBRef.unauth();
			$location.path("/");
		}

	    $scope.posts = PostListService;


	    $scope.submitMessage = function() {
	    	

	    	if(getAuth === null) {
	    		$scope.posts.facebookActive = true;
				FacebookService.guestSubmitMessage($scope.emojiMessage.messagetext, $scope.guestprofileid, $scope.username);   		
	    	} else if (getAuth) {
	    		$scope.posts.guestActive = true;
	    		FacebookService.facebookSubmitMessage($scope.emojiMessage.messagetext, $scope.facebookprofileid, $scope.username);
	    	}

			$scope.emojiMessage.rawhtml = '';
		
		}
		
	}])











