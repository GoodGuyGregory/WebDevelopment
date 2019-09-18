## Web Pack

Module Loading: Reads Source files for dependency management with modules from dependency enjection

Concatentation: Combining several files into one to help with load performance

Minificiation: Minification extracts extra code and reduce load time by reducing filesizes

# Webpack Introduction

[Official Documentation](https://webpack.js.org/concepts/)

**Configuration Properties**

[Configuration Docs](https://webpack.js.org/concepts/configuration/)

**Entry:** starting point of your 

**Output:** Where the application is placed once the build tasks have been complete.`path:` is where your build ready for production will be placed `filename` is the name of the bundled  build file

Module: 

**Loaders** Tells modules how to behave in the 


**Common Package.json Scripts**  

```javascript
"scripts": {
    "build": "webpack --optimize-minimize",
    "start": "webpack-dev-server"
  },
```

