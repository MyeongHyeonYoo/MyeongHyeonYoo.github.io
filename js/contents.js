$(document).ready(function(){

  // [top-header (+nav)] 'continue' side menu interface button - show | hide 
  $(".side_bar_button2").fadeOut(0);
  $(window).scroll(function(){
    if($(this).scrollTop() < 250) {
      $(".side_bar_button2").stop().fadeOut(450);
    }
    else {
      $(".side_bar_button2").stop().fadeIn(450);
    }
  });

  // contents - side_Bar
  $(".side_bar_button, .side_bar_button2").click(function(){
    $("#side_bar_right").animate({right: "0"}, 300);
  });
  $(".side_bar_exit").click(function(){
    $("#side_bar_right").animate({right: "-250px"}, 300);
    $("#search").hide();
  });


  // *** [ intro_contents ] ***
  // in_perfumes <h2> 'title'
  $(".in_perfumes > h2").stop().fadeOut(0);
  $(window).scroll(function(){
    if($(this).scrollTop() < 2100) {
      $(".p_title").stop().fadeOut(450);
    }
    else {
      $(".p_title").stop().fadeIn(450);
    }
  });
  // intro perfumes No.1
  $(".per_1").css({marginLeft : "-1400px"});
  $(window).scroll(function(){
    if($(this).scrollTop() < 2100) {
      $(".per_1").stop().animate({marginLeft : "-1400px"});
    }
    else {
      $(".per_1").stop().animate({marginLeft : "150px"}, 700);
    }
  });
  $(".per_1 > p:nth-child(3)").css({width: "800px", margin: "200px"});
  $(".per_1").mouseenter(function(){
    $(".per_1 > img:nth-child(1)").fadeOut(100);
    $(".per_1 > img:nth-child(2)").stop().animate({opacity: "1", width: "800px"}, 1000);
    $(".per_1 > p:nth-child(3)").stop().animate({});
    $(".per_1 > p:nth-child(3)").animate({width: "400px"}, 1000);
  }).mouseleave(function(){ 
    $(".per_1 > img:nth-child(2)").stop().animate({ width: "0"});
    $(".per_1 > img:nth-child(1)").fadeIn(700);
    $(".per_1 > p:nth-child(3)").animate({width: "800px", marginBottom: "20px"},1000);
  });

  // intro perfumes No.2
  $(".per_2").css({marginLeft : "1800px"});
  $(window).scroll(function(){
    if($(this).scrollTop() < 3000) {
      $(".per_2").stop().animate({marginLeft : "1800px"});
    }
    else {
      $(".per_2").stop().animate({marginLeft : "200px"}, 700);
    }
  });
  $(".per_2").mouseenter(function(){
    // $(".per_2 > p:nth-child(1).stop()")
    $(".per_2 > img:nth-child(4)").stop().fadeOut(500, function(){
      $(".per_2 > img:nth-child(3)").delay(500).stop().animate({zIndex: "5"}, 2000, function(){
        $(".per_2 > img:nth-child(2)").delay(500).stop().animate({zIndex: "10"}, 2000, function(){
          $(".per_2 > img:nth-child(3)").delay(2000).stop().animate({zIndex: "15"}, 2000);
        });
      });
    });
  });

  // intro perfumes No.3
  $(".per_3").css({marginLeft : "-1400px"});
  $(window).scroll(function(){
    if($(this).scrollTop() < 3700) {
      $(".per_3").stop().animate({marginLeft : "-1400px"});
    }
    else {
      $(".per_3").stop().animate({marginLeft : "150px"}, 700);
    }
  });
  $(".per_3").mouseenter(function(){
    $(".per_3 > img:nth-child(3)").stop().fadeOut(500, function(){
      $(".per_3 > img:nth-child(2)").delay(500).stop().animate({zIndex: "5"}, 2000, function(){
        $(".per_3 > img:nth-child(1)").delay(500).stop().animate({zIndex: "10"}, 2000);
      });
    });
  });

    // in_perfumes_case <h2> 'title'
  $(".in_perfumes_case > h2").css({opacity : 0});
  $(window).scroll(function(){
    if($(this).scrollTop() < 4500) {
      $(".in_perfumes_case > h2").stop().animate({opacity : 0}, 10);
    }
    else {
      $(".in_perfumes_case > h2").stop().animate({opacity : 1}, 450);
    }
  });

  
  // intro perfumes case
 
  // in_perfumes_case <p> contents & <strong> title
  $(".in_perfumes_case > p > strong").css({opacity : 0});
  $(window).scroll(function(){
    if($(this).scrollTop() < 4700) {
      $(".in_perfumes_case > p > strong").stop().animate({opacity : 0}, 10, function(){
        $(".in_perfumes_case > p").stop().animate({opacity : 0}, 200);
      });
    }
    else {
      $(".in_perfumes_case > p > strong").stop().animate({opacity : 1}, 200, function(){
        $(".in_perfumes_case > p").stop().animate({opacity : 1}, 300);
      });
    }
  });

  $(".case img:nth-child(1), .case img:nth-child(2), .case img:nth-child(3), .case img:nth-child(4)").fadeOut(2000);
  $(".case").mouseenter(function(){
    $(".case img:nth-child(1)").stop().fadeIn(700, function(){
      $(".case img:nth-child(2)").stop().fadeIn(700).animate({marginLeft : "450px"}, 500, function(){
        $(".case img:nth-child(3)").stop().fadeIn(700).animate({marginLeft : "900px"}, 500, function(){
          $(".case img:nth-child(4)").stop().fadeIn(700).animate({marginLeft : "1350px"}, 500);
        }); 
      });
    });
  });

  // *** [ product_collection ] ***
  $(".perfumes").slideDown(0);
  $(".perfumes_case, .lip, .body_home").slideUp(0);

  // product - button_col - 1
  $(".product_btn1").click(function(){
    $(".perfumes, .perfumes_case, .lip, .body_home").slideUp(0);
    $(".prev_btn1").stop().fadeOut(0);
    $(".next_btn1").stop().fadeOut(0);
    $(".perfumes > h3").stop().fadeOut(0);
    $(".perfumes").stop().slideDown(700, function(){
      $(".prev_btn1").stop().fadeIn(450);
      $(".next_btn1").stop().fadeIn(450);
      $(".perfumes > h3").stop().fadeIn(500);
    });
  });

  // product - button_col - 2
  $(".product_btn2").click(function(){
    $(".perfumes, .perfumes_case, .lip, .body_home").slideUp(0);
    $(".prev_btn2").stop().fadeOut(0);
    $(".next_btn2").stop().fadeOut(0);
    $(".perfumes_case > h3").stop().fadeOut(0);
    $(".perfumes_case").stop().slideDown(700, function(){
      $(".prev_btn2").stop().fadeIn(450);
      $(".next_btn2").stop().fadeIn(450);
      $(".perfumes_case > h3").stop().fadeIn(500);
    });
  });

  // product - button_col - 3
  $(".product_btn3").click(function(){
    $(".perfumes, .perfumes_case, .lip, .body_home").slideUp(0);
    $(".lip > h3").stop().fadeOut(0);
    $(".lip").stop().slideDown(700, function(){
      $(".lip > h3").stop().fadeIn(500);
    });
  });

  // product - button_col - 4
  $(".product_btn4").click(function(){
    $(".perfumes, .perfumes_case, .lip, .body_home").slideUp(0);
    $(".prev_btn3").stop().fadeOut(0);
    $(".next_btn3").stop().fadeOut(0);
    $(".libody_homep > h3").stop().fadeOut(0);
    $(".body_home").stop().slideDown(700, function(){
      $(".prev_btn3").stop().fadeIn(450);
      $(".next_btn3").stop().fadeIn(450);
      $(".body_home > h3").stop().fadeIn(500);
    });
  });


  // perfumes 'wrap' [add]
  $(".perfumes").wrap("<div id='perfumes_wrap'></div>");

  // perfumes - box [prev_btn1]
  $(".prev_btn1").click(function(){
    $(".perfumes").css({marginRight: "440px"});
    $(".perfumes:not(:animated)").animate({marginRight: "440px"}, 500, function(){
      $(".perfumes > div:first").appendTo(".perfumes");
    });
  });
  // perfumes - box [next_btn1]
  $(".next_btn1").click(function(){
    $(".perfumes").css({marginRight: "-440px"});
    $(".perfumes:not(:animated)").animate({marginRight: "-440px"}, 500, function(){
      $(".perfumes > div:last").prependTo(".perfumes");
    });
  });

  
  // perfumes_bottom-text
  $(".product1 > span, .product2 > span").fadeOut(0);
  $(".perfumes > div > div").mouseover(function(){
    $(this).find("span:odd").stop().fadeIn(500).css({color: "indianred"});
  }).mouseout(function(){
    $(this).find("span").stop().fadeOut(500);
  }).mouseover(function(){
    $(this).find("span:even").stop().fadeIn(500).css({color: "peru"});
  }).mouseout(function(){
    $(this).find("span").stop().fadeOut(500);
  });
    

  // perfumes_case 'wrap' [add]
  $(".perfumes_case").wrap("<div id='perfumes_case_wrap'></div>");

  // perfumes_case - box [prev_btn2]
  $(".prev_btn2").click(function(){
    $(".perfumes_case").css({marginRight: "440px"});
    $(".perfumes_case:not(:animated)").animate({marginRight: "440px"}, 500, function(){
      $(".perfumes_case > div:first").appendTo(".perfumes_case");
    });
  });
  // perfumes_case - box [next_btn2]
  $(".next_btn2").click(function(){
    $(".perfumes_case").css({marginRight: "-440px"});
    $(".perfumes_case:not(:animated)").animate({marginRight: "-440px"}, 500, function(){
      $(".perfumes_case > div:last").prependTo(".perfumes_case");
    });
  });

  // perfumes_case - images - 1, 2, 3
  $("#image3_case").stop().hover(function(){
    $(".case_1, .case_2, .case_3").fadeOut(0);
    $(".case_2").stop().fadeIn(700, function(){
      $(".case_3").delay(700).stop().fadeIn(700);
    });
  }, function(){
    $(".case_3").stop().fadeOut(500, function(){
      $(".case_2").stop().fadeOut(700, function(){
        $(".case_1").stop().fadeIn(700);
      });
    });
  });


  // lip 'wrap' [add]
  $(".lip").wrap("<div id='lip_wrap'></div>");

  // lip 1 images - 1, 2, 3
  $(".lip_bar1").stop().hover(function(){
    $(".lip1, .lip2, .lip3").fadeOut(0);
    $(".lip2").stop().fadeIn(700, function(){
      $(".lip3").delay(700).stop().fadeIn(700);
    });
  }, function(){
    $(".lip3").stop().fadeOut(500, function(){
      $(".lip2").stop().fadeOut(700, function(){
        $(".lip1").stop().fadeIn(700);
      });
    });
  });

  // lip 2 images - 1, 2, 3
  $(".lip_bar2").stop().hover(function(){
    $(".lip4, .lip5, .lip6").fadeOut(0);
    $(".lip5").stop().fadeIn(700, function(){
      $(".lip6").delay(700).stop().fadeIn(700);
    });
  }, function(){
    $(".lip6").stop().fadeOut(500, function(){
      $(".lip5").stop().fadeOut(700, function(){
        $(".lip4").stop().fadeIn(700);
      });
    });
  });

  // body_home 'wrap' [add]
  $(".body_home").wrap("<div id='body_home_wrap'></div>");

  // perfumes_case - box [prev_btn3]
  $(".prev_btn3").click(function(){
    $(".body_home").css({marginRight: "440px"});
    $(".body_home:not(:animated)").animate({marginRight: "440px"}, 500, function(){
      $(".body_home > div:first").appendTo(".body_home");
    });
  });
  // perfumes_case - box [next_btn3]
  $(".next_btn3").click(function(){
    $(".body_home").css({marginRight: "-440px"});
    $(".body_home:not(:animated)").animate({marginRight: "-440px"}, 500, function(){
      $(".body_home > div:last").prependTo(".body_home");
    });
  });
});