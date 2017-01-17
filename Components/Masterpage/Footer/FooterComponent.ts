namespace Sunrise {
    export namespace Directives {
        export class FooterComponent implements ng.IDirective {
            
            //Standard directive values
            public templateUrl = '/Angular/Components/Masterpage/Footer/FooterComponent.html';
            public restrict = 'E';
            public controller = FooterComponentController;
            public controllerAs: string = "vm";
            
            //Return directive as factory to make available
            static factory(): ng.IDirectiveFactory {
                const directive = () => { return new FooterComponent(); };
                return directive;
            }
        }

        //Component controller
        export class FooterComponentController {
            constructor(
            ) {
            }

        }//end FooterComponentController
    }
}

