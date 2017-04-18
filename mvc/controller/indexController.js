app.controller('indexController',['$scope','$location',function($scope,$location){

		
		$scope.login=0;
		$scope.emailId='';
		$scope.password='';
		$scope.loginForm=0;
		$scope.slider=0;
		$scope.name='Log In';





		
		$scope.signIn=function(){
			console.log('email is '+$scope.emailId);

					if($scope.emailId=='3rahul4@gmail.com' && $scope.password=='9068390682')
					{
						$scope.name='Rahul';
						$scope.login=1;
						$scope.loginForm=0;
						console.log('Login Successful...');
					}
					


		};



		if ($scope.login==0)
		console.log('Not entered in login site..');
	else
				console.log('entered in login site..');


}]);