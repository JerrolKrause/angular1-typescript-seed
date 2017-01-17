var Sunrise;
(function (Sunrise) {
    var App = (function () {
        function App() {
        }
        App.App = angular.module('SunriseApp', ['ui.bootstrap', 'ui.router', 'angular-cache', 'ngResource'])
            .value('username', 'jkrause')
            .service('CacheFactoryService', Sunrise.Services.CacheFactoryService)
            .service('UserService', Sunrise.Services.UserService)
            .service('DocumentService', Sunrise.Services.DocumentService)
            .directive('homeRoute', Sunrise.Directives.HomeRoute.factory())
            .directive('accuracyRoute', Sunrise.Directives.AccuracyRoute.factory())
            .directive('accuracyExamRoute', Sunrise.Directives.AccuracyExamRoute.factory())
            .directive('qualifyRoute', Sunrise.Directives.QualifyRoute.factory())
            .directive('qualifyExamRoute', Sunrise.Directives.QualifyExamRoute.factory())
            .directive('communicationRoute', Sunrise.Directives.CommunicationRoute.factory())
            .directive('communicationExamRoute', Sunrise.Directives.CommunicationExamRoute.factory())
            .directive('layoutMainComponent', Sunrise.Directives.LayoutMainComponent.factory())
            .directive('headerComponent', Sunrise.Directives.HeaderComponent.factory())
            .directive('footerComponent', Sunrise.Directives.FooterComponent.factory())
            .directive('documentApprove', Sunrise.Directives.DocumentApprove.factory())
            .directive('documentApproveAs', Sunrise.Directives.DocumentApproveAs.factory())
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
        }) //end config
            .run(['$rootScope', '$state', '$templateCache', '$http', function ($rootScope, $state, $templateCache, $http) {
                //Route has changed successfully
                $rootScope.$on('$stateChangeSuccess', function () {
                    //Update the metaTitle based on a value set above
                    $rootScope.metaTitle = $state.current.metaTitle;
                });
                //When a state is changing
                $rootScope.$on('$stateChangeStart', function (evt, to, params) {
                    //Allow redirects on a state level
                    if (to.redirectTo) {
                        evt.preventDefault();
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
            }]); //end run
        return App;
    }());
    Sunrise.App = App;
})(Sunrise || (Sunrise = {}));
//# sourceMappingURL=Sunrise.js.map