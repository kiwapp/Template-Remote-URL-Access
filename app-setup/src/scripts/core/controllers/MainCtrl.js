'use strict';
/*@ngInject*/
module.exports = function ($scope, appInstanceDataApi, browserUtils, babelfish) {

    var keyAppInstanceData = "app-params-remote-url";

    if(browserUtils.getParameterByName('lang')) {
        // Init the languages settings with the value from the lang key in the url
        babelfish.updateLang(browserUtils.getParameterByName('lang'));
        babelfish.load();
    }

    // Use JSON.stringify and parse, this will be prettify the JSON
    var dataAppInstance = appInstanceDataApi.get(keyAppInstanceData);
    if(dataAppInstance !== undefined && appInstanceDataApi.get(keyAppInstanceData).data !== "") {
        $scope.model = JSON.parse(appInstanceDataApi.get(keyAppInstanceData).data);
    } else {
        $scope.model = {
            scroll: true
        };
    }

    /**
     * Save the data
     */
    $scope.save = function() {

        $scope.configForm.subimtted = true;
        $scope.configForm.$setPristine();
        appInstanceDataApi.save(JSON.stringify($scope.model), keyAppInstanceData);
    };
};
