PortfolioApp.controller('BackgroundController', BackgroundController);

function BackgroundController() {
  var background = this;

  background.resumeWebsite = false;
  background.resumeTeach = false;
  background.resumeWebsiteHide = true;
  background.resumeTeachHide = true;

  background.resumeWeb = function(){
    background.resumeWebsite = true;
    background.resumeWebsiteHide = false;
    var $target = $("#webResume");
    $("body").animate({scrollTop: $target.offset().top}, "slow");
  }
  background.resumeWebHide = function(){
    background.resumeWebsite = false;
    background.resumeWebsiteHide = true;
  }
  background.resumeTeaching = function(){
    background.resumeTeach = true;
    background.resumeTeachHide = false;
    var $target = $("#teachResume");
    $("body").animate({scrollTop: $target.offset().top}, "slow");
  }
  background.resumeTeachingHide = function(){
    background.resumeTeach = false;
    background.resumeTeachHide = true;
  }

  background.scrollArk = function(){
    window.setTimeout(
      function(){
        var $target = $("#ark-project");
        $("body").animate({scrollTop: $target.offset().top}, "slow");
      }, 400);
  }
  background.scrollCatan = function(){
    window.setTimeout(
      function(){
        var $target = $("#catan-project");
        $("body").animate({scrollTop: $target.offset().top}, "slow");
      }, 400);
  }
  background.scrollTop = function(){
    var $target = $("#nav-bar");
    $("body").animate({scrollTop: $target.offset().top}, "slow");
  }
  background.scrollTeaching = function(){
    var $target = $("#teaching-breaker");
    $("body").animate({scrollTop: $target.offset().top}, "slow");
  }
  background.scrollBussiness = function(){
    var $target = $("#bussiness-breaker");
    $("body").animate({scrollTop: $target.offset().top}, "slow");
  }


  // disabling scroll links
  $(document).ready(function(){
    $('.fake-link').on('click',function(event){
      event.preventDefault();
    });
  });
};