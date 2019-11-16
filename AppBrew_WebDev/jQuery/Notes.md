## jQuery Notes:

Common Methods for adding jQuery can be found on the [jQuery](https://jquery.com/download/) site for the first project the implimentation method used was using the [google](https://developers.google.com/speed/libraries#jquery) CDN method 3.4 

some common uses for jQuery are to allow for fewer code and manipulate Css classes and elements on you webpages. jQuery allows for more brief manupilation of vanilla JS methods on your sites and makes developing with JS alot easier due to the simplified methods which are readily available to you out of the CDN 

Common methods for maniuplating based on classes for easy html or CSS manipulation

```javascript
$(p).css("fontsize", "18px");

$("h1").addClass("big-title margin-50");

$("button").text("Bye Falisha");

$(h3).html("<em>Epstine didn't kill himself</em>")
```

Common attributes are also items which are frequently targeted using jQuery
below are some common examples of attribute selections you might deside to utilize on web applications

```javascript
$("img").attr("src");

$("a").attr("href", "https://www.yahoo.com/epstinedidntkillhimself")
```