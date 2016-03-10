PortfolioApp.controller('ContactController', ContactController);

ContactController.$inject = ['$http'];

function ContactController($http) {
  var contact = this;
  contact.email = 'julia.pearson@gmail.com';
}