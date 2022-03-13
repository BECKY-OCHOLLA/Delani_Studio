// toggle on design
$(document).ready(function(){
     $(".p1").click(function(){
        $(".p1").hide();
        $(".design").toggle();
        $(".design").show();
        $()
    

     });

 });
 $(".design").click(function(){
     $(".design").hide();
     $(".p1").toggle();

 });

//  toggle on development

 $(document).ready(function(){
     $(".p2").click(function(){
         $(".p2").hide();
         $(".development").toggle();
         $(".development").show();
         $()

     });

 });

 $(".development").click(function(){
    $(".development").hide();
    $(".p2").toggle();

 });

//  toggle on product

 $(document).ready(function(){
    $(".p3").click(function(){
        $(".p3").hide();
        $(".product").toggle();
        $(".product").show();
        $()

    });

});

$(".product").click(function(){
   $(".product").hide();
   $(".p3").toggle();

});


//  hover effect on portfolio

$(document).ready(function(){
    $("#project").hover(function(){
      $(this).children("#graph1").stop().animate({"top":300,"opacity":0.1},700);
      }, function(){
      $(this).children("graph1").stop().animate({"top":0,"opacity":1},400);
    });
  });


// form validation{}


function validate(){
    var name=  document.getElementById("name").value
    var email= document.getElementById("email").value
    var message= document.getElementById("message").value

    if(name==""|| email==""||message==""){
        alert("blank fill the data");
        return false;
    }else{
        alert("Hello" +" " + name + " "+"we have received your message. Thank you for reaching out to us. ")
    }
}