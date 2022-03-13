// toggle
$(document).ready(function(){
    $(".p1").click(function(){
        $(".design").hide();
        $(".design").toggle();
        $("#img1").toggle();
        
    

    });

});

$(document).ready(function(){
    $(".p2").click(function(){
        $(".development").toggle();
        $("#img2").toggle();

    });

});

$(document).ready(function(){
    $(".p3").click(function(){
        $(".product").toggle();
        $("#img3").toggle();

    });

});

 $(document).ready(function(){
    $("#img1").click(function(){
         $(".design").toggle();
         $("#img1").toggle();
    

    });

});

 $(document).ready(function(){
     $("#img2").click(function(){
      $(".development").toggle();
        $("#img2").toggle();
    

     });

 });

 $(document).ready(function(){
     $("#img3").click(function(){
        $(".product").toggle();
         $("#img3").toggle();
    

  });

 });


// hover

$(document).ready(function(){
    $("#port").hover(function () {
        $(this).children(".para").fadeToggle(1000, "linear");
      });
      

});


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


