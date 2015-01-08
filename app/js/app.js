/**
 * The web app
 */
(function(win, doc, App){

        var urlConfig = "../config/kiwapp_config.js";
        if(win.APP_DEBUG){
            urlConfig = "assets/kiwapp_config.js";
        }

        // Load the configuration for kiwapp (this configuration is generated is store on the device)
        Kiwapp(urlConfig, function() {
            // Notify to the drive Kiwapp application (iOS or Android) : The DOM is ready (so we remove the device loader)
            Kiwapp.ready();
            // Get from shop data orientation and url values for bloc natif rotation and load specific url
            var orientation = Kiwapp.get('shopParameters').orientation;
            var url = Kiwapp.get('shopParameters').url;
            var scrollState = Kiwapp.get('shopParameters').scroll;
            // bloc rotation of ipad
            Kiwapp.rotate(orientation);
            Kiwapp.scroll(scrollState);
            // load url
            if(url!=="" && url !==undefined) {
                window.location.replace(url);
            } else {
                document.body.classList.add("no-Url")
            }
        });

})(window, window.document, window.app || (window.app = {}));

