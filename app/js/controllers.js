'use strict';

/* Controllers */
angular.module('omniapp.controllers', [])
.controller ('PhoneListCtrl', ['$scope', 'projectData', function ($scope, projectData) {
  $scope.projects = projectData.query();
  $scope.orderProp = 'age';
}])


.controller ('PhoneDetailCtrl', ['$scope', '$routeParams', 'projectData', function ($scope, $routeParams, projectData) {
	$scope.project = projectData.get({projectId: $routeParams.projectId}, function(project) {
		$scope.mainImageUrl = project.images[0];
	});
	//<project.images.imgUrl">
	$scope.loadImg = function(imageUrlParameter) {
		$scope.mainImageUrl = imageUrlParameter;
		//alert('ngclick');
	};
}])


.controller ('PhoneSkillsCtrl', ['$scope', 'skillData', function($scope, skillData) {
	$scope.skills = skillData.query();
	$scope.orderProp = 'age';

	// $scope.networks = ["Verizon", "AT&T", "Sprint"];
	// $scope.numbers = ["777","888","999"];
	$scope.message = "fromtheCtrlscope";
	
	$scope.leaveVoicemail = function(number, network, message){
		// factoryname.getmethod(){
		// 	//retrive from service API/firebase
		// }
		console.log(' Number: ' +number+ ' Network: ' +network+ ' said: ' +message);
	};
}])


.controller ('PhoneContactCtrl', ['$scope', 'contactData', function($scope, contactData) {
  // $scope.phones = contactData.query();
  $scope.orderProp = 'age';
}]);