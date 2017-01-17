var Sunrise;
(function (Sunrise) {
    var Directives;
    (function (Directives) {
        var CommunicationExamRoute = (function () {
            function CommunicationExamRoute() {
                this.templateUrl = '/Angular/Components/Routes/Communication/Examination/CommunicationExamRoute.html';
                this.restrict = 'E';
                this.controller = CommunicationExamRouteController;
                this.controllerAs = "vm";
            }
            //Return directive as factory to make available
            CommunicationExamRoute.factory = function () {
                var directive = function () { return new CommunicationExamRoute(); };
                return directive;
            };
            return CommunicationExamRoute;
        }());
        Directives.CommunicationExamRoute = CommunicationExamRoute;
        //Controller
        var CommunicationExamRouteController = (function () {
            function CommunicationExamRouteController() {
            }
            CommunicationExamRouteController.$inject = ["$scope"];
            return CommunicationExamRouteController;
        }());
        Directives.CommunicationExamRouteController = CommunicationExamRouteController;
    })(Directives = Sunrise.Directives || (Sunrise.Directives = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=CommunicationExamRoute.js.map