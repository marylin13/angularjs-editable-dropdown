angular.module('editableDropdown', [])
.directive('editableDropdown', function() {
  return {
    restrict: 'E',
    require: 'ngModel',
    scope: {
      options: '=',
    },
    template: '<div class="input-group dropdown">' +
      '<input type="text" class="form-control countrycode dropdown-toggle" ng-model="selected">' +
      '<ul class="dropdown-menu">' +
        '<li ng-repeat="option in options" ng-click="choose($event)" data-value="{{option}}">' +
        '{{option}}' + 
        '</li>' + 
      '</ul>' +
      '<span role="button" class="input-group-addon dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span></span>' +
    '</div>',
    link: function(scope, iElement, iAttrs, ngModelCtrl) {
      ngModelCtrl.$formatters.push(function(modelValue) {
        return {
          selected: modelValue,
        };
      });

      ngModelCtrl.$render = function() {
          if (!ngModelCtrl.$viewValue) ngModelCtrl.$viewValue = { selected: ''};
          scope.selected = ngModelCtrl.$viewValue.selected;
      };


      scope.$watch('selected', function() {
          ngModelCtrl.$setViewValue({ selected: scope.selected});
      });


      ngModelCtrl.$parsers.push(function(viewValue) {
          return viewValue.selected;
      });


    },
    controller: ['$scope', function($scope) {
       $scope.choose = function($event){
        $scope.selected = $event.target.getAttribute('data-value');  
      }      
    }],
  };
});
