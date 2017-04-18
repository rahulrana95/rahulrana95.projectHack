var myApp=angular.module('myApp', ['ui.router']);

myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {


	

	console.log('state checking...');
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'mvc/view/index1.html',



		})
	.state('myCourses',{

		url:'/myCourses',
		templateUrl:'mvc/view/myCourses.html',
		
	}
		)
	.state('recomendedCourses',{
			url:'/recomendedCourses',
		templateUrl:'mvc/view/recomendedCourses.html',

	})
	.state('profile',{
		url:'/profile',
		templateUrl:'mvc/view/profile.html',
	})
	.state('explore',{
		url:'/explore',
		templateUrl:'mvc/view/explore.html',

	})
	.state('scorecard',{
		url:'/scorecard',
		templateUrl:'mvc/view/scorecard.html',

	});
	
	$urlRouterProvider.otherwise('/home');



	
}]);

