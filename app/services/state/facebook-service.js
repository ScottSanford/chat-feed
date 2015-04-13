angular.module('chatFeedApp').factory('FacebookService', ['$q', 'ezfb', 'PostListService', function ($q, ezfb, PostListService) {

	return {

		profileImage: function() {
			
		},

		facebookSubmitMessage: function(message, facebookprofileid, username) {
			var newPost = {
				message: message,
		    	date: Date.now(),
				profileid: facebookprofileid,
				username: username
			}	
			PostListService.$add(newPost);
		}, 

		guestSubmitMessage: function(message, guestprofileid, username) {
			var newPost = {
				message: message,
		    	date: Date.now(),
				profileid: guestprofileid,
				username: username
			}	
			PostListService.$add(newPost);
		}

}
   
}]);
