angular.module('app')
.controller('LogsCtrl', function($scope, $rootScope){
	$scope.closeLogin =  $rootScope.modal.hide
});
