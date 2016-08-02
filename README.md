# angularjs-editable-dropbox
An bootstrap style dropbox with editable text area. 
The text area content can be binded with ng-model. 
User can choose from dropdown list, or edit the text area.

# Dependencies
css
- bootstrap-3.3.6

javascript
- jquery-1.12.4
- bootstrap-3.3.6
- angularjs-1.5.8

# Usage
1. Include dependencies in html file
```sh
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
```
2. Install with bower 
```sh
bower install angularjs-editable-dropbox
```
3. Include angularjs-editable-dropdown.min.js. It should be located at bower_components/editable-dropdown-angularjs/dist/angularjs-editable-dropdown.min.js

4. Add module as dependency in js file. Define selected and dropdown list options
```sh
angular.module('myApp', ['editableDropdown'])
.controller('demo', function($scope){
	$scope.list = ['one', 'two']
	$scope.selected;
});
```

5. Use directive in html file
```sh
<div ng-app="myApp">
	<div ng-controller="demo" style="width:300px;position:fixed;top:20px;left:20px">	
		<p>You selected {{selected}}</p>
 		<editable-dropdown options='list' ng-model='selected'></editable-dropdown>
 	</div>
</div>
```


# Demo 
Check example under Demo folder.