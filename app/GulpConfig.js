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
 * The application name (in min case)
 * @type {string}
 */
var appName = "Favorite Website";

/**
 * List the project dependecies you want build
 * Is generally the microbackoffice dependencies
 * The order is important
 * @type {Array}
 */
var projectsDependencies = [
    {
        'project' : '../../app-setup/GulpFile.js',
        'task': 'prod'
    }
];

/**
 * List all libraries js dependencies
 * They will be concat into a vendor.js in the build/js folder
 * The link to vendor.js is already write into the index.html file
 * @type {*[]}
 */
var jsVendors = [
    project + 'src/vendor/kiwapp.js/kiwapp.js'
];

/**
 * List all libraries css dependencies,
 * They will be copied in the build/style folder so you must make a link to them into your index.html file
 * @type {*[]}
 */
var cssVendors = [
];

/**
 * The default port where the application is launched
 * @type {number}
 */
var defaultPort = 8080;

module.exports = {
    urlApi: urlApi,
    appToken: appToken,
    dist: dist,
    project: project,
    projectsDependencies: projectsDependencies,
    jsVendors: jsVendors,
    cssVendors: cssVendors,
    appName: appName,
    defaultPort: defaultPort
};
