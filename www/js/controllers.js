angular.module('starter.controllers', [])
.controller('SearchCtrl', function($scope, BestBuyService){
    alert("yaaaaaaaa");
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
})
.controller('LogsCtrl', function($scope, Messages) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  $scope.$on('$ionicView.enter', function(e) {
  });

})
.controller('ShowStoreCtrl', function( $scope, $stateParams, Stores){

})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
