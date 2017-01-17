namespace Sunrise {
    export namespace Directives {
        export class HomeRoute implements ng.IDirective {
            public templateUrl = '/Angular/Components/Routes/Home/HomeComponent.html';
            public restrict = 'E';
            public controller = HomeRouteController;
            public controllerAs: string = "vm";

            //Return directive as factory to make available
            static factory(): ng.IDirectiveFactory {
                const directive = () => { return new HomeRoute(); };
                return directive;
            }
        }

        //Controller
        export class HomeRouteController {
            static $inject = ["$scope"];

            constructor() {
            }

        }


    }
}

