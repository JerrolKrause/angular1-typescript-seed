namespace Sunrise {
    export namespace Services {
        export class DocumentService {
            static $inject = ['CacheFactoryService', '$http']

            constructor(
                private CacheFactoryService: Services.CacheFactoryService,
                private $http: ng.IHttpService
            ) {
                let vm = this
            }


            /**
             * Get the next document from the accuracy queue
             * @param update
             */
            GetNextFromAccuracyQueue(update: boolean = true) {
                let vm = this,
                    url = '/api/Service/GetNextFromAccuracyQueue'
                url = 'Angular/Models/GetNextFromAccuracyQueue.json'//Temp
                return vm.CacheFactoryService.get(url, update)
            }//GetNextFromAccuracyQueue


            /**
             * Get the link to an external doc. Meant for loading into an iframe
             * @param update - Refresh data in cache
             */
            GetExternalDocUrl(loanNumber: number, docGuId: string, update: boolean = true) {
                let vm = this,
                    url = '/api/Service/GetExternalDocUrl/' + loanNumber + '/' + docGuId
                return vm.CacheFactoryService.get(url, update)
            }//GetExternalDocUrl


            /**
             * Get a list of Mark Document as types
             * @param update - Refresh data in cache
             */
            GetDocumentTypeNameList(update: boolean = false) {
                let vm = this,
                    url = '/api/Service/GetDocumentTypeNameList'
                return vm.CacheFactoryService.get(url, update)
            }//GetDocumentTypeNameList



            /**
             * Approve a document since its the correct type
             */
            ApproveDoc(loanNumber: string, document: IApproveDoc) {
                let vm = this,
                    url = '/api/Service/ApproveDoc/' + loanNumber + '/'
                return vm.$http.post(url, document)
            }//end ApproveDoc


            /**
             * Approve a document since its the correct type
             */
            ApproveAsDoc(loanNumber: string, document: IApproveDoc) {
                let vm = this,
                    url = '/api/Service/ApproveDoc/' + loanNumber + '/'
                return vm.$http.post(url, document)
            }//end ApproveDoc


        }
    }
}
