namespace Sunrise {
    export namespace Directives {
        export class QualifyRoute implements ng.IDirective {
            public templateUrl = '/Angular/Components/Routes/Qualify/QualifyComponent.html';
            public restrict = 'E';
            public controller = QualifyRouteController;
            public controllerAs: string = "vm";

            //Return directive as factory to make available
            static factory(): ng.IDirectiveFactory {
                const directive = () => { return new QualifyRoute(); };
                return directive;
            }
        }

        //Controller
        export class QualifyRouteController {
            static $inject = ["$scope"];

            constructor() {
            }

        }


    }
}

