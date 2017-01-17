var Sunrise;
(function (Sunrise) {
    var Directives;
    (function (Directives) {
        var QualifyRoute = (function () {
            function QualifyRoute() {
                this.templateUrl = '/Angular/Components/Routes/Qualify/QualifyRoute.html';
                this.restrict = 'E';
                this.controller = QualifyRouteController;
                this.controllerAs = "vm";
            }
            //Return directive as factory to make available
            QualifyRoute.factory = function () {
                var directive = function () { return new QualifyRoute(); };
                return directive;
            };
            return QualifyRoute;
        }());
        Directives.QualifyRoute = QualifyRoute;
        //Controller
        var QualifyRouteController = (function () {
            function QualifyRouteController() {
            }
            QualifyRouteController.$inject = ["$scope"];
            return QualifyRouteController;
        }());
        Directives.QualifyRouteController = QualifyRouteController;
    })(Directives = Sunrise.Directives || (Sunrise.Directives = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=QualifyRoute.js.map