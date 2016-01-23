angular.module('app').factory('Quote',['$resource',function($resource){

	return $resource(api_endpoint+'v1/quotes/:id/', {id:'@id'},
	{
		show: { method:"GET", params: {id :'@id'}, isArray : false },
		index: { method:"GET", params: {}, isArray : true },
		create: { method:"POST", params: {}, isArray : false },
		update: { method:"PUT", params: {id :'@id'}, isArray : false }
	});
}]);

// angular.module('app').factory('User',['$resource',function($resource){
	
// 	return $resource(api_endpoint+'v1/users/:id/', {id:'@id'},
// 	{
// 		show: { method:"GET", params: {id :'@id'}, isArray : false },
// 	});

// }]);

// angular.module('app').factory('Userlog',['$resource',function($resource){
	
// 	return $resource('http://quot-io.herokuapp.com/userlog', {},
// 	{
// 		showUserlog: { method:"GET", params: {}, isArray : false}		
// 	});

// }]);

// angular.module('app').factory('Enrich',['$resource',function($resource){

// 	return $resource(api_endpoint+'v1/enrich', {},
// 	{
// 		get: { method:"POST", params: {}, isArray : false },
// 	});
// }]);