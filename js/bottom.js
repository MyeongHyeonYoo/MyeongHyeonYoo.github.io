$(document).ready(function(){

  // bottom 'click(SIGN UP) button' text-inform
  $(".bottom_btn").after("<span class='alert_sing_up'>CLICK THE 'SING UP' !</span>");
  $(".alert_sing_up").append("<span class='add_arrow'>&#10155;</span>");
  $(".add_arrow").css({fontSize: "30px", color: "#ddd", marginLeft: "10px"});
  $(".alert_sing_up").fadeOut(0);
  $(".add_arrow").fadeOut(0);
  $(".bottom_btn").hover(function(){
    $(".alert_sing_up").fadeIn(300);
    $(".add_arrow:not(:animated)").fadeIn(500).animate({marginLeft : "50px"}, 500);
  }, function(){
    $(".alert_sing_up").fadeOut(300);
    $(".add_arrow:not(:animated)").fadeOut(500).animate({marginLeft : "10px"}), 500;
  });
});