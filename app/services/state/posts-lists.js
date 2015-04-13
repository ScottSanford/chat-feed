angular.module('chatFeedApp').factory('PostListService', ['$firebaseArray', 'FBRef', function ($firebaseArray, FBRef) {

		var firebasePosts = FBRef.child('posts');
		return $firebaseArray(firebasePosts);
   
}]);
