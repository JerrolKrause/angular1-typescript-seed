namespace Sunrise {
    export namespace Directives {
        export class DocumentApproveAs implements ng.IDirective {
            public templateUrl = '/Angular/Components/UI/Modals/DocumentApproveAs/DocumentApproveAsComponent.html'
            public restrict = 'E'
            public transclude = true 
            public scope: { [key: string]: string } = {
                //'test': '='
            }
            public controller = DocumentApproveAsController;
            public controllerAs = "vm"

            static factory(): ng.IDirectiveFactory {
                const directive = () => { return new DocumentApproveAs(); }
                return directive
            }
        }

        //Component controller
        export class DocumentApproveAsController {
            static $inject = ['CacheFactoryService', 'DocumentService', 'username']; 

            MarkAsDocList : string[]
            Error: boolean | string
            ModalData : any

            constructor(
                private CacheFactoryService,
                private DocumentService,
                private username
            ) {
                let vm = this;
                vm.GetDocumentTypeNameList()
                vm.ModalData = vm.CacheFactoryService.ModalApproveAs.data
            }


            /**
             * Get the list of documents used to Mark As
             */
            GetDocumentTypeNameList() {
                let vm = this
                vm.DocumentService.GetDocumentTypeNameList().then((res) => {
                    vm.MarkAsDocList = res
                })
            }//end GetDocumentTypeNameList


            /**
             * Approve a document if its the correct type
             */
            ApproveAsDoc() {
                let vm = this
                vm.Error = false

                //Repackage the data in the structure the API needs
                let payload = {
                    userId: vm.username,
                    docGuid: vm.CacheFactoryService.ModalApproveAs.data.DocGuid,
                    acceptAs: vm.CacheFactoryService.ModalApproveAs.data.DocName,
                    notes: '',
                    reRequest: false
                }

                //Make post request to service, FIX THIS
                vm.DocumentService.ApproveAsDoc(vm.CacheFactoryService.ModalApproveAs.data.LoanNumber, payload).then(
                    //Success
                    (res) => {
                        vm.CacheFactoryService.ModalApproveAs.close('HTTP Success');
                    },
                    //Error
                    (res) => {
                        vm.Error = "Error approving document, please try again later."
                    }
                )
            }//end ApproveDoc


            /**
             * Close this modal window
             */
            close() {
                let vm = this
                vm.CacheFactoryService.ModalApproveAs.dismiss('cancel')
            }//end close


        }//end DocumentApproveAsController
    }
}

