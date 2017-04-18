var app=angular.module('myApp', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {


	

	console.log('state checking...');


	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'mvc/view/index1.html',



		})
	.state('myCourses',{

		url:'/myCourses',
		templateUrl:'mvc/view/myCourses.html',
		controller:'myCoursesController',
		
	}
		)
	.state('login',{

		url:'/login',
		templateUrl:'mvc/view/login.html',
		
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
		controller:'exploreController',


	})
	.state('scorecard',{
		url:'/scorecard',
		templateUrl:'mvc/view/scorecard.html',

	});
	
	$urlRouterProvider.otherwise('/home');



	
}]);

