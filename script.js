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


//  hover effect on portfolio(section1)

// $(document).ready(function(){
//     $("#project").hover(function(){
//       $(this).children("#graph1").stop().animate({"top":300,"opacity":0.1},700);
//       }, function(){
//       $(this).children("graph1").stop().animate({"top":0,"opacity":1},400);
//     });
//   });

$("#project").hover(function () {
    $(this).children(".graph1").fadeToggle(1000, "linear");
  });

  $("#project1").hover(function () {
    $(this).children(".graph2").fadeToggle(1000, "linear");
  });

  $("#project2").hover(function () {
    $(this).children(".graph3").fadeToggle(1000, "linear");
  });

  $("#project3").hover(function () {
    $(this).children(".graph4").fadeToggle(1000, "linear");
  });

//   hover effect section2

 $("#project4").hover(function () {
    $(this).children(".graph5").fadeToggle(1000, "linear");
  });

  $("#project5").hover(function () {
    $(this).children(".graph6").fadeToggle(1000, "linear");
  });

  $("#project6").hover(function () {
    $(this).children(".graph7").fadeToggle(1000, "linear");
  })

  $("#project7").hover(function () {
    $(this).children(".graph8").fadeToggle(1000, "linear");
  })
  



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