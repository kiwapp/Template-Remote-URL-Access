'use strict';
/*@ngInject*/
module.exports = function ($scope, appInstanceDataApi) {

    var keyAppInstanceData = "app-params-remote-url";

    // Use JSON.stringify and parse, this will be prettify the JSON
    var dataAppInstance = appInstanceDataApi.get(keyAppInstanceData);
    if(dataAppInstance !== undefined && appInstanceDataApi.get(keyAppInstanceData).data !== "") {
        $scope.model = JSON.parse(appInstanceDataApi.get(keyAppInstanceData).data);
    } else {
        $scope.model = {
            scroll: true,
            orientation: "no"
        };
    }

    /**
     * Save the data
     */
    $scope.save = function() {
        $scope.saveClicked = true;
        // If the form is invalid stop the process
        if($scope.configForm.$invalid) {
            // Scroll to the first element in error
            var firstError = $('input.ng-invalid')[0];
            firstError.focus();

            return;
        }

        $scope.configForm.subimtted = true;
        $scope.configForm.$setPristine();
        appInstanceDataApi.save(JSON.stringify($scope.model), keyAppInstanceData);
    };
};
