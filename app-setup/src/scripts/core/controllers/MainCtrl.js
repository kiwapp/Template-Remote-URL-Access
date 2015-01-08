'use strict';
/*@ngInject*/
module.exports = function ($scope, appInstanceDataApi) {

    var keyAppInstanceData = "app-params-remote-url";
    $scope.model = {};

    // Use JSON.stringify and parse, this will be prettify the JSON
    var dataAppInstance = appInstanceDataApi.get(keyAppInstanceData);
    if(dataAppInstance !== undefined && appInstanceDataApi.get(keyAppInstanceData).data !== "") {
        $scope.model = JSON.parse(appInstanceDataApi.get(keyAppInstanceData).data);
    }

    /**
     * Save the data
     */
    $scope.save = function() {
        $scope.configForm.subimtted = true;
        $scope.configForm.$setPristine();
        appInstanceDataApi.save(JSON.stringify($scope.model), keyAppInstanceData);
    };

    /**
     * Return true if the string is a valid JSON
     * @param str
     * @returns {boolean}
     */
    function isJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
};
