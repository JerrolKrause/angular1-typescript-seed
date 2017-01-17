var Sunrise;
(function (Sunrise) {
    var Services;
    (function (Services) {
        var UserService = (function () {
            function UserService(CacheFactoryService, $http, $q) {
                this.CacheFactoryService = CacheFactoryService;
                this.$http = $http;
                this.$q = $q;
                var vm = this;
            }
            /**
             * Get the current logged in user's AD data
             * @param update
             */
            UserService.prototype.GetUserProfile = function (update) {
                if (update === void 0) { update = false; }
                var vm = this, url = '/api/Service/GetUserProfile/jkrause';
                return vm.CacheFactoryService.get(url, update);
            }; //end GetUserProfile
            /**
             *
             * @param update
             */
            UserService.prototype.testGetMany = function (update) {
                if (update === void 0) { update = false; }
                //console.log('testGetMany')
                var vm = this, url = '/api/Service/GetUserProfile/tnguyen';
                var dependencies = {
                    GetUserProfile: vm.GetUserProfile(),
                    GetUserProfile2: vm.CacheFactoryService.get('/api/Service/GetUserProfile/jsmith'),
                    GetUserProfile3: vm.CacheFactoryService.get('/api/Service/GetUserProfile/msmith')
                };
                //Callback function to remap data
                var mapData = function (res) {
                    var data = {
                        users: []
                    };
                    angular.forEach(res, function (value, key) {
                        data.users.push(value.UserName);
                    });
                    return data;
                };
                return vm.CacheFactoryService.get(url, update, mapData, dependencies);
            }; //end testGetMany
            UserService.$inject = ['CacheFactoryService', '$http', '$q'];
            return UserService;
        }());
        Services.UserService = UserService;
    })(Services = Sunrise.Services || (Sunrise.Services = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=UserService.js.map