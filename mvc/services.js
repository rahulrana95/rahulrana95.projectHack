app.service('MainService',['$http', function($http)
{

			this.login=1;
			this.price=0;
			this.info={};
			//console.log('id is '+id);
					/*$http.get("user.json").success(function(response)
					{ 
					console.log('userinfo called.')
					this.info=response;
					console.log(this.info);


  					});*/
			this.islogin=function(username,password)
				{
					
					return 1;
				};

			this.userInfo=function(id)
			{

					return $http.get("user.json");
  					

  			};
					

}]);