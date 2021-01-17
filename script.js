// $(function() {$("#open_btn").click(function(){
//     $("#panel").slideToggle("slow");
// });
// })


$("body").delegate(".flip", "click", function(){
	$('.panel').not($(this).next(".panel").slideToggle("slow")).slideUp("slow");
  });

// $("body").delegate('.flip', 'click', function(){
//                     var accordion = $(this);
//                     var accordionContent = accordion.next('.panel');
//                     accordion.toggleClass("open");
//                     accordionContent.slideToggle(500);
// } );
            //   $("body").delegate(function () {
            //     $('.flip').on('click', function(event){
            //         event.preventDefault();
            //         // create accordion variables
            //         var accordion = $(this);
            //         var accordionContent = accordion.next('.panel');
                    
            //         // toggle accordion link open class
            //         accordion.toggleClass("open");
            //         // toggle accordion content
            //         accordionContent.slideToggle(250);
                    
            //     });
            // });