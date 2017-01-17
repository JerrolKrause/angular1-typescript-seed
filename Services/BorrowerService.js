var AgentPortal;
(function (AgentPortal) {
    var Services;
    (function (Services) {
        var BorrowerService = (function () {
            function BorrowerService($rootScope, $http, 
                //private CacheFactoryService: Services.CacheFactoryService,
                //private UserProfileService: Services.UserProfileService,
                loanGuid) {
                this.$rootScope = $rootScope;
                this.$http = $http;
                this.loanGuid = loanGuid;
                var vm = this;
                //Precache all data if a loanGuid is present
                if (loanGuid) {
                }
            }
            BorrowerService.$inject = ['$rootScope', '$http', 'CacheFactoryService', 'UserProfileService', 'loanGuid'];
            return BorrowerService;
        }());
        Services.BorrowerService = BorrowerService;
    })(Services = AgentPortal.Services || (AgentPortal.Services = {}));
})(AgentPortal || (AgentPortal = {}));
//# sourceMappingURL=BorrowerService.js.map