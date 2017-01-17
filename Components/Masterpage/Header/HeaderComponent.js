var Sunrise;
(function (Sunrise) {
    var Directives;
    (function (Directives) {
        var HeaderComponent = (function () {
            function HeaderComponent() {
                //Standard directive values
                this.templateUrl = '/Angular/Components/Masterpage/Header/HeaderComponent.html';
                this.restrict = 'E';
                this.controller = HeaderComponentController;
                this.controllerAs = "vm";
                this.scope = true;
            }
            //Return directive as factory to make available
            HeaderComponent.factory = function () {
                var directive = function () { return new HeaderComponent(); };
                return directive;
            };
            return HeaderComponent;
        }());
        Directives.HeaderComponent = HeaderComponent;
        //Component controller
        var HeaderComponentController = (function () {
            function HeaderComponentController(UserService) {
                this.UserService = UserService;
                this.$inject = ['UserService'];
                var vm = this;
                vm.UserService.GetUserProfile();
                vm.userInfo = vm.UserService.GetUserProfile().then(function (res) {
                    vm.userInfo = res;
                    //console.log(res)
                });
                /**/
                vm.userInfo = vm.UserService.testGetMany().then(function (res) {
                });
                vm.userInfo = vm.UserService.testGetMany().then(function (res) {
                    //console.log(res)
                });
            }
            return HeaderComponentController;
        }());
        Directives.HeaderComponentController = HeaderComponentController; //end HeaderComponentController
    })(Directives = Sunrise.Directives || (Sunrise.Directives = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=HeaderComponent.js.map