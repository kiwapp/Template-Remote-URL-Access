/**
 * The url for the api Kiwapp you want use
 * @type {string}
 */
var urlApi = "https://api.kiwapp.com/nosecure/appInstance/";
/**
 * The application token for this application
 * You must have manualy uploaded on the Manager once
 * After that you find the application token in the interface
 * @type {string}
 */
var appToken = "123456";
/**
 * The destination folder you want yours built resources have been
 * @type {string}
 */
var dist = "../build/";

/**
 * The project sources folders
 * @type {string}
 */
var project = "../";

/**
 * The application name
 * @type {string}
 */
var appName = "Favorite Website";

var jsVendors = [
    project + 'src/vendor/kiwapp.js/kiwapp.js'
];

var cssVendors = [
];

/**
 * The default port where the livereload application is launched
 * @type {number}
 */
var defaultPort = 8080;

module.exports = {
    urlApi: urlApi,
    appToken: appToken,
    dist: dist,
    project: project,
    jsVendors: jsVendors,
    cssVendors: cssVendors,
    appName: appName,
    defaultPort: defaultPort
}
