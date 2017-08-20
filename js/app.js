var app = angular.module("txt-portal", ["ui.router"]);

app.controller("navCtrl",function($scope){
  $scope.active = false;
})

app.controller("contactCtrl",function($scope,$http){
	console.log("contact controller")

	$scope.saveRecord = function(){
		console.log("saving")
		console.log($scope.record)
		$http.post("https://txt-webform.herokuapp.com/saveRecord",$scope.record).then(function(){
 				console.log("success")
		},function(){
				console.log("failed")
		});
		$scope.record = {};
	}
})