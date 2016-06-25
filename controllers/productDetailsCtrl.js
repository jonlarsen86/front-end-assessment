(function(){
    angular.module('store').controller('productDetailsCtrl', ProductDetailsCtrl);

    ProductDetailsCtrl.$inject = ['$scope', '$stateParams', 'mainService'];

    function ProductDetailsCtrl($scope, $stateParams, mainService) {

        mainService.getDetails($stateParams.id)
            .then(function(results){
                $scope.productDetails = results;
            })
            .catch(function(error){
                alert('there was an error retrieving detail data: ' + error);
            });
    };

})();