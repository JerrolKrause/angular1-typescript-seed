namespace Sunrise {
    export namespace Services {
        export class UserService {
            static $inject = ['CacheFactoryService', '$http', '$q']
           
            constructor(
                private CacheFactoryService,
                private $http,
                private $q
            ) {
                let vm = this
            }


            /**
             * Get the current logged in user's AD data
             * @param update
             */
           GetUserProfile(update:boolean = false) {
                let vm = this,
                   url = '/api/Service/GetUserProfile/jkrause'
                return vm.CacheFactoryService.get(url, update)
            }//end GetUserProfile


            /**
             * 
             * @param update
             */
           testGetMany(update: boolean = false) {
               //console.log('testGetMany')
                let vm = this,
                    url = '/api/Service/GetUserProfile/tnguyen'

                let dependencies = {
                    GetUserProfile: vm.GetUserProfile(),
                    GetUserProfile2: vm.CacheFactoryService.get('/api/Service/GetUserProfile/jsmith'),
                    GetUserProfile3: vm.CacheFactoryService.get('/api/Service/GetUserProfile/msmith')
                }

                //Callback function to remap data
                let mapData = (res) => {
                    let data = {
                        users: []
                    }
                    angular.forEach(res, (value, key) => {
                        data.users.push(value.UserName)
                    })
                    return data
                }

                return vm.CacheFactoryService.get(url, update, mapData, dependencies )
            }//end testGetMany




        }
    }
}
