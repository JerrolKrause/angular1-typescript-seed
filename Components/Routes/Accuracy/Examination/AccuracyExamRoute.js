var Sunrise;
(function (Sunrise) {
    var Directives;
    (function (Directives) {
        var AccuracyExamRoute = (function () {
            function AccuracyExamRoute() {
                this.templateUrl = '/Angular/Components/Routes/Accuracy/Examination/AccuracyExamRoute.html';
                this.restrict = 'E';
                this.controller = AccuracyExamRouteController;
                this.controllerAs = 'vm';
            }
            //Return directive as factory to make available
            AccuracyExamRoute.factory = function () {
                var directive = function () { return new AccuracyExamRoute(); };
                return directive;
            };
            return AccuracyExamRoute;
        }());
        Directives.AccuracyExamRoute = AccuracyExamRoute;
        //Controller
        var AccuracyExamRouteController = (function () {
            function AccuracyExamRouteController(DocumentService, $sce, username, $uibModal, CacheFactoryService) {
                this.DocumentService = DocumentService;
                this.$sce = $sce;
                this.username = username;
                this.$uibModal = $uibModal;
                this.CacheFactoryService = CacheFactoryService;
                var vm = this;
                vm.GetNextFromAccuracyQueue();
            }
            /**
             * Get the next document from the accuracy queue
             */
            AccuracyExamRouteController.prototype.GetNextFromAccuracyQueue = function () {
                var vm = this;
                vm.DocumentService.GetNextFromAccuracyQueue().then(function (res) {
                    vm.Document = res;
                    vm.DocumentURL = vm.$sce.trustAsResourceUrl(res.DocUrl);
                    console.log(vm.Document);
                });
            }; //end GetNextFromAccuracyQueue
            /**
             * Approve a document if its the correct type
             */
            AccuracyExamRouteController.prototype.ApproveDoc = function () {
                var vm = this;
                vm.Error = false;
                //Repackage the data in the structure the API needs
                var payload = {
                    userId: vm.username,
                    docGuid: vm.Document.DocGuid,
                    acceptAs: vm.Document.DocName,
                    notes: '',
                    reRequest: false
                };
                //Make post request to service
                vm.DocumentService.ApproveDoc(vm.Document.LoanNumber, payload).then(
                //Success
                function (res) {
                    vm.GetNextFromAccuracyQueue(); //Get next
                }, 
                //Error
                function (res) {
                    vm.Error = "Error approving document, please try again later.";
                });
            }; //end ApproveDoc
            /**
             * Launch doc approval modal
             */
            AccuracyExamRouteController.prototype.ModalApproveAs = function () {
                var vm = this;
                vm.CacheFactoryService.ModalApproveAs = vm.$uibModal.open({
                    component: 'DocumentApproveAs',
                    size: 'md'
                });
                //Attach model data to the modal instance
                vm.CacheFactoryService.ModalApproveAs.data = vm.Document;
                //Now watch for the promise that returns when the modal is closed or submitted
                vm.CacheFactoryService.ModalApproveAs.result.then(
                //Submitted successfully
                function (res) {
                    console.log('Modal Submitted Successfully: ', res);
                    vm.GetNextFromAccuracyQueue();
                }, 
                //Closed/dismissed
                function (res) {
                    console.log('Dismiss', res);
                });
            }; //end modalApprove
            AccuracyExamRouteController.$inject = ['DocumentService', '$sce', 'username', '$uibModal', 'CacheFactoryService'];
            return AccuracyExamRouteController;
        }());
        Directives.AccuracyExamRouteController = AccuracyExamRouteController;
    })(Directives = Sunrise.Directives || (Sunrise.Directives = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=AccuracyExamRoute.js.map