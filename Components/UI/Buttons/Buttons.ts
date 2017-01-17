namespace Sunrise {
    export namespace Directives {


        //Button that closes the currently active modal
        export class ButtonModalClose implements ng.IDirective {
            static $inject = ['UIService']; 
            public template = '<button type="button" class="close" aria-label="Close" ng-click="close()"> <span aria-hidden="true">&times;</span></button>'
            public restrict = 'E'
            public transclude = true 
            constructor( private UIService) {}
            public link = (scope, element, attributes, UIService) => {
                scope.close = () => { this.UIService.activeModal.dismiss('cancel') }
            }
            static factory(): ng.IDirectiveFactory {
                const directive = (UIService) => { return new ButtonModalClose(UIService); }
                return directive
            }
        }//end ButtonDocApproveAs


        //Button that closes the currently active modal
        export class ButtonModalCancel implements ng.IDirective {
            static $inject = ['UIService'];
            public template = ' <a href="" ng-click="close()" aria-label="Close" class="pull-xs-left">Cancel</a>'
            public restrict = 'E'
            public transclude = true
            constructor(private UIService) { }
            public link = (scope, element, attributes, UIService) => {
                scope.close = () => { this.UIService.activeModal.dismiss('cancel') }
            }
            static factory(): ng.IDirectiveFactory {
                const directive = (UIService) => { return new ButtonModalCancel(UIService); }
                return directive
            }
        }//end ButtonDocApproveAs


    }
}

