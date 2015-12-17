angular.module('app.services', [])
.factory('BestBuyService', function($http){
    var bestBuyAPIendPoint = 'http://api.bestbuy.com/v1';
    var key = 'vut2jfymkd4s69cbzmhw2qbe'; 
    
    return {
        search: function(keyword){
            var searchUrl = bestBuyAPIendPoint + '/products((search="'+keyword+'"))?show=name,sku,salePrice,image&format=json&apiKey=' + key;
                // geolocation goes here
            console.log(searchUrl);
        return $http.get(searchUrl); 
        }
    }

});