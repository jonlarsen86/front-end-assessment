(function () {
    angular.module('store').factory('mainService', MainService);

    MainService.$inject = ['$http'];

    function MainService($http) {

        return {
            getProducts: getProducts,
            getDetails: getDetails
        };

        function getProducts() {
            return $http.get('https://dev-assessment.firebaseio.com/products.json')
                .then(function (results) {
                    results = results.data;
                    var resultsArr = [];

                    for (var key in results) {
                        results[key].id = key;
                        resultsArr.push(results[key]);
                    }                                      

                    return resultsArr;
                })
                .catch(function (error) {
                    console.error(error);
                });
        }

        function getDetails(id) {
            return $http.get('https://dev-assessment.firebaseio.com/products/' + id + '.json')
                .then(function (results) {
                    return results.data;
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    }
})()