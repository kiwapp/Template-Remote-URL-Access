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
var appName = "kiwappSetup";

var jsVendors = [
    project + 'src/vendor/angular/angular.min.js',
    project + 'src/vendor/angular-animate/angular-animate.min.js',
    project + 'src/vendor/angular-sanitize/angular-sanitize.min.js',
    project + 'src/vendor/angular-touch/angular-touch.min.js',
    project + 'src/vendor/angular-ui-router/release/angular-ui-router.min.js',
    project + 'src/vendor/moment/moment.js',
    project + 'src/vendor/jquery/dist/jquery.min.js',
    project + 'src/vendor/KiwappAPI_AccessLib/dist/bundle.min.js',
    project + 'src/vendor/pace/pace.min.js',
    project + 'src/vendor/ngBabelfish/dist/bundle.js'
];

var cssVendors = [
    project + 'src/vendor/bootstrap/dist/css/bootstrap.min.css'
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
