namespace Sunrise {
    export namespace Directives {
        export class CommunicationRoute implements ng.IDirective {
            public templateUrl = '/Angular/Components/Routes/Communication/CommunicationRoute.html';
            public restrict = 'E';
            public controller = CommunicationRouteController;
            public controllerAs: string = "vm";

            //Return directive as factory to make available
            static factory(): ng.IDirectiveFactory {
                const directive = () => { return new CommunicationRoute(); };
                return directive;
            }
        }

        //Controller
        export class CommunicationRouteController {
            static $inject = ["$scope"];

            constructor() {
            }

        }



    }
}

