myApp.service('cart', function(){

			this.totalItems=0;
			this.price=0;

			this.updatePrice=function(price)
				{
					if(price>=0)
						{
							this.price=this.price+price;
							this.totalItems+=1;
							return 1;}
					else 
						return 0;
				};

			this.getPrice=function()
				{
					return this.price;
				};

			this.getItems=function()
				{

					return this.totalItems;
				}		

});