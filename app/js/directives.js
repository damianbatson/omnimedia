'use strict';

/* Directives */

angular.module('omniapp.directives', [])
.directive('projectDir', [ function() {
	  return {
		restrict: 'E',
		scope: {
			number: '@',
      		network: '=',
			message: '@',
      		dialUp: '&'
			},
			
		template:'<div> Number: <select ng-model="number" ng-options="number for number in numbers"></select></div>'+
            '<div> Network: <select ng-model="network" ng-options="network for network in networks"></select></div>'+
            '<h2> Message: <input type="text" ng-model="message"></h2>'+
            '<div class="iconTitle" ng-click="dialUp({number:number, network:network, message:message})">Call Home!</div>',
		
		link: function ($scope, $element, $attrs){
			// $element.find('h2').hide();
			$('h2').on( 'click', function() {
			$element.toggleClass('iconTitle');
	  	});
			
		},
		controller: function($scope){
			
			$scope.networks = ["Verizon", "AT&T", "Sprint"];
			$scope.numbers = ["777","888","999"];
			// $scope.message = ["fromthescope"];
		}
      }
	                                    
	}]);	