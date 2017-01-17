/**
   To create a new component:
   1. Use this sample as a reference for the TS and HTML or copy paste another component in the same directory
   2. Add the JS file in index.html
   3. Register Directive in Sunrise.ts with: .directive('sampleComponent', Directives.HeaderComponent.factory())

   - Use the following selector to include in template or route: <sample-component></sample-component>. Note the camel casing.
   - Pay careful attention to the naming convention. They following should use the exact same wording and casing (SampleComponent): .HTML, .TS, Directive Name.
   - Not the folder structure though, that should mirror the html pathing
*/
var Sunrise;
(function (Sunrise) {
    var Directives;
    (function (Directives) {
        //Declare Directive
        var SampleComponent = (function () {
            function SampleComponent() {
                //Standard directive values
                this.templateUrl = '/Angular/Components/SampleComponent.html';
                //public template = '<div>Hello World</div>'
                this.restrict = 'E';
                this.transclude = true; //Allows data to be passed down to the component within the tags, IE <sample-component>Some HTML</sample-component>
                //Pass data down to the component, it will look something like this: <sample-component test="'A String'"></sample-component>
                //That would make a string of "A String" available to the scope variable of this component
                this.scope = {
                    'test': '='
                };
                this.controller = SampleComponentController;
                this.controllerAs = "vm"; //To access the controller and or any of its methods of properties you will need to use this prefix
            }
            //Return directive as factory. Necessary typescript workaround
            SampleComponent.factory = function () {
                var directive = function () { return new SampleComponent(); };
                return directive;
            };
            return SampleComponent;
        }());
        Directives.SampleComponent = SampleComponent;
        //Component controller
        var SampleComponentController = (function () {
            function SampleComponentController(
                //Add depedencies here along with types
                $scope, CacheFactoryService) {
                this.$scope = $scope;
                this.CacheFactoryService = CacheFactoryService;
                //Any actions to perform when this controller is instantiated/invoked should go here
                var vm = this;
                vm.person = 'Havelock Vetinari';
                console.log(vm.$scope.test);
                console.log(vm.CacheFactoryService);
            }
            //Private methods go here
            SampleComponentController.prototype.doCoolStuff = function (url) {
                var vm = this;
                console.log('Doing cool stuff with' + vm.person);
                console.log(url);
            };
            SampleComponentController.$inject = ['$scope', 'CacheFactoryService']; //Depedency injection. Makes these elements available in this controller
            return SampleComponentController;
        }());
        Directives.SampleComponentController = SampleComponentController; //end SampleComponentController
    })(Directives = Sunrise.Directives || (Sunrise.Directives = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=SampleComponent.js.map