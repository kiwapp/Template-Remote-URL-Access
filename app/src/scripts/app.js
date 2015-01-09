/**
 * The web app
 */
(function () {

    'use strict';

    var urlConfig = "../config/kiwapp_config.js";

    // Load the configuration for kiwapp (this configuration is generated is store on the device)
    new Kiwapp(urlConfig, function () {
        // Notify to the drive Kiwapp application (iOS or Android) : The DOM is ready (so we remove the device loader)
        Kiwapp.ready();
        // Get from shop data orientation and url values for bloc native rotation and load specific url
        var appInstanceData = Kiwapp.get('instanceParameters')['app-params-remote-url'];
        var orientation = appInstanceData.orientation;
        var url = appInstanceData.url;
        var scrollState = appInstanceData.scroll;
        // bloc device's rotation
        Kiwapp.rotate(orientation);
        Kiwapp.scroll(!!scrollState);
        // load url
        if (url !== "" && url !== undefined) {
            window.location.replace(url);
        } else {
            document.body.classList.add("no-Url");
        }
    });

})(window, window.document, window.app || (window.app = {}));

