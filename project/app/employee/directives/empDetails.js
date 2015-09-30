angular.module('empmanager.employee')
	.directive('empDetails',['EmpService', function(EmpService){

		return {
			restrict: 'EA',
			templateUrl: 'app/employee/templates/emp-details.tpl.html',
			replace: true,
			scope: {
				empTitle: '@',
				emp: '=',
				onCallback: '&'
			},
			transclude: true,
			link: function(scope, element, attrs){
				console.log("directive");
				console.log(EmpService.getName());
				scope.sayHi = function(){
					alert('hi');
					element.attr("style","background-color:blue");
					scope.onCallback();
				};
				scope.myProp = "asdf";
			}
		};

	}]);