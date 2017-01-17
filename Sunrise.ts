namespace Sunrise {
    export class App {
        static App: ng.IModule = angular.module('SunriseApp', ['ui.bootstrap', 'ui.router', 'angular-cache', 'ngResource'])

            .value('username', 'jkrause')
            /*
            .value('webApiAddress', webApiAddress)
            .value('currentUser', currentUser)
            .value('username', currentUser)
            .value('signalR', signalR)
            .value('loanGuid', loanGuid)
            */
            
            //Services
            .service('CacheFactoryService', Services.CacheFactoryService)
            .service('UserService', Services.UserService)
            //.service('UIService', Services.UIService)
            .service('DocumentService', Services.DocumentService)
        

            //Route Components
            .directive('homeRoute', Directives.HomeRoute.factory())
            .directive('accuracyRoute', Directives.AccuracyRoute.factory())
            .directive('accuracyExamRoute', Directives.AccuracyExamRoute.factory())
            .directive('qualifyRoute', Directives.QualifyRoute.factory())
            .directive('qualifyExamRoute', Directives.QualifyExamRoute.factory())
            .directive('communicationRoute', Directives.CommunicationRoute.factory())
            .directive('communicationExamRoute', Directives.CommunicationExamRoute.factory())

            //Masterpage Components + Layouts
            .directive('layoutMainComponent', Directives.LayoutMainComponent.factory())
            .directive('headerComponent', Directives.HeaderComponent.factory())
            .directive('footerComponent', Directives.FooterComponent.factory())
            
            //UI Components
            //.directive('buttonModalClose', Directives.ButtonModalClose.factory())
            //.directive('buttonModalCancel', Directives.ButtonModalCancel.factory())

            .directive('documentApprove', Directives.DocumentApprove.factory())
            .directive('documentApproveAs', Directives.DocumentApproveAs.factory())

            .config(function ($stateProvider, $urlRouterProvider) {
            
            // Now set up the states/routes
                $stateProvider
                   
                     .state('LayoutMain', {
                         abstract: true,
                         template: '<layout-main-component/>'
                     })
                          
                    .state('LayoutMain.Home', {
                        url: '/',
                        template: '<home-route/>',
                        metaTitle: 'Home'
                    })

                    .state('LayoutMain.AccuracyDashboard', {
                        url: '/accuracy',
                        template: '<accuracy-route/>',
                        metaTitle: 'Accuracy Dashboard'
                    })
                    .state('LayoutMain.AccuracyExam', {
                        url: '/accuracy/examination',
                        template: '<accuracy-exam-route/>',
                        metaTitle: 'Accuracy Examination Window'
                    })


                    .state('LayoutMain.QualifyDashboard', {
                        url: '/qualify',
                        template: '<qualify-route/>',
                        metaTitle: 'Qualify Dashboard'
                    })
                    .state('LayoutMain.QualifyExam', {
                         url: '/qualify/examination',
                         template: '<qualify-exam-route/>',
                         metaTitle: 'Qualify Examination Window'
                    })


                    .state('LayoutMain.CommunicationDashboard', {
                        url: '/communication',
                        template: '<communication-route/>',
                        metaTitle: 'Communication Dashboard'
                    })
                    .state('LayoutMain.CommunicationExam', {
                        url: '/communication/queue',
                        template: '<communication-exam-route/>',
                        metaTitle: 'Communication Queue'
                    });


                    /*
                    //Single pages
                .state('LayoutStandalone', {
                        abstract: true,
                        templateUrl: 'Angular/Components/Routes/Masterpage/LayoutStandalone.html'
                    })

                        .state('single.search', {
                            url: '/search/',
                            controller: 'SearchController as vm',
                            templateUrl: 'app/Views/Routes/search.html',
                            metaTitle: 'Search'
                        })
                        */



            //Redirect all 404 errors to this page
            $urlRouterProvider.otherwise('/');
            /*
            //Better 404 handling, keeps the URL the same and shows the 404 page
            $urlRouterProvider.otherwise(function ($injector, $location) {
                var state = $injector.get('$state');
                state.go('404', null, {
                    location: false
                });
                return $location.path();
            });
           
              */



            })//end config
           

             /**/
            .run(['$rootScope', '$state', '$templateCache', '$http', function ($rootScope, $state, $templateCache, $http) {

                //Route has changed successfully
                $rootScope.$on('$stateChangeSuccess', function () {
                    //Update the metaTitle based on a value set above
                    $rootScope.metaTitle = $state.current.metaTitle
                });

                //When a state is changing
                $rootScope.$on('$stateChangeStart', function (evt, to, params) {
                   
                    //Allow redirects on a state level
                    if (to.redirectTo) {
                        evt.preventDefault();
                        //$state.go(to.redirectTo, params, { location: 'replace' })
                    }
                });

                /*
                //Preload all HTML templates asynchronously
                angular.forEach($state.get(), function (state, key) {
                    if (state.templateUrl !== undefined && state.preload !== false) {
                        $http.get(state.templateUrl, { cache: $templateCache });
                    }
                });
               */
            }]);//end run
            
             
    }
}