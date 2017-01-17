var Sunrise;
(function (Sunrise) {
    var Directives;
    (function (Directives) {
        var LayoutMainComponent = (function () {
            function LayoutMainComponent() {
                //Standard directive values
                this.templateUrl = '/Angular/Components/Masterpage/LayoutMain/LayoutMainComponent.html';
                this.restrict = 'E';
                this.controller = LayoutMainComponentController;
                this.controllerAs = "vm";
            }
            //Return directive as factory to make available
            LayoutMainComponent.factory = function () {
                var directive = function () { return new LayoutMainComponent(); };
                return directive;
            };
            return LayoutMainComponent;
        }());
        Directives.LayoutMainComponent = LayoutMainComponent;
        //Component controller
        var LayoutMainComponentController = (function () {
            function LayoutMainComponentController() {
            }
            return LayoutMainComponentController;
        }());
        Directives.LayoutMainComponentController = LayoutMainComponentController; //end LayoutMainComponentController
    })(Directives = Sunrise.Directives || (Sunrise.Directives = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=LayoutMainComponent.js.map