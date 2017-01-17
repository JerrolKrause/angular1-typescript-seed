var Sunrise;
(function (Sunrise) {
    var Services;
    (function (Services) {
        var DocumentService = (function () {
            function DocumentService(CacheFactoryService, $http) {
                this.CacheFactoryService = CacheFactoryService;
                this.$http = $http;
                var vm = this;
            }
            /**
             * Get the next document from the accuracy queue
             * @param update
             */
            DocumentService.prototype.GetNextFromAccuracyQueue = function (update) {
                if (update === void 0) { update = true; }
                var vm = this, url = '/api/Service/GetNextFromAccuracyQueue';
                url = 'Angular/Models/GetNextFromAccuracyQueue.json'; //Temp
                return vm.CacheFactoryService.get(url, update);
            }; //GetNextFromAccuracyQueue
            /**
             * Get the link to an external doc. Meant for loading into an iframe
             * @param update - Refresh data in cache
             */
            DocumentService.prototype.GetExternalDocUrl = function (loanNumber, docGuId, update) {
                if (update === void 0) { update = true; }
                var vm = this, url = '/api/Service/GetExternalDocUrl/' + loanNumber + '/' + docGuId;
                return vm.CacheFactoryService.get(url, update);
            }; //GetExternalDocUrl
            /**
             * Get a list of Mark Document as types
             * @param update - Refresh data in cache
             */
            DocumentService.prototype.GetDocumentTypeNameList = function (update) {
                if (update === void 0) { update = false; }
                var vm = this, url = '/api/Service/GetDocumentTypeNameList';
                return vm.CacheFactoryService.get(url, update);
            }; //GetDocumentTypeNameList
            /**
             * Approve a document since its the correct type
             */
            DocumentService.prototype.ApproveDoc = function (loanNumber, document) {
                var vm = this, url = '/api/Service/ApproveDoc/' + loanNumber + '/';
                return vm.$http.post(url, document);
            }; //end ApproveDoc
            /**
             * Approve a document since its the correct type
             */
            DocumentService.prototype.ApproveAsDoc = function (loanNumber, document) {
                var vm = this, url = '/api/Service/ApproveDoc/' + loanNumber + '/';
                return vm.$http.post(url, document);
            }; //end ApproveDoc
            DocumentService.$inject = ['CacheFactoryService', '$http'];
            return DocumentService;
        }());
        Services.DocumentService = DocumentService;
    })(Services = Sunrise.Services || (Sunrise.Services = {}));
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=DocumentService.js.map