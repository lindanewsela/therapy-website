$(document).ready(function(){

 // #abortion
 // 1. toggle color of filter button
 // 2. perform the filter operation
 $("#abortion").click(function(){


var is_selected = $( "#abortion" ).hasClass( "selected" );
if (is_selected) {
  $("#abortion").removeClass("selected");
} else {
  $("#abortion").addClass("selected");
}
	});
});


 // #addictions-and-complusions
 // 1. toggle color of filter button
 // 2. perform the filter operation
 $("#addictions-and-compulsions").click(function(){


var is_selected = $( "#addictions-and-compulsions" ).hasClass( "selected" );
if (is_selected) {
  $("#addictions-and-compulsions").removeClass("selected");
} else {
  $("#addictions-and-compulsions").addClass("selected");
}
	});

// #anger
// 1. toggle color of filter button
 // 2. perform the filter operation
 $("#anger").click(function(){


var is_selected = $( "#anger" ).hasClass( "anger" );
if (is_selected) {
  $("#anger").removeClass("selected");
} else {
  $("#anger").addClass("selected");
}
	});
