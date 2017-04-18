var myApp=angular.module('myApp', ['ui.router']);

myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

	console.log('state checking...');
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'index.html',



		})
	.state('home.profile',{
		url:'/home/profile',
		templateUrl:'profile.html',

	});
	$urlRouterProvider.otherwise('/home');



	
}]);