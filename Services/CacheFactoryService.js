var Sunrise;
(function (Sunrise) {
    var Services;
    (function (Services) {
        //Instantiates an instance of angular's cache factory to store HTTP/GET requests
        var CacheFactoryService = (function () {
            function CacheFactoryService(CacheFactory, $http, $q) {
                this.CacheFactory = CacheFactory;
                this.$http = $http;
                this.$q = $q;
                var vm = this;
                vm.cache = vm.CacheFactory('SunriseCache', {
                    deleteOnExpire: 'aggressive'
                });
            }
            /**
             * Make a get request to the server and return the cached response
             * @param url - String of API URL to get data from
             * @param update - Boolean, if true clear cache and get fresh data
             * @param callback - Call back method that should return the promise data
             * @param dependencies - Object of promises that this API call is dependant on
             */
            CacheFactoryService.prototype.get = function (url, update, callback, dependencies) {
                if (update === void 0) { update = false; }
                var vm = this;
                //If update is true, empty cached version
                if (update) {
                    vm.cache.remove(url);
                }
                //Fetch data from cache if available, otherwise load cache
                return vm.cache.get(url) || vm.cache.put(url, vm.checkDependencies(url, callback, dependencies));
            }; //end get
            /**
             * Manage advanced REST interaction such as async depedencies and re-mapping data via callback
             * @param url- String of the API URL
             * @param callback - Call back method that should return the promise data
             * @param dependencies- Object of promises that this API call is dependant on
             */
            CacheFactoryService.prototype.checkDependencies = function (url, callback, dependencies) {
                //console.log('Check depends', url, dependencies)
                var vm = this, allPromises;
                //If this api request has dependencies
                if (dependencies) {
                    //Set the original request to return as data
                    allPromises = {
                        data: vm.get(url),
                    };
                    //Now loop through all the dependencies and add to the promise object
                    angular.forEach(dependencies, function (value, key) {
                        allPromises[key] = value;
                    });
                    //Return the collection of promises when they are all resolved
                    return vm.$q.all(allPromises).then(function (res) {
                        //If a callback is specified, pass the data to that
                        if (callback) {
                            return callback(res);
                        }
                        else {
                            return res;
                        }
                    });
                }
                else {
                    //Return the promise
                    return vm.$http.get(url).then(function (res) {
                        //If a callback is specified, pass the data to that
                        if (callback) {
                            return callback(res.data);
                        }
                        else {
                            return res.data;
                        }
                    });
                }
            }; //end checkDependencies
            CacheFactoryService.$inject = ['CacheFactory', '$http', '$q'];
            return CacheFactoryService;
        }());
        Services.CacheFactoryService = CacheFactoryService;
    })(Services = Sunrise.Services || (Sunrise.Services = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=CacheFactoryService.js.map