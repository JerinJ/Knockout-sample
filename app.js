requirejs.config({
	baseUrl: 'lib',
	paths: {
		main: '../js/main',
		knockout: 'knockout-3.2.0'
	}
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main']);