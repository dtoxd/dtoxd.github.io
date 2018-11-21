var app = angular.module('cryptToken', []);


// App controller
app.controller('appCtrl', function ($scope, $http) {

    $http({

        method: "GET",
        url: "https://api.coinmarketcap.com/v1/ticker/"


    }).then(function mySuccess(response) {
        $scope.coinPrice = response.data;
    }, function myError(response) {
        $scope.coinPrice = response.statusText;

    });


    $scope.cryptoCalculate = function () {

        var coinName = $scope.coinName;
        var currencyName = $scope.currencyName;

        $http.get("https://min-api.cryptocompare.com/data/price?fsym=" + coinName + "&tsyms=" + currencyName + "")
            .then(function (response) {
                //First function handles success
                $scope.cryptoCalcResult = response.data;

                // Only key
                $scope.getKey = function (obj) {
                    return Object.keys(obj)[0];
                }

                // Only Value
                $scope.getValue = function (obj) {
                    return obj[Object.keys(obj)[0]];
                }

//                console.log($scope.cryptoCalcResult);

            }, function (response) {
                //Second function handles error
                $scope.cryptoCalcResult = response.statusText;
            });

    }

    // openexchangerates
    $http.get("https://openexchangerates.org/api/currencies.json")
        .then(function (response) {
            $scope.currencies = response.data;
        });

});