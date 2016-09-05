/*
*Author: cianroche
*Assignment: WI2.0 Mobile Development, Digital Skills Academy
*Ref: 	Angularjs: https://angularjs.org/
		Font: Dafont: http://www.dafont.com/simplicity2.font
		Create A ToDo App: https://www.youtube.com/watch?v=FSOiVprDdj0
*/

window.onload = function() {
	document.getElementById("toDoInput").focus();    //focusses cursor on input box when page is loaded
};

angular.module("ToDo", [])
.controller("todoController", ["$scope", function($scope){
	$scope.todos = [
	// empty array for toDo items
	];

	$scope.addToDo = function(){
		$scope.todos.push({"title":$scope.newTodo,"done":false, "priority":$scope.priority})  //adds items to array 
			$scope.newTodo = "";    //disables ADD TASK button if input box is empty

	}
	$scope.deleteItems = function(){
		$scope.todos = $scope.todos.filter(function(item){    //for deleting checked items
			return !item.done;
		});
	}

	
	$scope.getTotalTodos = function () {			//Ref: http://codepen.io/Russbrown/pen/IgBuh
	    return $scope.todos.length;					//displays number of things to do	
	 }
}])






				