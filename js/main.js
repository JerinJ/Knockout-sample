define(function (require) {
	var $ = require('jquery'),
		ko = require('knockout'),
		html = require('text/text!../../knockout/template/demo1.html');

	// Viewmodel here behaves as access variable for html and view
	var viewModel = {};

	// Initalizing
	viewModel.myPage = ko.observable();
	viewModel.userNameLabel = ko.observable();
	viewModel.emailLabel = ko.observable();
	viewModel.passWordLabel = ko.observable();
	viewModel.confirmPasswordLabel = ko.observable();
	viewModel.accessLevelLabel = ko.observable();
	viewModel.userNameValue = ko.observable();
	viewModel.emailValue = ko.observable();
	viewModel.passwordValue = ko.observable();
	viewModel.confirmPasswordValue = ko.observable();
	viewModel.accessLevelValue = ko.observable();

	viewModel.passwordEntered = ko.observable(false);
	viewModel.showSave = ko.observable(false);

	// Default Value
	viewModel.myPage('Login Information');
	viewModel.userNameLabel('User name: ');
	viewModel.emailLabel('Email-id: ');
	viewModel.passWordLabel('Password: ');
	viewModel.confirmPasswordLabel('Confirm Password: ');
	viewModel.accessLevelLabel('Access Level: ');

	ko.computed(function() {
		if(viewModel.passwordValue() && viewModel.passwordValue().length > 0) {
			viewModel.passwordEntered(true);
		}

		if(viewModel.userNameValue() && viewModel.userNameValue().length > 0 && viewModel.emailValue() && viewModel.emailValue().length > 0
			&& viewModel.passwordValue() && viewModel.passwordValue().length > 0
			&& viewModel.confirmPasswordValue() && viewModel.confirmPasswordValue().length > 0) {
			viewModel.showSave(true);
		}
	});

	viewModel.saveInfo = function() {
		window.alert('user name: '+ viewModel.userNameValue() + ' email: '+ viewModel.emailValue() + ' password: ' + viewModel.passwordValue());
	}

	// Add html to conatiner
	$('.mainContainer').append(html);

    //apply bindings
    ko.applyBindings(viewModel, $('.mainContainer').get(0));
});