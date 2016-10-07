/// <reference path="c:\users\prathyu\documents\visual studio 2015\Projects\UserAccountWebApiService\UserAccountAngularJs\scripts/angular.js" />
//create a service
var UserAccountService = angular.module('UserAccountService', []);

UserAccountService.factory('UserAccountApi',function($http)
{
    var urlbase='http://localhost:50955/api';
    //create an object
    var UserAccountApi={}
    //create a function and assign to a variable
    UserAccountApi.GetUsers= function(){
        return $http.get(urlbase+'/UserAccount');
    };

    //call the addUser method from webapi
    UserAccountApi.AddUser = function (newUser) {
        return $http.post(urlbase + '/UserAccount', newUser);
    };

    //update the user
    UserAccountApi.UpdateUser = function (userToUpdate) {
        var req = $http({
            url: urlbase + '/UserAccount' + userToUpdate,
            data: userToUpdate
        });
        return req;
    };

    UserAccountApi.DeleteUser = function (userToDelete) {
        var req = $http({
            method:'delete',
            url: urlbase + '/UserAccount' + userToDelete.id            
        });
        return req;
    };

    return UserAccountApi;
});
 