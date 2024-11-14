$(document).ready(function(){
    //$('#main_box').click(function(){
      // alert('you clicked the main box!');  
       //comment this out when you have figured out what event.stopPropagation is used for
  //  })
    $('.mini_boxes').click(function(event){
       event.stopPropagation();
//  $(this).parent().css('background', "url("+$(this).attr("src")+")");
   $(this).parent().css({"background" : "url("+$(this).attr("src")+")","background-repeat": "no-repeat"});
    })
    //, "width":"2000px", "height":"800px"
 });