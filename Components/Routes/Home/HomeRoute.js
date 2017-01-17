var Sunrise;
(function (Sunrise) {
    var Directives;
    (function (Directives) {
        var HomeRoute = (function () {
            function HomeRoute() {
                this.templateUrl = '/Angular/Components/Routes/Home/HomeRoute.html';
                this.restrict = 'E';
                this.controller = HomeRouteController;
                this.controllerAs = "vm";
            }
            //Return directive as factory to make available
            HomeRoute.factory = function () {
                var directive = function () { return new HomeRoute(); };
                return directive;
            };
            return HomeRoute;
        }());
        Directives.HomeRoute = HomeRoute;
        //Controller
        var HomeRouteController = (function () {
            function HomeRouteController() {
            }
            HomeRouteController.$inject = ["$scope"];
            return HomeRouteController;
        }());
        Directives.HomeRouteController = HomeRouteController;
    })(Directives = Sunrise.Directives || (Sunrise.Directives = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=HomeRoute.js.map