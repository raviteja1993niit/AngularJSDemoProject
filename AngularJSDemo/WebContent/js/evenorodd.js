/**
 * EvenOrOddCtrl
 * variable = welcome message
 * function = evenorodd
 */
app.controller('EvenOrOddCtrl',function($scope){
	$scope.evenorodd=function(){
		    if($scope.num%2 == 0)
			  $scope.result='EVEN'
			else
				$scope.result='ODD'
	}
})