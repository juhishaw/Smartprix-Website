
/*megamenu*/
$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});

/*range selector*/
$(document).ready(function() {
    $("#slider-range-min").slider({
      range: "min",
      step: 100,
      value: 1200,
      min: 0,
      max: 15000,
      slide: function(event, ui) {
        $("#amount").val("Around Rs." + ui.value);
      },
      change: function(event, ui) {
        if (ui.value === 0) {
          $("#amount").val("Select Range");
        } else if (ui.value === 15000) {
          $("#amount").val("Rs." + "15000 or more");
        } else {
          $("#amount").val(" Around Rs." + $("#slider-range-min").slider("value"));
        }
      }
    });
    $("#amount").val("Around Rs." + $("#slider-range-min").slider("value"));
  
  });

/*scroller*/
(function(){

function scroller() {

    var scroll = $('div.scroll');
    
    var height = scroll.height(); 

    var topAdj = -height-30; 
    scroll.animate({
        'top' : [topAdj, 'linear'] 
    }, 12000, function(){
        scroll.css('top', 80); 
        scroller(); 
    });}
    
scroller();

})();
  
/*sidenav*/
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}


window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      $('.nav_down').css('display','none');
      $('.ham').css('display','block');
   
  } else {
    $('.nav_down').css('display','block');
    $('.ham').css('display','none');
  }
}
  