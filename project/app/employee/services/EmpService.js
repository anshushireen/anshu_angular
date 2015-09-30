angular.module('empmanager.employee')
	.service('EmpService',[function(){

		var name = "";

		this.getName = function(){
			return name;
		};

		this.setName = function(nameVal){
			name = nameVal;
		};

	}]);