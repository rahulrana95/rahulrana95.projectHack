app.controller('indexController',['$scope','$location','MainService',function($scope,$location,MainService){

		
		$scope.login=1;
		$scope.emailId='';
		$scope.password='';
		$scope.loginForm=0;
		$scope.slider=0;
		$scope.name='Log In';

console.log('indexController running');


		if (MainService.login==0)
		console.log('Not entered in login site..');
	else{

				$scope.state=MainService.userInfo("1");
				$scope.state=$scope.state['$$state'];


				console.log('entered in login site..');

			}


		
		



		


}]);