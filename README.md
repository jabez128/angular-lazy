#What is angular-lazy   

angular-lazy is a little but powerful module with a easy directive that can make you lazy load your images in your web page.  

It's released under MIT Licence.   

#Usage    

first,include the angular-lazy file in your page:  

   `<script src='angular-lazy.js'></script>`

secondly,create the module in your application:  

   `var app = angular.module('myapp',['angularLazy']);`
   
thirdly, add the `lazy` directive in your `<img>` element:  
    
    `<img src='alt.png' lazy='actual.png' />`  
    
or you also could use the `ng-src` directive to replace `src` attribute:  

    `<img ng-src='alt.png' lazy='actual.png' />`   
    
It's done, and now enjoy the lazy load magic!   



