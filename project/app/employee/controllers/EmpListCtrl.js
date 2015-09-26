angular.module('empmanager.employee')
	.controller('EmpListCtrl',['$scope', function($scope){
		$scope.test = "safd";

		$scope.sayHello = function(){
			alert('hello');
		};

		$scope.onSelect = function(employee){
			$scope.selectedEmployee = employee;
		};

		$scope.employees = [
		{
			name: "emp1",
			age: 23,
			department: "Dev"
		},
		{
			name: "emp2",
			age: 24,
			department: "QA"
		}];

	}]);