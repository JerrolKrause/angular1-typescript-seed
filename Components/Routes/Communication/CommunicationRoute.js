var Sunrise;
(function (Sunrise) {
    var Directives;
    (function (Directives) {
        var CommunicationRoute = (function () {
            function CommunicationRoute() {
                this.templateUrl = '/Angular/Components/Routes/Communication/CommunicationRoute.html';
                this.restrict = 'E';
                this.controller = CommunicationRouteController;
                this.controllerAs = "vm";
            }
            //Return directive as factory to make available
            CommunicationRoute.factory = function () {
                var directive = function () { return new CommunicationRoute(); };
                return directive;
            };
            return CommunicationRoute;
        }());
        Directives.CommunicationRoute = CommunicationRoute;
        //Controller
        var CommunicationRouteController = (function () {
            function CommunicationRouteController() {
            }
            CommunicationRouteController.$inject = ["$scope"];
            return CommunicationRouteController;
        }());
        Directives.CommunicationRouteController = CommunicationRouteController;
    })(Directives = Sunrise.Directives || (Sunrise.Directives = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=CommunicationRoute.js.map