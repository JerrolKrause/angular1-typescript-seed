var Sunrise;
(function (Sunrise) {
    var Directives;
    (function (Directives) {
        var QualifyExamRoute = (function () {
            function QualifyExamRoute() {
                this.templateUrl = '/Angular/Components/Routes/Qualify/Examination/QualifyExamRoute.html';
                this.restrict = 'E';
                this.controller = QualifyExamRouteController;
                this.controllerAs = "vm";
            }
            //Return directive as factory to make available
            QualifyExamRoute.factory = function () {
                var directive = function () { return new QualifyExamRoute(); };
                return directive;
            };
            return QualifyExamRoute;
        }());
        Directives.QualifyExamRoute = QualifyExamRoute;
        //Controller
        var QualifyExamRouteController = (function () {
            function QualifyExamRouteController() {
            }
            QualifyExamRouteController.$inject = ["$scope"];
            return QualifyExamRouteController;
        }());
        Directives.QualifyExamRouteController = QualifyExamRouteController;
    })(Directives = Sunrise.Directives || (Sunrise.Directives = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=QualifyExamRoute.js.map