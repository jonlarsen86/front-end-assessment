(function(){
    angular.module('store').factory('mainService', MainService);

    MainService.$inject = ['$http'];

    function MainService($http) {
        
        return {
            getProducts: getProducts,            
            getDetails: getDetails
        };

        function getProducts() {
            return $http.get('https://dev-assessment.firebaseio.com/products.json')
                .then(function(results) {
                    results = results.data;

                    for (var key in results) {
                        results[key].id = key;
                    }

                    return results;
                })
                .catch(function(error){
                    console.error(error);
                });
        }

        function getDetails(id) {
            return $http.get('https://dev-assessment.firebaseio.com/products/' + id + '.json')
                .then(function(results){
                    return results.data;
                })
                .catch(function(error){
                    console.error(error);
                });
        }
    }
})()