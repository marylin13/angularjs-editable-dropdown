angular.module('myApp', ['editDropDownDir'])
.controller('demo', function($scope){
	$scope.list = ['one', 'two']
	$scope.selected;
});