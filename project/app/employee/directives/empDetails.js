angular.module('empmanager.employee')
	.directive('empDetails',[function(){

		return {
			restrict: 'EA',
			templateUrl: 'app/employee/templates/emp-details.tpl.html',
			replace: true,
			scope: {
				empTitle: '@',
				emp: '='
			},
			link: function(scope, element, attrs){
				scope.sayHi = function(){
					alert('hi');
					element.attr("style","background-color:blue");
				};
				scope.myProp = "asdf";
			}
		};

	}]);