$(document).ready(function(){

  // 'SIGN IN' button (show - login UI) [default]
  $(".sign_in_show").click(function(){
    $(".check_show").css({backgroundColor: "#eaeaea", color : "#333"});
    $(this).css({backgroundColor: "#333", color : "white"});
    $("#member_wrap").hide(0);
    $("#non_member_wrap").hide(0);
    $("#member_wrap").show(500);
    $(".non_member > div:nth-of-type(1) input").css({border : ""});
    $("#check_password:password").css({border : ""});
    $(".non_member > div:nth-of-type(1) input").val("");
    $("#check_password:password").val("");
    $("#check_password:text").val("");
    $(".non_member_text").remove();
    $(".change_btn2").prop("checked", false);
  });

  // 'NON-MEMBER CHECK' button (show - Check UI)
  $("#non_member_wrap").hide(0);
  $(".check_show").click(function(){
    $(".sign_in_show").css({backgroundColor: "#eaeaea", color : "#333"});
    $(this).css({backgroundColor: "#333", color : "white"});
    $("#non_member_wrap").hide(0);
    $("#member_wrap").hide(0);
    $("#non_member_wrap").show(500);
    $("#login_id:text").css({border : ""});
    $("#login_password:password").css({border : ""});
    $("#login_id:text").val("");
    $("#login_password:password").val("");
    $("#login_password:text").val("");
    $(".member_text").remove();
    $(".change_btn1").prop("checked", false);
  });

  // *** Member 'SIGN IN' - [focus] ***
    // ID - [focus]
  $(".member > div:nth-of-type(1) > input:text").focusin(function() {
    $(this).css({border : "2px solid #666"});
    $(".member > legend").css({color : "#444", fontWeight : "bold", letterSpacing : "normal"});
  }).focusout(function(){
    $(this).css({border : "1px solid #777"});
    $(".member > legend").css({color : "#333", fontWeight : "1", letterSpacing : "2px"});
  });
    // PASSWORD - [focus]
  $(".member > div:nth-of-type(2) > input:password").focusin(function() {
    $(this).css({border : "2px solid #666"});
    $(".member > legend").css({color : "#444", fontWeight : "bold",  letterSpacing : "normal"});
  }).focusout(function(){
    $(this).css({border : "1px solid #777"});
    $(".member > legend").css({color : "#333", fontWeight : "1", letterSpacing : "2px"});
  });

  // Member-Password - 'show & hide'
  $(".change_btn1").click(function(){
    if ($("#login_password").attr("type") == "password") {
      $("#login_password").attr("type", "text");
    }
    else {
      $("#login_password").attr("type", "password");
    }
  });
 
  // Member - [submit button]
  $(".sign1").click(function() {
    // SIGN IN
    if (($("#login_id:text").val() == "") && ($("#login_password:password").val() == "")) { 
      $("#login_id:text").css({border : ""});
      $("#login_id:text").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $("#login_password:password").css({border : ""});
      $("#login_password:password").css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $(".member > legend").css({color : "crimson", fontWeight : "bold"});
      $(".member_text").remove();
      $(".member").before("<div class='member_text'>* Please typing your <strong><u>ID</u></strong> & <strong><u>PASSWORD</u></strong> !</div");
      $(".member_text").css({color: "crimson", fontSize: "18px", fontStyle: "italic", margin: "20px 100px 0 0", letterSpacing: "2px"});
      $(".member_text").hide(0);
      $(".member_text").show(500);
      return false;
    }
    else if (($("#login_id:text").val() == "")) {
      $("#login_id:text").css({border : ""});
      $("#login_id:text").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $(".member > legend").css({color : "crimson", fontWeight : "bold"});
      $(".member_text").remove();
      $(".member").before("<div class='member_text'>* Please typing your <strong><u>ID</u></strong> !</div");
      $(".member_text").css({color: "crimson", fontSize: "18px", fontStyle: "italic", margin: "20px 100px 0 0", letterSpacing: "2px"});
      $(".member_text").hide(0);
      $(".member_text").show(500);
      return false;
    }
    else if (($("#login_password:password").val() == "")) {
      $("#login_password:password").css({border : ""});
      $("#login_password:password").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $(".member > legend").css({color : "crimson", fontWeight : "bold"});
      $(".member_text").remove();
      $(".member").before("<div class='member_text'>* Please typing your <strong><u>PASSWORD</u></strong> !</div");
      $(".member_text").css({color: "crimson", fontSize: "18px", fontStyle: "italic", margin: "20px 100px 0 0", letterSpacing: "2px"});
      $(".member_text").hide(0);
      $(".member_text").show(500);
      return false;
    }
    else if (($("#login_password:text").val() == "")) {
      $("#login_password:text").css({border : ""});
      $("#login_password:text").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $(".member > legend").css({color : "crimson", fontWeight : "bold"});
      $(".member_text").remove();
      $(".member").before("<div class='member_text'>* Please typing your <strong><u>PASSWORD</u></strong> !</div");
      $(".member_text").css({color: "crimson", fontSize: "18px", fontStyle: "italic", margin: "20px 100px 0 0", letterSpacing: "2px"});
      $(".member_text").hide(0);
      $(".member_text").show(500);
      return false;
    }
    else {
      $("#login_id:text").css({border : ""});
      $("#login_password:password").css({border : ""});
      $("#login_id:text").val("");
      $("#login_password:password").val("");
      $("#login_password:text").val("");
      $(".member_text").remove();
      return false;
    }
  });

  // *** Non-Member 'CHECK' - [focus] ***
    // TEL - [focus]
  $(".non_member > div:nth-of-type(1) > input:nth-of-type(1)").focusin(function() {
    $(this).css({border : "2px solid #666"});
    $(".non_member > legend").css({color : "#444", fontWeight : "bold", letterSpacing : "normal"});
  }).focusout(function(){
    $(this).css({border : "1px solid #777"});
    $(".non_member > legend").css({color : "#333", fontWeight : "1", letterSpacing : "2px"});
  });
  $(".non_member > div:nth-of-type(1) > input:nth-of-type(2)").focusin(function() {
    $(this).css({border : "2px solid #666"});
    $(".non_member > legend").css({color : "#444", fontWeight : "bold", letterSpacing : "normal"});
  }).focusout(function(){
    $(this).css({border : "1px solid #777"});
    $(".non_member > legend").css({color : "#333", fontWeight : "1", letterSpacing : "2px"});
  });
  $(".non_member > div:nth-of-type(1) > input:nth-of-type(3)").focusin(function() {
    $(this).css({border : "2px solid #666"});
    $(".non_member > legend").css({color : "#444", fontWeight : "bold", letterSpacing : "normal"});
  }).focusout(function(){
    $(this).css({border : "1px solid #777"});
    $(".non_member > legend").css({color : "#333", fontWeight : "1", letterSpacing : "2px"});
  });
    // PASSWORD - [focus]
    $(".non_member > div:nth-of-type(2) > input:password").focusin(function() {
      $(this).css({border : "2px solid #666"});
      $(".non_member > legend").css({color : "#444", fontWeight : "bold", letterSpacing : "normal"});
    }).focusout(function(){
      $(this).css({border : "1px solid #777"});
      $(".non_member > legend").css({color : "#333", fontWeight : "1", letterSpacing : "2px"});
    });

  // Member-Password - 'show & hide'
  $(".change_btn2").click(function(){
    if ($("#check_password").attr("type") == "password") {
      $("#check_password").attr("type", "text");
    }
    else {
      $("#check_password").attr("type", "password");
    }
  });
  
  // Non-member - [submit button]
  $(".sign2").click(function() {
    // SIGN IN
    if (($(".non_member > div:nth-of-type(1) input").val() == "") && ($("#check_password:password").val() == "")) { 
      $(this).css({border : ""});
      $(".non_member > div:nth-of-type(1) input:nth-of-type(1)").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $(".non_member > div:nth-of-type(1) input:nth-of-type(2)").css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $(".non_member > div:nth-of-type(1) input:nth-of-type(3)").css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $("#check_password:password").css({border : ""});
      $("#check_password:password").css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $(".non_member > legend").css({color : "crimson", fontWeight : "bold"});
      $(".non_member_text").remove();
      $(".non_member").before("<div class='non_member_text'>* Please typing your <strong><u>TEL</u></strong> & <strong><u>PASSWORD</u></strong> !</div>");
      $(".non_member_text").css({color: "crimson", fontSize: "18px", fontStyle: "italic", margin: "20px 100px 0 0", letterSpacing: "2px"});
      $(".non_member_text").hide(0);
      $(".non_member_text").show(500);
      return false;
    }
    else if (($(".non_member > div:nth-of-type(1) input:nth-of-type(1)").val() == "")) {
      $(".non_member > div:nth-of-type(1) input:nth-of-type(1)").css({border : ""});
      $(".non_member > div:nth-of-type(1) input:nth-of-type(1)").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $(".non_member > legend").css({color : "crimson", fontWeight : "bold"});
      $(".non_member_text").remove();
      $(".non_member").before("<div class='non_member_text'>* Please typing your <strong><u>First TEL</u> Number</strong> !</div");
      $(".non_member_text").css({color: "crimson", fontSize: "18px", fontStyle: "italic", margin: "20px 100px 0 0", letterSpacing: "2px"});
      $(".non_member_text").hide(0);
      $(".non_member_text").show(500);
      return false;
    }
    else if (($(".non_member > div:nth-of-type(1) input:nth-of-type(2)").val() == "")) {
      $(".non_member > div:nth-of-type(1) input:nth-of-type(2)").css({border : ""});
      $(".non_member > div:nth-of-type(1) input:nth-of-type(2)").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $(".non_member > legend").css({color : "crimson", fontWeight : "bold"});
      $(".non_member_text").remove();
      $(".non_member").before("<div class='non_member_text'>* Please typing your <strong><u>Middle TEL</u> Number</strong> !</div");
      $(".non_member_text").css({color: "crimson", fontSize: "18px", fontStyle: "italic", margin: "20px 100px 0 0", letterSpacing: "2px"});
      $(".non_member_text").hide(0);
      $(".non_member_text").show(500);
      return false;
    }
    else if (($(".non_member > div:nth-of-type(1) input:nth-of-type(3)").val() == "")) {
      $(".non_member > div:nth-of-type(1) input:nth-of-type(3)").css({border : ""});
      $(".non_member > div:nth-of-type(1) input:nth-of-type(3)").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $(".non_member > legend").css({color : "crimson", fontWeight : "bold"});
      $(".non_member_text").remove();
      $(".non_member").before("<div class='non_member_text'>* Please typing your <strong><u>Last TEL</u> Number</strong> !</div");
      $(".non_member_text").css({color: "crimson", fontSize: "18px", fontStyle: "italic", margin: "20px 100px 0 0", letterSpacing: "2px"});
      $(".non_member_text").hide(0);
      $(".non_member_text").show(500);
      return false;
    }
    else if (($("#check_password:password").val() == "")) {
      $("#check_password:password").css({border : ""});
      $("#check_password:password").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $(".non_member > legend").css({color : "crimson", fontWeight : "bold"});
      $(".non_member_text").remove();
      $(".non_member").before("<div class='non_member_text'>* Please typing your <strong><u>PASSWORD</u></strong> !</div");
      $(".non_member_text").css({color: "crimson", fontSize: "18px", fontStyle: "italic", margin: "20px 100px 0 0", letterSpacing: "2px"});
      $(".non_member_text").hide(0);
      $(".non_member_text").show(500);
      return false;
    }
    else if (($("#check_password:text").val() == "")) {
      $("#check_password:text").css({border : ""});
      $("#check_password:text").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $(".non_member > legend").css({color : "crimson", fontWeight : "bold"});
      $(".non_member_text").remove();
      $(".non_member").before("<div class='non_member_text'>* Please typing your <strong><u>PASSWORD</u></strong> !</div");
      $(".non_member_text").css({color: "crimson", fontSize: "18px", fontStyle: "italic", margin: "20px 100px 0 0", letterSpacing: "2px"});
      $(".non_member_text").hide(0);
      $(".non_member_text").show(500);
      return false;
    }
    else {
      $(".non_member > div:nth-of-type(1) input").css({border : ""});
      $("#check_password:password").css({border : ""});
      $(".non_member > div:nth-of-type(1) input").val("");
      $("#check_password:password").val("");
      $("#check_password:text").val("");
      $(".non_member_text").remove();
      return false;
    }
  });
});