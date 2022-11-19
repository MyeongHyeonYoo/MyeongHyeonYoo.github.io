$(document).ready(function(){

  // top_menu
  $("#top").append("<div id='login_add'></div>");
  setInterval(function(){
    $("#login_add").css({width: "500px", height: "500px", background : "url"});
    $("#login_add").css({opacity : "0.9"});
  }, 1500);
  
  // Login
  $(".main_login").click(function(){
    window.open("login.html", "","width=700px, height=800px, top=200px, left=200px");
    return false;
  });
  // Join
  $(".main_join").click(function(){
    window.open("join.html", "_blank");
    return false;
  });

  // right_side_button [add]
  $(".side_bar_button").before("<span class='top_side_menu'>&#8499;</span>")
  $(".top_side_menu").hide(); // 'm' button - hide
  setTimeout(function(){
    $(".top_side_menu").stop().show(1000); // 'm' button - show
  }, 500);

  // right_side_button - [show & hide]
  $(".top_side_menu").click(function(){ // 'm' button
    $(".top_side_menu").stop().fadeOut(0); // 'm' button
    $(".side_bar_button").stop().show(700); // "arrow"
  });
  $(".side_bar_button").hover(function(){ // "arrow"
    $(".side_bar_button").stop().show(); // "arrow"
  }, function(){
    $(".side_bar_button").stop().hide(); // "arrow"
    $(".top_side_menu").stop().show(500); // 'm' button
  });
  $("#side_bar_right").mouseover(function(){
    $(".side_bar_button").stop().fadeOut(); // "arrow"
    $(".top_side_menu").stop().fadeOut(); // 'm' button
  }).mouseleave(function(){
    $(".top_side_menu").stop().fadeIn(500); // 'm' button
    $(".top_side_menu").hover(function(){ // 'm' button
      $(".top_side_menu").stop().hide(); // 'm' button
      $(".side_bar_button").stop().fadeIn(500); // "arrow"
    });
  });
  
  // right_side_bar [action]
  $(".side_bar_button").click(function(){
    $("#side_bar_right").animate({right: "0"}, 300);
  });
  $(".side_bar_exit").click(function(){
    $("#side_bar_right").animate({right: "-250px"}, 300);
    $("#search").hide();
  });

 // side menu - Search [show & hide]  
  $(".side_search > ul").fadeOut(0);
  $(".side_search").hover(function(){
    $(".side_search > ul").stop().slideDown(150);
    $("#search").delay(300).stop().show(500);
    $(".search").stop().fadeIn(400);
    return false;
  }, function(){
    $("#search").focusin(function(){
      $(".side_search > ul").stop().slideDown(150);
    }).focusout(function(){
      $(".side_search > ul").stop().slideUp(150);
    });
    $("#search").val("");
    return false;
  });
  
  // search emoji effect
  $("#side_bar_right aside > ul > li:nth-child(2) label").hover(function(){
    $("#side_bar_right aside > ul > li:nth-child(2) label").animate({opacity : "0.75"}, 300);
  }, function(){
    $("#side_bar_right aside > ul > li:nth-child(2) label").animate({opacity : "1"}, 500);
  });

  // side menu - Login [show & hide]
  $(".side_log > .side_login").hide(0);
  $(".side_log").hover(function(){
    $(".side_login").stop().slideDown(400);
      return false;
    }, function(){
      $(".side_login > li > input:text").focusin(function(){
        $(".side_login").stop().slideDown(400);
      }).focusout(function(){
      $(".side_login").stop().slideUp(400);
      }); 
      $(".side_login > li > input:password").focusin(function(){
        $(".side_login").stop().slideDown(400);
      }).focusout(function(){
      $(".side_login").stop().slideUp(400);
      });
      $(".side_login").stop().slideDown(400);
      return false;
  });
  
  // scroll -top(header)
  $(window).scroll(function(){
    if($(this).scrollTop() > 250) {
      $("#top").stop().fadeOut(250);
    }
    else {
      $("#top").stop().fadeIn(450);
    }
  });
});