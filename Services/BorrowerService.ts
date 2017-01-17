namespace AgentPortal {
    export namespace Services {
        export class BorrowerService {
            static $inject = ['$rootScope', '$http', 'CacheFactoryService', 'UserProfileService', 'loanGuid']
            ccList: string //Holds semicolon separated string of email addresses to cc
            borrowerLookup: any  //Lookup object of borrower data by guid
            constructor(
                private $rootScope: ng.IRootScopeService,
                private $http: ng.IHttpService,
                //private CacheFactoryService: Services.CacheFactoryService,
                //private UserProfileService: Services.UserProfileService,
                private loanGuid: string) {
                let vm = this

                //Precache all data if a loanGuid is present
                if (loanGuid){ 
                 
                }
            }
             


        }
    }
}
