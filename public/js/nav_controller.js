PortfolioApp.controller('NavController', NavController);

NavController.$inject = ['$http'];

function NavController($http) {
  var nav = this;

  nav.toggle = false;

  nav.whichNav = '';

  nav.secondNav = {
    'projects' : ['WEB DESIGN', 'JAVA', 'RUBY', 'JAVASCIPT'],
    'background' : ['MY EDUCATION', 'TEACHING', 'NON-PROFIT', 'ENGINEERING']
  }

  nav.menuVanish = function(){
    nav.toggle = false
  };

  nav.home = function(){
    $('.nav-text-main').css({'color': '#173e43'});
  };
  nav.reset = function(){
    $('.nav-text-main').css({'color': '#173e43'});
    nav.toggle = false;
  };
  nav.contact = function(){
    $('.nav-text-main').css({'color': '#173e43'});
    $('#contact').css({'color': '#999999'});
    nav.toggle = false;
  };
  nav.projects = function(){
    $('.nav-text-main').css({'color': '#173e43'});
    $('#projects').css({'color': '#999999'});
    nav.toggle = true;
    nav.whichNav = 'projects';
  };
  nav.background = function(){
    $('.nav-text-main').css({'color': '#173e43'});
    $('#background').css({'color': '#999999'});
    nav.toggle = true;
    nav.whichNav = 'background';
  };
}