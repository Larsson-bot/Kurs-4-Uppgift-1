  $("body").delegate(".flip", "click", function(){
	$('.panel').not($(this).next(".panel").slideToggle("slow")).slideUp("slow");
  });
    

  
$(document).on('click', ".delete", function(){
  var entry = $(this).parent();        
  entry.remove();  
});
//Tar bara bort paneldelen av objektet.
     