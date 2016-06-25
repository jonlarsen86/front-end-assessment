(function () {
    angular.module('store').controller('shopCtrl', ShopCtrl);

    ShopCtrl.$inject = ['$scope', 'mainService'];

    function ShopCtrl($scope, mainService) {

        mainService.getProducts()
            .then(function (results) {
                $scope.shopData = results;
            })
            .catch(function (error) {
                alert('there was an error retrieving the shop data:' + error);
            });
    }
})();