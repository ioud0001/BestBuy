angular.module('app')
.controller('SearchCtrl', function($scope, BestBuyService){
    $scope.allProducts = {
        search: ''
    }
    
    $scope.allProducts = []; 
    $scope.search = function(keyword){
        if (keyword){
            BestBuyService.search(keyword)
            .success(function(data){
                $scope.allProducts = data.products; 
                console.log($scope.allProducts);
            })
            .error(function(error){
                $log.error('Best Buy API Search error');
            })
        } else {
            $log.error('Search term is empty!'); 
        }
    }
});