/*global $, document, window, setTimeout, navigator, console, location*/
$(document).ready(function () {
    "use strict";
  
    var 
      firstNameError=true,
      lastNameError=true,
      agencyNameError=true,
      companyAddressError=true,
      emailError = true,
      passwordError = true,
      passConfirm = true;
  
    // Detect browser for css purpose
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $(".form form label").addClass("fontSwitch");
    }
  
    // Label effect
    $("input").focus(function () {
      $(this).siblings("label").addClass("active");
    });
  
    // Form validation
    $("input").blur(function () {
      // First Name
      if ($(this).hasClass("firstname")) {
        if ($(this).val().length === 0) {
          $(this)
            .siblings("span.error")
            .text("Please type your first name")
            .fadeIn()
            .parent(".form-group")
            .addClass("hasError");
          firstNameError = true;
        } else if ($(this).val().length > 1 && $(this).val().length <= 3) {
          $(this)
            .siblings("span.error")
            .text("Please type at least 3 characters")
            .fadeIn()
            .parent(".form-group")
            .addClass("hasError");
            firstNameError = true;
        } else {
          $(this)
            .siblings(".error")
            .text("")
            .fadeOut()
            .parent(".form-group")
            .removeClass("hasError");
            firstNameError = false;
        }
      }
       // Last Name
       if ($(this).hasClass("lastname")) {
        if ($(this).val().length === 0) {
          $(this)
            .siblings("span.error")
            .text("Please type your last name")
            .fadeIn()
            .parent(".form-group")
            .addClass("hasError");
          lastNameError = true;
        } else if ($(this).val().length > 1 && $(this).val().length <=3) {
          $(this)
            .siblings("span.error")
            .text("Please type at least 3 characters")
            .fadeIn()
            .parent(".form-group")
            .addClass("hasError");
            lastNameError = true;
        } else {
          $(this)
            .siblings(".error")
            .text("")
            .fadeOut()
            .parent(".form-group")
            .removeClass("hasError");
            lastNameError = false;
        }
      }
       // Agency Name
       if ($(this).hasClass("agencyname")) {
        if ($(this).val().length === 0) {
          $(this)
            .siblings("span.error")
            .text("Please type your agency name")
            .fadeIn()
            .parent(".form-group")
            .addClass("hasError");
          agencyNameError = true;
        } else if ($(this).val().length > 1 && $(this).val().length <=3) {
          $(this)
            .siblings("span.error")
            .text("Please type at least 3 characters")
            .fadeIn()
            .parent(".form-group")
            .addClass("hasError");
            agencyNameError = true;
        } else {
          $(this)
            .siblings(".error")
            .text("")
            .fadeOut()
            .parent(".form-group")
            .removeClass("hasError");
            agencyNameError = false;
        }
      }
       // Company Address
       if ($(this).hasClass("companyaddress")) {
        if ($(this).val().length === 0) {
          $(this)
            .siblings("span.error")
            .text("Please type your company address")
            .fadeIn()
            .parent(".form-group")
            .addClass("hasError");
          companyAddressError = true;
        } else if ($(this).val().length > 1 && $(this).val().length <=3) {
          $(this)
            .siblings("span.error")
            .text("Please type at least 3 characters")
            .fadeIn()
            .parent(".form-group")
            .addClass("hasError");
            companyAddressError = true;
        } else {
          $(this)
            .siblings(".error")
            .text("")
            .fadeOut()
            .parent(".form-group")
            .removeClass("hasError");
            companyAddressError = false;
        }
      }
      // Email
      if ($(this).hasClass("email")) {
        if ($(this).val().length == "") {
          $(this)
            .siblings("span.error")
            .text("Please type your email address")
            .fadeIn()
            .parent(".form-group")
            .addClass("hasError");
          emailError = true;
        } else {
          $(this)
            .siblings(".error")
            .text("")
            .fadeOut()
            .parent(".form-group")
            .removeClass("hasError");
          emailError = false;
        }
      }
  
      // PassWord
      if ($(this).hasClass("pass")) {
        if ($(this).val().length < 8) {
          $(this)
            .siblings("span.error")
            .text("Please type at least 8 charcters")
            .fadeIn()
            .parent(".form-group")
            .addClass("hasError");
          passwordError = true;
        } else {
          $(this)
            .siblings(".error")
            .text("")
            .fadeOut()
            .parent(".form-group")
            .removeClass("hasError");
          passwordError = false;
        }
      }
  
      // PassWord confirmation
      if ($(".pass").val() !== $(".passConfirm").val()) {
        $(".passConfirm")
          .siblings(".error")
          .text("Passwords don't match")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        passConfirm = false;
      } else {
        $(".passConfirm")
          .siblings(".error")
          .text("")
          .fadeOut()
          .parent(".form-group")
          .removeClass("hasError");
        passConfirm = false;
      }
  
      // label effect
      if ($(this).val().length > 0) {
        $(this).siblings("label").addClass("active");
      } else {
        $(this).siblings("label").removeClass("active");
      }
    });
  
    // form switch
    $("a.switch").click(function (e) {
      $(this).toggleClass("active");
      e.preventDefault();
  
      if ($("a.switch").hasClass("active")) {
        $(this)
          .parents(".form-peice")
          .addClass("switched")
          .siblings(".form-peice")
          .removeClass("switched");
      } else {
        $(this)
          .parents(".form-peice")
          .removeClass("switched")
          .siblings(".form-peice")
          .addClass("switched");
          
      }
    });
  
    // Form submit
    $("form.signup-form").submit(function (event) {
      event.preventDefault();
  
      if (
       
        lastNameError==true||
        firstNameError==true||
        companyAddressError==true||
        agencyNameError==true||
        emailError == true ||
        passwordError == true ||
        passConfirm == true
      ) {
        $(".firstname,.lastname,.agencyname,.companyaddress,.name, .email, .pass, .passConfirm").blur();
      } else {
        $(".signup, .login").addClass("switched");
  
        setTimeout(function () {
          $(".signup, .login").hide();
        }, 700);
        setTimeout(function () {
          $(".brand").addClass("active");
        }, 300);
        setTimeout(function () {
          $(".heading").addClass("active");
        }, 600);
        setTimeout(function () {
          $(".success-msg p").addClass("active");
        }, 900);
        setTimeout(function () {
          $(".success-msg a").addClass("active");
        }, 1050);
        setTimeout(function () {
          $(".form").hide();
        }, 700);
      }
    });
  
    // Reload page
    $("a.profile").on("click", function () {
      location.reload(true);
    });
  });
  