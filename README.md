Template_Remote_URL_Access
==========================

This app provides a redirection to remote web Url.And you have access to differents options:   
- `screen positions` : portrait or landscape
- `scrolling` : allow or not scrolling inside app
- `Url` : remote web Url

## File organisation
- `app/` : Folder who contains all application sources. 
    - `./index.html` : The index file, it loads the application and dependencies
    - `./manifest.json` : Kiwapp application manifest
    - `./styles/` :
        - `main.css` : Your css
    - `.favicon.png` : image show inside kiwapp retails launcher.You could change this by another one.
    - `./scripts/` :
        - `app.js` : Our javascript file who contain all mechanics 
        - `vendor.min.js` : Your JavaScript dependencies
- `images/` : Folder who contains all images sources. 

## Make it work

First, you have to upload the app.zip file to the Kiwapp Retail Manager.  
Once is done, some configuration is needed :

- In the `apps`section, find your uploaded application.  
- Then click on the gear and `edit your application`.  
- Here you can upload resources binded to this application. Upload your `images`in an `images/`repository.  
- Once you did, go to the `shops`section, and find your `App Set`.  
- Click on the gear to the right of your application to `Setup app`.  
- You have an interface to customize your own url redirection.
- Click on `Ok` button
- The setup is done ! Test your application downloading it on a device !
## Dependencies

This application is build on top of :

- Kiwapp Library 1.3.1


## About the application

This application is built on top of **Html Js and Kiwapp**, so it's working throught Ajax.

You will find inside this repository :  - `app/` : folder containing app sources
                                        - `images/` : folder containing images externale resources
                                        - `app.zip` : zip file of content App folder, add this zip to your manager.
                                        - `images.zip` : zip file of content image folder , like app.zip . 
 
## Customize images

You just have to replace each images of your choice inside `/images/`.

If yours do not have the same name as ours, do not forget to update the `main.css` contains inside `app/style/main.css`.

## Customize text of application and Upload url

this template give you possibility write Url Redirection.

How to proceed: - Go to `Kiwapp Manager` and log in.
                - Select your `Customer` 
                - Go to `shop` section and select your shop.
                - Select application inside your `App set` and click on the config wheel
                - Now write the redirect url and allow or not scrolle and screen orientation.
