namespace Sunrise {
    export namespace Directives {
        export class QualifyExamRoute implements ng.IDirective {
            public templateUrl = '/Angular/Components/Routes/Qualify/Examination/QualifyExamRoute.html';
            public restrict = 'E';
            public controller = QualifyExamRouteController;
            public controllerAs: string = "vm";

            //Return directive as factory to make available
            static factory(): ng.IDirectiveFactory {
                const directive = () => { return new QualifyExamRoute(); };
                return directive;
            }
        }

        //Controller
        export class QualifyExamRouteController {
            static $inject = ["$scope"];

            constructor() {
            }

        }


    }
}