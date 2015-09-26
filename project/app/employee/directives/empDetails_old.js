angular.module('empmanager.employee')
	.directive('empDetails',[function(){

		return {
			restrict: 'EA',
			template: '<div>This is a directive</div>',
			replace: true
		};

	}]);