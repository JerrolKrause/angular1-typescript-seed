namespace Sunrise {
    export namespace Directives {
        export class HeaderComponent implements ng.IDirective {
            
            //Standard directive values
            public templateUrl = '/Angular/Components/Masterpage/Header/HeaderComponent.html';
            public restrict = 'E';
            public controller = HeaderComponentController;
            public controllerAs = "vm";
            public scope = true
            
            //Return directive as factory to make available
            static factory(): ng.IDirectiveFactory {
                const directive = () => { return new HeaderComponent(); };
                return directive;
            }
        }

        

        //Component controller
        export class HeaderComponentController {
            $inject = ['UserService']

            userInfo: IUser

            constructor(
                private UserService
            ) {
                let vm = this
                vm.UserService.GetUserProfile()
                
                vm.userInfo = vm.UserService.GetUserProfile().then((res) => {
                    vm.userInfo = res
                    //console.log(res)
                })


                /**/
                vm.userInfo = vm.UserService.testGetMany().then((res) => {
                    
                })

                vm.userInfo = vm.UserService.testGetMany().then((res) => {
                    //console.log(res)
                })
            }

        }//end HeaderComponentController
    }
}

