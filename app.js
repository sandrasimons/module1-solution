(function () {
'use strict';
    
angular.module('LunchCheck', [])
       .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    console.log($scope);
}

})();