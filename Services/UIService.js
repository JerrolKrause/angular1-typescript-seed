var Sunrise;
(function (Sunrise) {
    var Services;
    (function (Services) {
        var UIService = (function () {
            function UIService() {
                var vm = this;
            }
            UIService.$inject = ['$uibModal'];
            return UIService;
        }());
        Services.UIService = UIService;
    })(Services = Sunrise.Services || (Sunrise.Services = {}));
})(Sunrise || (Sunrise = {}));
