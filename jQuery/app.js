$(document).ready(function() {

    $("button").click(function() {
        $("div").hide();
    });

    $("#hidemyself").click(function() {
        $(this).hide();
    });

    $(".hideme").click(function() {
        $("#ptohideshow").hide();
    });

    $(".showme").click(function() {
        $("#ptohideshow").show();
    });

    
    $("#toggle").click(function() {
        $("#toggletext").toggle();
    });

   
$("#fade").click(function() {
        $("#fadebox").fadeToggle();
    });

   
    $("#slide").click(function() {
        $("#slidebox").slideToggle();
    });

    
$("#cssbtn").click(function() {
        $("#csstext").css({
            "color": "white",
            "background": "black",
            "padding": "10px"
        });
    });

   
$("#addclassbtn").click(function() {
        $("#classtext").addClass("highlight");
    });

    $("#removeclassbtn").click(function() {
        $("#classtext").removeClass("highlight");
    });

    
    $("#changetextbtn").click(function() {
        $("#textchange").text("Text Changed!");
    });

    $("#changehtmlbtn").click(function() {
        $("#textchange").html("<b>Bold Text Changed!</b>");
    });

   
    $("#getvaluebtn").click(function() {
        alert($("#inputfield").val());
    });

  
    $(".child").click(function() {
        $(this).parent().css("border", "2px solid red");
    });

    
    $("#chainbtn").click(function() {
        $("#chaintext")
            .css("color", "blue")
            .slideUp()
            .slideDown();
    });

});