angular.module('empmanager.employee')
	.filter('empTitle',[function(){

		return function(val, greeting){
			if(val){
				greeting = greeting || "Hello";
				return greeting + " " + val.toUpperCase();
			}
		};

	}]);