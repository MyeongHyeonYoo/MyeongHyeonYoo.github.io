$(document).ready(function(){

  // *** add tag : <div> & notification text </div> ***

  // Id
  $(".id").after("<div class='id_text'>* Please typing your <strong>ID</strong>.</div");
  $(".id_text").css({color: "crimson", fontSize: "17px", fontStyle: "italic", margin: "-25px 0 0 320px", letterSpacing: "1px"});
  $(".id_text").hide(0);

  // Password
  $(".password").after("<div class='password_text'>* Please typing<br>&nbsp;your <strong>PASSWORD</strong>.</div");
  $(".password p:nth-of-type(1)").append("<input type='checkbox' class='change_btn>");
  $(".password p:nth-of-type(2)").after("<input type='checkbox' class='change_btn>");
  $(".password_text").css({color: "crimson", fontSize: "17px", fontStyle: "italic", margin: "-80px 0 0 400px", letterSpacing: "1px", lineHeight : "30px"});
  $(".password_text").hide(0);

  // Gender
  $(".gender").after("<div class='gender_text'>* Please select your <strong>gender</strong>.</div");
  $(".gender_text").css({color: "crimson", fontSize: "17px", fontStyle: "italic", margin: "-50px 0 0 240px", letterSpacing: "1px", lineHeight : "30px"});
  $(".gender_text").hide(0);
  $(".gender :radio").wrap("<span class='gender_wrap'></span>");
  $(".gender_wrap").css({border: "1px solid transparent", backgroundColor: "transparent"});


  // Name
  $(".name").after("<div class='name_text'>* Please typing<br>&nbsp;your <strong>Name</strong>.</div");
  $(".name_text").css({color: "crimson", fontSize: "17px", fontStyle: "italic", margin: "-80px 0 0 400px", letterSpacing: "1px", lineHeight : "30px"});
  $(".name_text").hide(0);

  // birth
  $(".birth").after("<div class='birth_text'>* Please select<br>&nbsp;your <strong>Birth</strong>.</div");
  $(".birth_text").css({color: "crimson", fontSize: "17px", fontStyle: "italic", margin: "-75px 0 0 445px", letterSpacing: "1px", lineHeight : "30px"});
  $(".birth_text").hide(0);

  // tel
  $(".tel").after("<div class='tel_text'>* Please typing<br>&nbsp;your <strong>Tel</strong>.</div");
  $(".tel_text").css({color: "crimson", fontSize: "17px", fontStyle: "italic", margin: "-75px 0 0 340px", letterSpacing: "1px", lineHeight : "30px"});
  $(".tel_text").hide(0);

  // address
  $(".address").after("<div class='address_text'>* Please typing your <strong>Address</strong>.</div");
  $(".address_text").css({color: "crimson", fontSize: "17px", fontStyle: "italic", margin: "-20px 0 0 250px", letterSpacing: "1px", lineHeight : "30px"});
  $(".address_text").hide(0);
  

  // ***** Function *****
    
  // [separate function] _
  
  
  // id - [focus]
  $(".id :text").focusin(function() {
    $(".id > legend").css({fontWeight : "bold"});
  }).focusout(function(){
    $(".id > legend").css({fontWeight : ""});
  });

  // password - [focus]
  $(".password > p:nth-of-type(1) > input:password").focusin(function() {
    $(".password > legend").css({fontWeight : "bold"});
  }).focusout(function(){
    $(".password > legend").css({fontWeight : ""});
  });
  $(".password > p:nth-of-type(2) > input:password").focusin(function() {
    $(".password > legend").css({fontWeight : "bold"});
  }).focusout(function(){
    $(".password > legend").css({fontWeight : ""});
  });

   // password - 'show & hide'
   $(".change_btn1").click(function(){
    if ($("#input_password").attr("type") == "password") {
      $("#input_password").attr("type", "text");
    }
    else {
      $("#input_password").attr("type", "password");
    }
  });
  $(".change_btn2").click(function(){
    if ($("#input_re_password").attr("type") == "password") {
      $("#input_re_password").attr("type", "text");
    }
    else {
      $("#input_re_password").attr("type", "password");
    }
  });

  // Gender - [sellect]
  $(".gender :radio").change(function(){
    $(".gender > label").css({color: "", fontWeight : ""});
    $("label[for=" + $(this).attr("id") + "]").css({color: "darkblue", fontWeight : "bold"});
    if ($(".gender_wrap:nth-of-type(1) :radio").val() == "male" && ($(".gender_wrap:nth-of-type(1) :radio").prop("checked")) == true) {
      $(".gender_wrap").css({border: "1px solid transparent", backgroundColor: "transparent"});
      $(".gender_wrap:nth-of-type(1)").css({border: "1px solid transparent", backgroundColor: "crimson"});
    }
    else if ($(".gender_wrap:nth-of-type(2) :radio").val() == "female" && ($(".gender_wrap:nth-of-type(2) :radio").prop("checked")) == true) {
      $(".gender_wrap").css({border: "1px solid transparent", backgroundColor: "transparent"});
      $(".gender_wrap:nth-of-type(2)").css({border: "1px solid transparent", backgroundColor: "crimson"});
    }
  });

  // name - [focus]
  $(".name > div:nth-of-type(1) > input:text").focusin(function() {
    $(".name > legend").css({fontWeight : "bold"});
  }).focusout(function(){
    $(".name > legend").css({fontWeight : ""});
  });
  $(".name > div:nth-of-type(2) > input:text").focusin(function() {
    $(".name > legend").css({fontWeight : "bold"});
  }).focusout(function(){
    $(".name > legend").css({fontWeight : ""});
  });

  // birth - [focus]
  $("#birth_month").click(function() {
    $(".birth > legend").css({fontWeight : ""});
    $(".birth > legend").css({fontWeight : "bold"});
  }).focusout(function(){
    $(".birth > legend").css({fontWeight : ""});
  });
  $("#birth_day").focusin(function() {
    $(".birth > legend").css({fontWeight : ""})
    $(".birth > legend").css({fontWeight : "bold"});
  }).focusout(function(){
    $(".birth > legend").css({fontWeight : ""});
  });
  $("#birth_year").focusin(function() {
    $(".birth > legend").css({fontWeight : ""})
    $(".birth > legend").css({fontWeight : "bold"});
  }).focusout(function(){
    $(".birth > legend").css({fontWeight : ""});
  });
  

  // tel - [focus]
  $(".tel > input:nth-of-type(1)").focusin(function() {
    $(".tel > legend").css({fontWeight : "bold"});
  }).focusout(function(){
    $(".tel > legend").css({fontWeight : ""});
  });
  $(".tel > input:nth-of-type(2)").focusin(function() {
    $(".tel > legend").css({fontWeight : "bold"});
  }).focusout(function(){
    $(".tel > legend").css({fontWeight : ""});
  });
  $(".tel > input:nth-of-type(3)").focusin(function() {
    $(".tel > legend").css({fontWeight : "bold"});
  }).focusout(function(){
    $(".tel > legend").css({fontWeight : ""});
  });

  // address - [focus]
  $(".address > div:nth-of-type(1) :text").focusin(function() {
    $(".address > legend").css({fontWeight : "bold"});
  }).focusout(function(){
    $(".address > legend").css({fontWeight : ""});
  });
  $(".address > div:nth-of-type(2) :text").focusin(function() {
    $(".address > legend").css({fontWeight : "bold"});
  }).focusout(function(){
    $(".address > legend").css({fontWeight : ""});
  });

  $(".gender .gender_wrap:nth-of-type(1) :radio").css({border : "1px solid blue"});

  // all - [last submit button]
  $("#sign_in").submit(function() {
    // id
    if ($(".id :text").val() == "") { 
      $(".id :text").css({border : ""});
      $(".id :text").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
      $(".id > legend").css({fontWeight : "bold"});
      $(".id_text").hide(0);
      $(".id_text").show(500);
      return false;
    }
    // password
    else if ($(".password > p:nth-of-type(1) > input:password").val() == "" || $(".password > p:nth-of-type(2) > input:password").val() == "") {
      $(".password :password").css({border : "1px solid crimson"});
      if ($(".password > p:nth-of-type(1) > input:password").val() == "") {
        $(".password > p:nth-of-type(1) > input:password").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
        $(".password > p:nth-of-type(2) > input:password").css({border : "1px solid #555"});
        $(".password_text").hide(0);
        $(".password_text").show(500);
        $(".id :text").css({border : "1px solid #555"});
        $(".id_text").hide(0);
      }
      else {
        $(".password > p:nth-of-type(2) > input:password").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
        $(".password > p:nth-of-type(1) > input:password").css({border : "1px solid #555"});
        $(".password_text").hide(0);
        $(".password_text").show(500);
        $(".id :text").css({border : "1px solid #555"});
        $(".id_text").hide(0);
      }
      return false;
    }
    // gender
    else if ((($(".gender .gender_wrap:nth-of-type(1) :radio").prop("checked")) == false) && (($(".gender .gender_wrap:nth-of-type(2) :radio").prop("checked"))  == false)) {
      $(".gender :radio").focus();
      $(".gender_text").hide(0);
      $(".gender_text").show(500);
      $(".password > p:nth-of-type(1) > input:password").css({border : "1px solid #555"});
      $(".password > p:nth-of-type(2) > input:password").css({border : "1px solid #555"});
      $(".password_text").hide(0);
      return false;
  }
    
    // name
    else if ($(".name > div:nth-of-type(1) > input:text").val() == "" || $(".name > div:nth-of-type(2) > input:text").val() == "") {
      $(".name :text").css({border : "1px solid crimson"});
      if ($(".name > div:nth-of-type(1) > input:text").val() == "") {
        $(".name > div:nth-of-type(1) > input:text").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
        $(".name > div:nth-of-type(2) > input:text").css({border : "1px solid #555"});
        $(".name_text").hide(0);
        $(".name_text").show(500);
        $(".gender_text").hide(0);
      }
      else {
        $(".name > div:nth-of-type(2) > input:text").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
        $(".name > div:nth-of-type(1) > input:text").css({border : "1px solid #555"});
        $(".name_text").hide(0);
        $(".name_text").show(500);
        $(".gender_text").hide(0);
      }
      return false;
    }
    // birth
    else if ($(".birth > div:nth-of-type(1) :selected").val() == "Select Month" || $(".birth> div:nth-of-type(2) :selected").val() == "Select Day" || $(".birth > div:nth-of-type(3) :selected").val() == "Select Year") {
      $(".birth > div > select").css({border : "1px solid #555"});
      if ($(".birth > div:nth-of-type(1) :selected").val() == "Select Month") {
        $(".birth > div:nth-of-type(1) > select").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
        $(".birth > div:nth-of-type(2) > select").css({border : "1px solid #555"});
        $(".birth > div:nth-of-type(3) > select").css({border : "1px solid #555"});
        $(".birth_text").hide(0);
        $(".birth_text").show(500);
        $(".name > div:nth-of-type(1) > input:text").css({border : "1px solid #555"});
        $(".name > div:nth-of-type(2) > input:text").css({border : "1px solid #555"});
        $(".name_text").hide(0);
        $(".birth > div > select").change(function(){
          $(".birth > div:nth-of-type(1) > select").css({border : "1px solid #555"});
        });
      }
      else if ($(".birth > div:nth-of-type(2) :selected").val() == "Select Day") {
        $(".birth > div:nth-of-type(2) > select").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
        $(".birth > div:nth-of-type(1) > select").css({border : "1px solid #555"});
        $(".birth > div:nth-of-type(3) > select").css({border : "1px solid #555"});
        $(".birth_text").hide(0);
        $(".birth_text").show(500);
        $(".name > div:nth-of-type(1) > input:text").css({border : "1px solid #555"});
        $(".name > div:nth-of-type(2) > input:text").css({border : "1px solid #555"});
        $(".name_text").hide(0);
        $(".birth > div > select").change(function(){
          $(".birth > div:nth-of-type(2) > select").css({border : "1px solid #555"});
        });
      }
      else {
        $(".birth > div:nth-of-type(3) > select").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
        $(".birth > div:nth-of-type(1) > select").css({border : "1px solid #555"});
        $(".birth > div:nth-of-type(2) > select").css({border : "1px solid #555"});
        $(".birth_text").hide(0);
        $(".birth_text").show(500);
        $(".name > div:nth-of-type(1) > input:text").css({border : "1px solid #555"});
        $(".name > div:nth-of-type(2) > input:text").css({border : "1px solid #555"});
        $(".name_text").hide(0);
        $(".birth > div > select").change(function(){
          $(".birth > div:nth-of-type(3) > select").css({border : "1px solid #555"});
        });
      }
      return false;
    }
    // tel
    else if ($(".tel > input:nth-of-type(1)").val() == "" || $(".tel > input:nth-of-type(2)").val() == "" || $(".tel > input:nth-of-type(3)").val() == "") {
      if ($(".tel > input:nth-of-type(1)").val() == "") {
        $(".tel > input:nth-of-type(1)").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
        $(".tel > input:nth-of-type(2)").css({border : "1px solid #555"});
        $(".tel > input:nth-of-type(3)").css({border : "1px solid #555"});
        $(".tel_text").hide(0);
        $(".tel_text").show(500);
        $(".birth > div:nth-of-type(1) > select").css({border : "1px solid #555"});
        $(".birth > div:nth-of-type(2) > select").css({border : "1px solid #555"});
        $(".birth > div:nth-of-type(3) > select").css({border : "1px solid #555"});
        $(".birth_text").hide(0);
      }
      else if ($(".tel > input:nth-of-type(2)").val() == "") {
        $(".tel > input:nth-of-type(2)").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
        $(".tel > input:nth-of-type(1)").css({border : "1px solid #555"});
        $(".tel > input:nth-of-type(3)").css({border : "1px solid #555"});
        $(".tel_text").hide(0);
        $(".tel_text").show(500);
        $(".birth > div:nth-of-type(1) > select").css({border : "1px solid #555"});
        $(".birth > div:nth-of-type(2) > select").css({border : "1px solid #555"});
        $(".birth > div:nth-of-type(3) > select").css({border : "1px solid #555"});
        $(".birth_text").hide(0);
      }
      else {
        $(".tel > input:nth-of-type(3)").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
        $(".tel > input:nth-of-type(1)").css({border : "1px solid #555"});
        $(".tel > input:nth-of-type(2)").css({border : "1px solid #555"});
        $(".tel_text").hide(0);
        $(".tel_text").show(500);
        $(".birth > div:nth-of-type(1) > select").css({border : "1px solid #555"});
        $(".birth > div:nth-of-type(2) > select").css({border : "1px solid #555"});
        $(".birth > div:nth-of-type(3) > select").css({border : "1px solid #555"});
        $(".birth_text").hide(0);
      }
      return false;
    }
    // address
    else if ($(".address > div:nth-of-type(1) :text").val() == "" || $(".address > div:nth-of-type(2) :text").val() == "") {
      if ($(".address > div:nth-of-type(1) :text").val() == "") {
        $(".address > div:nth-of-type(1) :text").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
        $(".address > div:nth-of-type(2) :text").css({border : "1px solid #555"});
        $(".address_text").hide(0);
        $(".address_text").show(500);
        $(".tel > input:nth-of-type(1)").css({border : "1px solid #555"});
        $(".tel > input:nth-of-type(2)").css({border : "1px solid #555"});
        $(".tel > input:nth-of-type(3)").css({border : "1px solid #555"});
        $(".tel_text").hide(0);
      }
      else {
        $(".address > div:nth-of-type(2) :text").focus().css({border : "2px solid crimson", borderRadius : "3px", outline : "none"});
        $(".address > div:nth-of-type(1) :text").css({border : "1px solid #555"});
        $(".address_text").hide(0);
        $(".address_text").show(500);
        $(".tel > input:nth-of-type(1)").css({border : "1px solid #555"});
        $(".tel > input:nth-of-type(2)").css({border : "1px solid #555"});
        $(".tel > input:nth-of-type(3)").css({border : "1px solid #555"});
        $(".tel_text").hide(0);
      }
      return false;
    }
  });
});