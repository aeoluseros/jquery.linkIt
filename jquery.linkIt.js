/*
 * name: LinkIt
 * author: aeoluseros
 * version: 1.0.0
 * license: MIT
 */


/*shorthand for $(document).ready(function(){}) is $(function(){});
 $(function() {
    // this behaves as if within document.ready
 });
*
* The code
 (function($){
    //some code
 })(jQuery);
* creates an anonymous function and executes it immediately with jQuery being passed in as the arg $.
* All it effectively does is take the code inside the function and execute it like normal, since $ is already
* an alias for jQuery.
*
*/

// In jQuery, the fn property is just an alias to the prototype property. The jQuery identifier (or $) is just a
// constructor function, and all instances created with it, inherit from the constructor's prototype.
// jQuery.fn === jQuery.prototype
(function($){
    $.fn.linkIt = function (options) {
        //alert(this.html());  //this.html() --> the element that call the plug in, which is the <span> element
        //default settings
        var settings = $.extend({   //$.extend: Merge the contents of two or more objects together into the first object.
            //whatever: null   //var object = $.extend({}, object1, object2);
            href:null,
            text:null,
            target:'_self'   //'_blank' will open another window
        },options);

        //alert(settings.whatever)

        //validation
        if(settings.href==null){
            console.log('You need an href option for LinkIt to work');
            return this;
        }

        return this.each(function(){   //each() means this will happen on each element you're attaching the function to, it's like a loop over elements
            var object = $(this);

            if(settings.text == null){
                settings.text = object.text();
            }

            //wrap will wrap whatever you attach to plug-in
            object.wrap('<a target="'+settings.target+'" href="' + settings.href + '"></a>').text(settings.text);
        });

    }
}(jQuery));  /*"jQuery isn't the only framework that uses the $ and undefined variables...
                to make sure that your plugin doesn't collide with other libraries that might use the $ sign,
                it's a best practice to pass jQuery to a self executing function (closure) that maps it to the dollar
                sign so it can't be overwritten by another library in the scope of its execution."*/

/*'document.ready' is a jQuery event, it runs when the DOM is ready, e.g. all elements are there to be found/used,
* but not necessarily all content.
*
* 'window.onload' fires later (or at the same time in the worst/failing cases) when images and such are loaded,
* so if you're using image dimensions for example, you often want to use this instead.*/



















