namespace Sunrise {
    export namespace Directives {
        export class AccuracyRoute implements ng.IDirective {
            public templateUrl = '/Angular/Components/Routes/Accuracy/AccuracyRoute.html';
            public restrict = 'E';
            public controller = AccuracyRouteController;
            public controllerAs: string = "vm";

            //Return directive as factory to make available
            static factory(): ng.IDirectiveFactory {
                const directive = () => { return new AccuracyRoute(); };
                return directive;
            }
        }

        //Controller
        export class AccuracyRouteController {
            static $inject = ["$scope"];

            constructor() {
            }

        }


    }
}

