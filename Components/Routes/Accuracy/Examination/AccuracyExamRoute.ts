namespace Sunrise {
    export namespace Directives {
        export class AccuracyExamRoute implements ng.IDirective {
            public templateUrl = '/Angular/Components/Routes/Accuracy/Examination/AccuracyExamRoute.html';
            public restrict = 'E';
            public controller = AccuracyExamRouteController;
            public controllerAs: string = 'vm';

            //Return directive as factory to make available
            static factory(): ng.IDirectiveFactory {
                const directive = () => { return new AccuracyExamRoute(); };
                return directive;
            }
        }

        //Controller
        export class AccuracyExamRouteController {
            static $inject = ['DocumentService', '$sce', 'username', '$uibModal','CacheFactoryService'];

            Document: any
            DocumentURL: string
            Error: boolean|string

            constructor(
                private DocumentService: Services.DocumentService,
                private $sce : any,
                private username: string,
                private $uibModal: ng.ui.bootstrap.IModalService,
                private CacheFactoryService: Services.CacheFactoryService
            ) {
                let vm = this
                vm.GetNextFromAccuracyQueue()
            }
            

            /**
             * Get the next document from the accuracy queue
             */
            GetNextFromAccuracyQueue() {
                let vm = this
                vm.DocumentService.GetNextFromAccuracyQueue().then((res) => {
                    vm.Document = res
                    vm.DocumentURL = vm.$sce.trustAsResourceUrl(res.DocUrl)
                    console.log(vm.Document)
                })
            }//end GetNextFromAccuracyQueue


            /**
             * Approve a document if its the correct type
             */
            ApproveDoc() {
                let vm = this
                vm.Error = false

                //Repackage the data in the structure the API needs
                let payload = {
                    userId      : vm.username,
                    docGuid     : vm.Document.DocGuid,
                    acceptAs    : vm.Document.DocName,
                    notes       : '',
                    reRequest   : false
                }

                //Make post request to service
                vm.DocumentService.ApproveDoc(vm.Document.LoanNumber, payload).then(
                    //Success
                    (res) => {
                        vm.GetNextFromAccuracyQueue() //Get next
                    },
                    //Error
                    (res) => {
                        vm.Error = "Error approving document, please try again later."
                    }
                )
            }//end ApproveDoc


            /**
             * Launch doc approval modal
             */
            ModalApproveAs() {
                let vm = this
                vm.CacheFactoryService.ModalApproveAs =  vm.$uibModal.open({
                    component: 'DocumentApproveAs',
                    size: 'md'
                });
                //Attach model data to the modal instance
                vm.CacheFactoryService.ModalApproveAs.data = vm.Document

                //Now watch for the promise that returns when the modal is closed or submitted
                vm.CacheFactoryService.ModalApproveAs.result.then(
                    //Submitted successfully
                    (res) => {
                        console.log('Modal Submitted Successfully: ', res)
                        vm.GetNextFromAccuracyQueue()
                    },
                    //Closed/dismissed
                    (res) => {
                        console.log('Dismiss',res)
                    }
                );
            }//end modalApprove


        }
    }
}