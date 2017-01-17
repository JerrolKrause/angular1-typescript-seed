var Sunrise;
(function (Sunrise) {
    var Directives;
    (function (Directives) {
        var AccuracyRoute = (function () {
            function AccuracyRoute() {
                this.templateUrl = '/Angular/Components/Routes/Accuracy/AccuracyRoute.html';
                this.restrict = 'E';
                this.controller = AccuracyRouteController;
                this.controllerAs = "vm";
            }
            //Return directive as factory to make available
            AccuracyRoute.factory = function () {
                var directive = function () { return new AccuracyRoute(); };
                return directive;
            };
            return AccuracyRoute;
        }());
        Directives.AccuracyRoute = AccuracyRoute;
        //Controller
        var AccuracyRouteController = (function () {
            function AccuracyRouteController() {
            }
            AccuracyRouteController.$inject = ["$scope"];
            return AccuracyRouteController;
        }());
        Directives.AccuracyRouteController = AccuracyRouteController;
    })(Directives = Sunrise.Directives || (Sunrise.Directives = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=AccuracyRoute.js.map