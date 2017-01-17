var Sunrise;
(function (Sunrise) {
    var Directives;
    (function (Directives) {
        var FooterComponent = (function () {
            function FooterComponent() {
                //Standard directive values
                this.templateUrl = '/Angular/Components/Masterpage/Footer/FooterComponent.html';
                this.restrict = 'E';
                this.controller = FooterComponentController;
                this.controllerAs = "vm";
            }
            //Return directive as factory to make available
            FooterComponent.factory = function () {
                var directive = function () { return new FooterComponent(); };
                return directive;
            };
            return FooterComponent;
        }());
        Directives.FooterComponent = FooterComponent;
        //Component controller
        var FooterComponentController = (function () {
            function FooterComponentController() {
            }
            return FooterComponentController;
        }());
        Directives.FooterComponentController = FooterComponentController; //end FooterComponentController
    })(Directives = Sunrise.Directives || (Sunrise.Directives = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=FooterComponent.js.map