$(document).ready(function() {
	$(".intro").css('display', 'none');
	$(".intro").fadeIn(2000);

	$(".flexContainer").css('display', 'none');
	$(".flexContainer").fadeIn(2000);

	$(".workGrid").css('display', 'none');
	$(".workGrid").fadeIn(2000);

	$(".sideBar").animate({borderBottomWidth: "5px"},300,"linear");
});

$(".navBar").hover(function(){
  $(this).css("background-color", "#db6b6b");
	}, function(){
  	$(this).css("background-color", "#c92a2a");
  });