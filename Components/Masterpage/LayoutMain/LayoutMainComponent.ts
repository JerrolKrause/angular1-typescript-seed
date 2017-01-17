namespace Sunrise {
    export namespace Directives {
        export class LayoutMainComponent implements ng.IDirective {
            
            //Standard directive values
            public templateUrl = '/Angular/Components/Masterpage/LayoutMain/LayoutMainComponent.html';
            public restrict = 'E';
            public controller = LayoutMainComponentController;
            public controllerAs: string = "vm";
            
            //Return directive as factory to make available
            static factory(): ng.IDirectiveFactory {
                const directive = () => { return new LayoutMainComponent(); };
                return directive;
            }
        }

        //Component controller
        export class LayoutMainComponentController {
            constructor(
            ) {
            }

        }//end LayoutMainComponentController
    }
}

