// $(document).ready(function() {
	$(".intro").css('display', 'none');
	$(".intro").fadeIn(2000);

	$(".flexContainer").css('display', 'none');
	$(".flexContainer").fadeIn(2000);

	$(".workGrid").css('display', 'none');
	$(".workGrid").fadeIn(2000);

	$(".sideBarText").animate({borderBottomWidth: "5px"},300,"linear");
// });

$(".navBar").hover(function(){
  $(this).css("background-color", "#db6b6b");
	}, function(){
  	$(this).css("background-color", "#c92a2a");
  });

	$(".navBar").click(function() {
	  $("#main").animate({
	   width: this,
	   height: $("#main").height(), 
	    }, 1500 );
	});


//	$(function() {
//    $( ".skills" ).on( "click", function() {
//      $(".intro").toggleClass( "flexContainer", 1000 );
//    });
//  });

//	$(".item").click(function() {
//    $(".item").addClass("collapse");
//    $(this).removeClass("collapse");    
//});