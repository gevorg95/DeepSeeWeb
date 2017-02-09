(function () {
    'use strict';

    angular.module('app')
        .directive('htmlViewer', ['$parse', '$compile', 'Lang', 'Connector', function ($parse, $compile, Lang, Connector) {
            return {
                link: function (scope, element, attrs) {
                    element.removeAttr('html-viewer');
                    element[0].innerHTML = "<iframe style='border: none; width:100%; height:100%;'></iframe>";

                    $compile(element)(scope);
                    var frame = element[0].children[0];

                    scope.showPage = function(url) {
                        $(frame).attr('src', url);
                    };
                }
            }
        }]);

    function HtmlViewerFact(Utils) {
        HtmlViewer.directive = "html-viewer";

        function HtmlViewer($scope) {
            var _this = this;
            var url = 'http://147.178.206.54:57772/csp/healthshare/hsanalytics/mre/plan_details.html?treatment=$$$FILTER';

            this._applyFilter = function(sc, filter) {
                $scope.showPage(url.replace('$$$FILTER', encodeURIComponent(filter.value)));
            }
        }

        return HtmlViewer;
    }

    angular.module('widgets')
        .factory('DSW.Addons.htmlViewer', ['Utils', HtmlViewerFact]);

})();