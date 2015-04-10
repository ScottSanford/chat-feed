angular.module('chatFeedApp').factory('FacebookService', ['$q', 'ezfb', function ($q, ezfb) {

	return function(){
		 	  // $q.all([
		    //     ezfb.api('/me')
		    //   ])
		    //   .then(function (data) {
		    //     // Runs after api calls are done
		    //     console.log(data);
		    //     return data;
		    //   });
	}
   
}]);
