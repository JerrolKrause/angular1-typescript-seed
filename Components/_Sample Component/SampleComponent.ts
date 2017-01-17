/**
    To create a new component:
    1. Use this sample as a reference for the TS and HTML or copy paste another component in the same directory
    2. Add the JS file in index.html
    3. Register Directive in Sunrise.ts with: .directive('sampleComponent', Directives.HeaderComponent.factory())

    - Use the following selector to include in template or route: <sample-component></sample-component>. Note the camel casing.
    - Pay careful attention to the naming convention. They following should use the exact same wording and casing (SampleComponent): .HTML, .TS, Directive Name.
    - Not the folder structure though, that should mirror the html pathing
*/
namespace Sunrise {
    export namespace Directives {

        //Declare types needed by this component here. ISCScope extends the $scope variable used by this components controller
        //If this is a type needed elsewhere in the app, move this typing to /Angular/Models/models.d.ts which is the universal list
        interface ISCScope extends ng.IScope {
            test: string;
        }

        //Declare Directive
        export class SampleComponent implements ng.IDirective {
            //Standard directive values
            public templateUrl = '/Angular/Components/SampleComponent.html';
            //public template = '<div>Hello World</div>'
            public restrict = 'E';
            public transclude = true //Allows data to be passed down to the component within the tags, IE <sample-component>Some HTML</sample-component>
            //Pass data down to the component, it will look something like this: <sample-component test="'A String'"></sample-component>
            //That would make a string of "A String" available to the scope variable of this component
            public scope: { [key: string]: string } = {
                'test': '='
            };
            public controller = SampleComponentController;
            public controllerAs = "vm";//To access the controller and or any of its methods of properties you will need to use this prefix

            //Return directive as factory. Necessary typescript workaround
            static factory(): ng.IDirectiveFactory {
                const directive = () => { return new SampleComponent(); };
                return directive;
            }
        }

        //Component controller
        export class SampleComponentController {
            static $inject = ['$scope', 'CacheFactoryService']; //Depedency injection. Makes these elements available in this controller

            //Declare variable and their types here
            public person: string

            constructor(
                //Add depedencies here along with types
                private $scope: ISCScope,
                private CacheFactoryService: Services.CacheFactoryService
            ) {
                //Any actions to perform when this controller is instantiated/invoked should go here
                let vm = this;
                vm.person = 'Havelock Vetinari'
                console.log(vm.$scope.test)
                console.log(vm.CacheFactoryService)
            }

            //Private methods go here
            doCoolStuff(url?:string) {
                let vm = this;
                console.log('Doing cool stuff with' + vm.person)
                console.log(url)
            }
            
        }//end SampleComponentController
    }
}

