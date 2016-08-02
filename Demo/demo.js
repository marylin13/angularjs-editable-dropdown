angular.module('myApp', ['editableDropdown'])
.controller('demo', function($scope){
	$scope.list = ['one', 'two']
	$scope.selected;
});