(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.foods = [];
        $scope.message = '';
        $scope.reset = [];
        $scope.handleFoodItems = function () {
            addFoodsInArray($scope.foods, $scope.enteredFoods);
            countAddedFoods($scope.foods);
            displayMessage($scope.foods);
            //reset the form
            $scope.enteredFoods = '';
            $scope.foods = angular.copy($scope.reset);
        };

        function addFoodsInArray(emptyArray, text) {
            emptyArray.push(text);
        }

        function countAddedFoods(array) {
            //do not count emplty values in the foods array
            $scope.foods = array.toString().split(",").filter(function (n) {
                return n != '';
            });
        }

        function displayMessage(array) {
            if (array.length > 0 && array.length < 4) {
                $scope.message = 'Enjoy!';
            } else if (array.length > 3) {
                $scope.message = 'Too much!';
            } else {
                $scope.message = 'Please enter data first.';
            }
        }
    }
})();