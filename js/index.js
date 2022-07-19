$(document).ready(function() {
	$(".fade").css('display', 'none');
	$(".fade").fadeIn(2000);
});

$(".navBar").hover(function(){
  $(this).css("background-color", "#db6b6b");
	}, function(){
  	$(this).css("background-color", "#c92a2a");
  });

$(".skills").on("click",function() {
	$(".flexContainer").css('display', 'none');
	$(".flexContainer").fadeIn(2000);
});
