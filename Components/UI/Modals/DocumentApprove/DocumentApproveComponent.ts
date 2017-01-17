namespace Sunrise {
    export namespace Directives {
        export class DocumentApprove implements ng.IDirective {
            public templateUrl = '/Angular/Components/UI/Modals/DocumentApprove/DocumentApproveComponent.html'
            public restrict = 'E'
            public transclude = true 
            public scope: { [key: string]: string } = {
                //'test': '='
            }
            public controller = DocumentApproveController;
            public controllerAs = "vm"

            public bindings: {
                $close: '&',
                $dismiss: '&',
                greeting: '<',
                modalData: '<'
            }

            static factory(): ng.IDirectiveFactory {
                const directive = () => { return new DocumentApprove(); }
                return directive
            }
        }

        //Component controller
        export class DocumentApproveController {
            static $inject = ['UIService']; 

            constructor(
                private UIService
            ) {
                let vm = this;
            }



            /**
             * Closes the active modal
             */
            close() {
                let vm = this
                vm.UIService.activeModal.close('cancel');
            }//end close

            

            
        }//end DocumentApproveController
    }
}

