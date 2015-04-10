angular.module('chatFeedApp')

.factory('loginService', ['$q', 'Auth', function ($q, Auth) {
	return {
		        loginUser: function(email, password) {
		        var deferred = $q.defer();
		        deferred.Auth.$authWithPassword({
						email: email,
						password: password
					}); 
                return deferred.promise;
                console.log(promise);
                }
	}
}]);