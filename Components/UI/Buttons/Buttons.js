var Sunrise;
(function (Sunrise) {
    var Directives;
    (function (Directives) {
        //Button that closes the currently active modal
        var ButtonModalClose = (function () {
            function ButtonModalClose(UIService) {
                var _this = this;
                this.UIService = UIService;
                this.template = '<button type="button" class="close" aria-label="Close" ng-click="close()"> <span aria-hidden="true">&times;</span></button>';
                this.restrict = 'E';
                this.transclude = true;
                this.link = function (scope, element, attributes, UIService) {
                    scope.close = function () { _this.UIService.activeModal.dismiss('cancel'); };
                };
            }
            ButtonModalClose.factory = function () {
                var directive = function (UIService) { return new ButtonModalClose(UIService); };
                return directive;
            };
            ButtonModalClose.$inject = ['UIService'];
            return ButtonModalClose;
        }());
        Directives.ButtonModalClose = ButtonModalClose; //end ButtonDocApproveAs
        //Button that closes the currently active modal
        var ButtonModalCancel = (function () {
            function ButtonModalCancel(UIService) {
                var _this = this;
                this.UIService = UIService;
                this.template = ' <a href="" ng-click="close()" aria-label="Close" class="pull-xs-left">Cancel</a>';
                this.restrict = 'E';
                this.transclude = true;
                this.link = function (scope, element, attributes, UIService) {
                    scope.close = function () { _this.UIService.activeModal.dismiss('cancel'); };
                };
            }
            ButtonModalCancel.factory = function () {
                var directive = function (UIService) { return new ButtonModalCancel(UIService); };
                return directive;
            };
            ButtonModalCancel.$inject = ['UIService'];
            return ButtonModalCancel;
        }());
        Directives.ButtonModalCancel = ButtonModalCancel; //end ButtonDocApproveAs
    })(Directives = Sunrise.Directives || (Sunrise.Directives = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=Buttons.js.map