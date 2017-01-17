namespace Sunrise {
    export namespace Directives {
        export class CommunicationExamRoute implements ng.IDirective {
            public templateUrl = '/Angular/Components/Routes/Communication/Examination/CommunicationExamRoute.html';
            public restrict = 'E';
            public controller = CommunicationExamRouteController;
            public controllerAs: string = "vm";

            //Return directive as factory to make available
            static factory(): ng.IDirectiveFactory {
                const directive = () => { return new CommunicationExamRoute(); };
                return directive;
            }
        }

        //Controller
        export class CommunicationExamRouteController {
            static $inject = ["$scope"];

            constructor() {
            }

        }


    }
}