PortfolioApp.controller('ProjectsController',ProjectsController);

function ProjectsController($http) {
  var projects = this;
  
  projects.scrollJavaScript = function(){
    var $target = $("#javascript-breaker");
    $("body").animate({scrollTop: $target.offset().top}, "slow");
  }
  projects.scrollRuby = function(){
    var $target = $("#ruby-breaker");
    $("body").animate({scrollTop: $target.offset().top}, "slow");
  }
  projects.scrollJava = function(){
    var $target = $("#java-breaker");
    $("body").animate({scrollTop: $target.offset().top}, "slow");
  }
  projects.scrollTop = function(){
    var $target = $("#nav-bar");
    $("body").animate({scrollTop: $target.offset().top}, "slow");
  }

  // disabling scroll links
  $(document).ready(function(){
    $('.fake-link').on('click',function(event){
      event.preventDefault();
    });
  });
}


