angular.module('app')
/*
.config(function($authProvider){
	$authProvider.facebook({
		clientId: '1007694065943680',
		//redirectUri: 'http://localhost:8100'
		scope: 'email, public_profile, user_photos, user_friends',
		responseType: 'token'
	});
})

$scope.loginData = {
	username: '',
	password: ''
};
*/

.controller('LoginCtrl', function($scope, $rootScope, LocalStorageService, LogService){
	$scope.closeLogin = function(){
		$rootScope.modal.hide(); 	
	};
	
	$scope.loginData = {
		username: '',
		password: ''	
	};
	
	$scope.doLogin = function(){
	if (validateUserName($scope.loginData.username) 
	&& validatePassword($scope.loginData.password)) {
		$rootScope.$broadcast('authentication-successed');
			} else {
				LogService.add({
						date: new Date(),
						name: 'Authentication Failed',
						reason: 'Validation fail'
				}); 
			}
	};
	
	function validateUserName(userName){
	return (userName && userName.toLowerCase() !== 'guest');
		
	};
	function validatePassword(password){
	return(password && password.length > 4);
	
	};

});