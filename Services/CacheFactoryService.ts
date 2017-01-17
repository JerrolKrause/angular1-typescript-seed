namespace Sunrise { 
    export namespace Services {
        //Instantiates an instance of angular's cache factory to store HTTP/GET requests
        export class CacheFactoryService {
            static $inject = ['CacheFactory', '$http', '$q']
            cache: any
            ModalApproveAs: any

            constructor(
                private CacheFactory,
                private $http,
                private $q
                ) {
                let vm = this
                vm.cache = vm.CacheFactory('SunriseCache',
                    {
                        deleteOnExpire: 'aggressive'
                        //maxAge: 600000, // cache items expires every 10 minutes
                        /*
                        //Automatically reload cached data
                        onExpire: function (key, value) {
                            vm.cache.put(key, vm.$http.get(key).then(function (response) {
                                return response.data
                            }));
                        }
                        */
                    }
                )
            }


            /**
             * Make a get request to the server and return the cached response
             * @param url - String of API URL to get data from
             * @param update - Boolean, if true clear cache and get fresh data
             * @param callback - Call back method that should return the promise data
             * @param dependencies - Object of promises that this API call is dependant on
             */
            get(url: string, update: boolean = false, callback?: Function, dependencies?: Object ) {
                let vm = this
                //If update is true, empty cached version
                if (update) { vm.cache.remove(url) }
                //Fetch data from cache if available, otherwise load cache
                return vm.cache.get(url) || vm.cache.put(url, vm.checkDependencies(url, callback, dependencies))
            }//end get


            /**
             * Manage advanced REST interaction such as async depedencies and re-mapping data via callback
             * @param url- String of the API URL
             * @param callback - Call back method that should return the promise data
             * @param dependencies- Object of promises that this API call is dependant on
             */
            checkDependencies(url: string, callback?: Function, dependencies?: Object) {

                //console.log('Check depends', url, dependencies)
                let vm = this,
                    allPromises

                //If this api request has dependencies
                if (dependencies) {
                    //Set the original request to return as data
                    allPromises = {
                        data: vm.get(url),
                    }
                    //Now loop through all the dependencies and add to the promise object
                    angular.forEach(dependencies, (value, key) => {
                        allPromises[key] = value
                    })
                    //Return the collection of promises when they are all resolved
                    return vm.$q.all(allPromises).then((res) => {
                        //If a callback is specified, pass the data to that
                        if (callback) {
                            return callback(res)
                        } else {
                            return res
                        }
                    })
                }
                //No dependencies, just return the single API call
                else {
                    //Return the promise
                    return vm.$http.get(url).then((res) => {
                        //If a callback is specified, pass the data to that
                        if (callback) {
                            return callback(res.data)
                        } else {
                            return res.data
                        }
                    })
                }
            }//end checkDependencies




        }
    }
}