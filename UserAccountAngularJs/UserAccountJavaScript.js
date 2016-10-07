/// <reference path="c:\users\prathyu\documents\visual studio 2015\Projects\UserAccountWebApiService\UserAccountAngularJs\scripts/angular.js" />
var MyApp = angular.module("MyApp", ['ngRoute','UserAccountService'])

MyApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/Add', {
            templateUrl: 'Views/AddAccount.html',
            controller: 'AddController'
        }).
        when('/Edit', {
            templateUrl: 'Views/EditAccount.html',
            controller: 'EditController'
        }).
        when('/DeleteAccount', {
            templateUrl: 'Views/DeleteAccount.html',
            controller: 'DeleteController'
        }).
        when('/Home', {
            templateUrl: 'Views/Home.html',
            controller: 'HomeController'
        }).
        otherwise({
            redirectTo: '/Home'
        });
    }]);
MyApp.controller("AddController", function ($scope, UserAccountApi) {
    $scope.addUser = function () {
        var userToAdd = {
            'Id': $scope.id,
            'Name': $scope.Name,
            'Address': $scope.Address,
            'Postal': $scope.Postal,
            'Email': $scope.Email
        };

        UserAccountApi.AddUser(userToAdd)
            .success(function (response) {
                alert("new user added"+response.data);
                $scope.id = undefined;
                $scope.Name = undefined;
                $scope.Address = undefined;
                $scope.Postal = undefined;
                $scope.Email = undefined;
            }).
        error(function (error) {
            alert("Error in adding");
        });

        
    };
});

MyApp.controller("EditController", function ($scope, UserAccountApi) {

    $scope.selectedItem = "select the user";
    $scope.isDeleteItemVisible = false;

    //getUsers();
    $scope.getUsers=function() {
        UserAccountApi.GetUsers()
            .success(function (users) {
                $scope.users = users;
            })
        .error(function (error) {
            $scope.status = "unable to load user data:" + error.message;
        })
    }

    $scope.dropboxselecteditem = function (item) {
        $scope.isDeleteItemVisible = true;
        $scope.selectedItem = item.Id;
        $scope.Name = item.Name;
        $scope.Address = item.Address;
        $scope.Postal = item.Postal;
        $scope.Email = item.Email;
    };

    $scope.updateUser = function () {
        var usertoUpdate = {
            'Id': $scope.id,
            'Name': $scope.Name,
            'Address': $scope.Address,
            'Postal': $scope.Postal,
            'Email': $scope.Email
        };

        UserAccountApi.UpdateUser(usertoUpdate)
        .success(function (response) {
            alert("user is updated" + response.data);
            $scope.id = undefined;
            $scope.Name = undefined;
            $scope.Address = undefined;
            $scope.Postal = undefined;
            $scope.Email = undefined;
            $scope.selectedItem = "select employee";
            $scope.isDeleteItemVisible = false;
            getEmployees();
        })
        .error(function (error) {
            alert("error in updating");
        });
    };
});

MyApp.controller("DeleteController", function ($scope) {
        $scope.selectedItem = "select user";
        $scope.isDeleteItemVisible = false;
        getusers();
        function getusers() {
            UserAccountApi.GetUsers().success(function (users) {
                $scope.users = users;
            })
            .error(function (error) {
                $scope.status = 'Unable to upload data' + error.message;
            });
        };

        $scope.dropboxselecteditem = function (item) {
            $scope.isDeleteItemVisible = true;
            $scope.selectedItem = item.Id;
            $scope.Name = item.Name;
            $scope.Address = item.Address;
            $scope.Postal = item.Postal;
            $scope.Email = item.Email;
        };

        $scope.deleteUser = fucntion()
        {
            var usertoDelete={
                'Id':$scope.id
            };    
    
            UserAccountApi.DeleteUser(usertoDelete)
            .success(function (response) {
                alert("user is deleted" + response.data);
                $scope.id = undefined;
                $scope.Name = undefined;
                $scope.Address = undefined;
                $scope.Postal = undefined;
                $scope.Email = undefined;
                $scope.selectedItem = "select user";
                $scope.isDeleteItemVisible = false;
                getEmployees();
            })
            .error(function (error) {
                alert("error in updating");
            });
        }
    });

MyApp.controller("HomeController", function ($scope, UserAccountApi) {
    getUsers();
    function getUsers()
    {
        UserAccountApi.GetUsers()
            .success(function(users){
            $scope.users=users;
        })
        .error(function(error){
            $scope.status="unable to load user data:"+error.message;
        })
    }
});
