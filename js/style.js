//Sticky Nav
   $(document).ready(function(){
      $(".navstyle").sticky({
        topSpacing:0,
        zIndex: 999
      });
    });

   $('.navstyle').on('sticky-start', function() { 
      $("nav").addClass('stickynav');
      $('.lg').remove();
      $("#logo-container").html('<img class="lg" src="images/new-black.png" width="242px" height="63px" />');
      $('.material-icons').css('color', 'black')
      
    });

    $('.navstyle').on('sticky-end', function() { 
      $(".navstyle").removeClass('stickynav');
      $('.lg').remove();
      $("#logo-container").html('<img class="lg" src="images/new-black.png" width="242px" height="63px" />');
      $('.material-icons').css('color', 'white')
    });



//Responsive Switch Of Button
var joinbtn = "<button class='join-button'>JOIN</button>"
var query = Modernizr.mq('(max-width: 700px)');
 if (query) {
   console.log("YES SIR");
   $('.form-wrapper').remove();
   $("#contact_form").html(joinbtn);
    } else {
       console.log("->");
    };



//Benefits section - cards shuffle 

  function pcpShuffle () {
    $('#benefits-zone').html("<img onclick='backShuffle(); return false;' src='images/benefits2.png' width='100%' height='100%'>");
  }

  function backShuffle () {
        $('#benefits-zone').html('<div class="wrapper">' + '<div id="one"><br>' + '<img class="pcp" onclick="pcpShuffle(); return false;" src="images/pcp.png" width="80%" height="80%">'
        + '</div>' + '<div id="two"><br><img class="sp" onclick="spShuffle(); return false;" src="images/sp.png" width="80%" height="80%"></div>' + '</div>'); /*benefit zone ends*/ 
  }

  function spShuffle () {
    $('#benefits-zone').html("<img onclick='backShuffle(); return false;' src='images/benefits1.png' width='100%' height='100%'>");
  }




//Carousel 
$(function(){
    $('.carousel.carousel-slider').carousel({full_width: true});
  });


//Calculations for how much PCP can make 
//Declared Global Variables 
    var PCP = true; //If the user is a primary care provider
    var earn        //Total amount they earn to be printed
    var WD = 225; 	//Number of Workdays
    var DBP = 0; 	  //Percentage of NP That Are Diabetic 
    var DBR = 0;	  //Percentage of DBP receiving an eye exam


//Input field integrity Check 

//-- document.getElementByClass('init').onkeypress =
//  function (e) {
//    var ev = e || window.event;
//    if(ev.charCode < 0 || ev.charCode > 100) {
//      return false; // not a digit
//    } else if(this.value + 1 > this.max) {
//       return false;
//    } else {
//       return true;
//    }
//  } 


//prevent page refresh when calc is clicked
    $("#earncalc").submit(function(e) {
        e.preventDefault();
    });


//Logic For Earnings
  $( '#clicked' ).click ( function () {
    var NP = $("#patients").val(); //Number of Patients
    var DBP = $("#percentd").val(); //Percentage of NP That Are Diabetic 
    var DBR = $("#percentr").val(); //Percentage of DBP receiving an eye exam
    earn = NP * (DBP / 100) * ((100 - DBR) / 100) * WD;

    earns = earn.toFixed();
    console.log (earns);

    $('.MyEdit').html('$' + earns + '<br> <h5>annual additional revenue</h5>'); 

  } );








//Media Queries for Image Change in Benefits Section 

$(function() {
  if($(window).width() <= 740) {

    $("#benefits-zone").html('<img class="mobile-pcp" src="images/mobilepcp.png" width="100%" height="100%">');

    $("#mobile-benefits").html('<img class="mobile-sp" src="images/mobilesp.png" width="100%" height="100%">'); 

    $('.mobile-pcp' ).click ( function () {
      $('.mobile-pcp').remove();
      $('#mobile-benefits').remove();
      $('#benefits-zone').html("<img src='images/pcpbenefits-mobile.png' width='100%' height='100%'>");  
    });

  $( '.mobile-sp' ).click ( function () {
    $('.mobile-pcp').remove();
    $('#mobile-benefits').remove();
    $('#benefits-zone').html("<img src='images/spbenefits-mobile.png' width='100%' height='100%'>");  
  } );

   
  }
});












