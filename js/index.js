$(document).ready(function() {
	$(".intro").css('display', 'none');
	$(".intro").fadeIn(2000);

	$(".flexContainer").css('display', 'none');
	$(".flexContainer").fadeIn(2000);

	$(".workGrid").css('display', 'none');
	$(".workGrid").fadeIn(2000);

	$(".sideBarText").animate({borderBottomWidth: "5px"},300,"linear");

	$( function() {
    $( ".navBar" ).on("click", function() {
      $( "#effect" ).toggleClass( "newClass", 1000 );
    });
  } );
});

$(".navBar").hover(function(){
  $(this).css("background-color", "#db6b6b");
	}, function(){
  	$(this).css("background-color", "#c92a2a");
  });