var Sunrise;
(function (Sunrise) {
    var Directives;
    (function (Directives) {
        var DocumentApprove = (function () {
            function DocumentApprove() {
                this.templateUrl = '/Angular/Components/UI/Modals/DocumentApprove/DocumentApproveComponent.html';
                this.restrict = 'E';
                this.transclude = true;
                this.scope = {};
                this.controller = DocumentApproveController;
                this.controllerAs = "vm";
            }
            DocumentApprove.factory = function () {
                var directive = function () { return new DocumentApprove(); };
                return directive;
            };
            return DocumentApprove;
        }());
        Directives.DocumentApprove = DocumentApprove;
        //Component controller
        var DocumentApproveController = (function () {
            function DocumentApproveController(UIService) {
                this.UIService = UIService;
                var vm = this;
            }
            /**
             * Closes the active modal
             */
            DocumentApproveController.prototype.close = function () {
                var vm = this;
                vm.UIService.activeModal.close('cancel');
            }; //end close
            DocumentApproveController.$inject = ['UIService'];
            return DocumentApproveController;
        }());
        Directives.DocumentApproveController = DocumentApproveController; //end DocumentApproveController
    })(Directives = Sunrise.Directives || (Sunrise.Directives = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=DocumentApproveComponent.js.map