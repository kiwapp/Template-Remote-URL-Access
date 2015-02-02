/*@ngInject*/
module.exports = function () {
    'use strict';

    var provider = {};

    provider.getParameterByName = function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(window.location.href);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    /**
     * this method will return the browser name
     * @returns string : chrome/safari/firefox/ie
     */
    provider.getBrowserName = function getBrowserName() {
        var userAgent = window.navigator.userAgent;

        var browsers = {chrome: /chrome/i, safari: /safari/i, firefox: /firefox/i, ie: /internet explorer/i};

        for (var key in browsers) {
            if (browsers[key].test(userAgent)) {
                return key;
            }
        }

        return 'unknown';
    };

    /**
     * This method will return true if the input type color is available
     * Liste here : http://caniuse.com/#feat=input-color
     * @returns boolean
     */
    provider.inputColorIsAvailable = function inputColorIsAvailable() {

        var browserName = provider.getBrowserName();
        if (browserName === "chrome" || browserName === "firefox" || browserName === "opera") {
            return true;
        }
        return false;
    };

    provider.$get = function() {
    };
    return provider;

};
