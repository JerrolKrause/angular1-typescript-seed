var Sunrise;
(function (Sunrise) {
    var Directives;
    (function (Directives) {
        var DocumentApproveAs = (function () {
            function DocumentApproveAs() {
                this.templateUrl = '/Angular/Components/UI/Modals/DocumentApproveAs/DocumentApproveAsComponent.html';
                this.restrict = 'E';
                this.transclude = true;
                this.scope = {};
                this.controller = DocumentApproveAsController;
                this.controllerAs = "vm";
            }
            DocumentApproveAs.factory = function () {
                var directive = function () { return new DocumentApproveAs(); };
                return directive;
            };
            return DocumentApproveAs;
        }());
        Directives.DocumentApproveAs = DocumentApproveAs;
        //Component controller
        var DocumentApproveAsController = (function () {
            function DocumentApproveAsController(CacheFactoryService, DocumentService, username) {
                this.CacheFactoryService = CacheFactoryService;
                this.DocumentService = DocumentService;
                this.username = username;
                var vm = this;
                vm.GetDocumentTypeNameList();
                vm.ModalData = vm.CacheFactoryService.ModalApproveAs.data;
            }
            /**
             * Get the list of documents used to Mark As
             */
            DocumentApproveAsController.prototype.GetDocumentTypeNameList = function () {
                var vm = this;
                vm.DocumentService.GetDocumentTypeNameList().then(function (res) {
                    vm.MarkAsDocList = res;
                });
            }; //end GetDocumentTypeNameList
            /**
             * Approve a document if its the correct type
             */
            DocumentApproveAsController.prototype.ApproveAsDoc = function () {
                var vm = this;
                vm.Error = false;
                //Repackage the data in the structure the API needs
                var payload = {
                    userId: vm.username,
                    docGuid: vm.CacheFactoryService.ModalApproveAs.data.DocGuid,
                    acceptAs: vm.CacheFactoryService.ModalApproveAs.data.DocName,
                    notes: '',
                    reRequest: false
                };
                //Make post request to service, FIX THIS
                vm.DocumentService.ApproveAsDoc(vm.CacheFactoryService.ModalApproveAs.data.LoanNumber, payload).then(
                //Success
                function (res) {
                    vm.CacheFactoryService.ModalApproveAs.close('HTTP Success');
                }, 
                //Error
                function (res) {
                    vm.Error = "Error approving document, please try again later.";
                });
            }; //end ApproveDoc
            /**
             * Close this modal window
             */
            DocumentApproveAsController.prototype.close = function () {
                var vm = this;
                vm.CacheFactoryService.ModalApproveAs.dismiss('cancel');
            }; //end close
            DocumentApproveAsController.$inject = ['CacheFactoryService', 'DocumentService', 'username'];
            return DocumentApproveAsController;
        }());
        Directives.DocumentApproveAsController = DocumentApproveAsController; //end DocumentApproveAsController
    })(Directives = Sunrise.Directives || (Sunrise.Directives = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=DocumentApproveAsComponent.js.map