angular.module('empmanager.employee')
	.controller('EmpListCtrl',['EmpService', function(EmpService){
		this.test = "angular testpage";

		console.log("controller");
		EmpService.setName("controllerName");

		this.sayHello = function(){
			alert('hello');
		};

		this.dummyEmp = {
			name: 'dummy',
			age: 10
		};

		this.onDummy = function(){
			alert('dummy');
		};

		var self = this;
		this.onSelect = function(employee){
			self.selectedEmployee = employee;
		};

		this.employees = [
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