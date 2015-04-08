'use strict';

/* Services */

angular.module('omniapp.services', [])
.factory('projectData', ['$resource', function($resource)
	{
		return $resource('app/projects/:projectId.json', {},
		{
			query: {
				method:'GET', 
				params:{projectId:'projects'},
				isArray:true
				}
		});
	}])

//angular.module('omniapp', ['ngResource'])
.factory('skillData', ['$resource', function($resource)
	{
		return $resource('app/skills/:projectId.json', {},
		{
			query: {
				method:'GET', 
				params:{projectId:'skills'},
				isArray:true
				}
		});
	}])

.factory('contactData', ['$resource', function($resource)
	{
		return $resource('app/contacts/:projectId.json', {},
		{
			query: {
				method:'GET', 
				params:{projectId:'contacts'},
				isArray:true
				}
		});
	}]);