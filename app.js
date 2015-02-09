requirejs.config({
    baseUrl: 'lib',
    paths: {
        js: '../js',
        knockout: '../lib/knockout-3.2.0'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['js/main']);