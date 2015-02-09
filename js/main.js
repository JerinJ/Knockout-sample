define(function (require) {
	var $ = require('jquery');
	var ko = require('knockout');
	var viewModel = {};
	ko.applyBindings(viewModel, $('.mainContainer').get(0));
});