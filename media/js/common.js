//gnb//
$(document).ready(function() {

    var smh=$('.videoBox').height();  
    var on_off=false; 
    
       $('#headerArea').mouseleave(function(){
            var scroll = $(window).scrollTop();
            
          
            if(scroll<smh-130){ 
                $(this).css('background','none').css('border-bottom','none'); 
                $('.dropdownmenu li a').css('color','#fff');
                $('.top_menu a').css('color','#fff'); 
            }else{ 
                $(this).css('background','#fff').css('border-bottom','1px solid #ccc'); 
                $('.dropdownmenu li a').css('color','#333');
                $('.top_menu a').css('color','#333'); 
            }
           on_off=false;    
       });
    
 
       $(window).on('scroll',function(){
            var scroll = $(window).scrollTop();  

            if(scroll>smh-130){
                $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
                $('.dropdownmenu li a').css('color','#333');
                $('.top_menu a').css('color','#333'); 
            }else{
               if(on_off==false){ 
                    $('#headerArea').css('background','none').css('border-bottom','none');
                    $('.dropdownmenu li a').css('color','#fff');
                    $('.top_menu a').css('color','#fff'); 
               }
            }; 
            
         });
})      

//상단이동//
$('.topMove').click(function(e){
   e.preventDefault();   
   $("html,body").stop().animate({"scrollTop":0},1000); 
});

//토끼 스크롤//
var s1 = $("#content .gallery").offset().top - 320;

$(window).on("scroll", function () {
            var scroll = $(window).scrollTop(); //스크롤 top의 높이

            if (scroll >= s1) {
                $(".rabbit").addClass("on");
            } else if (scroll < s1) {
                $(".rabbit").removeClass("on");
            } 
});

//nav//
let screenSize, screenHeight;
const headerArea = document.querySelector('#headerArea');
const gnb = document.querySelector('#gnb');
const menuTrigger = document.querySelector('.menuTrigger');

// Show
const show = function (elem) {
	elem.style.display = 'block';
};

// Hide
const hide = function (elem) {
	elem.style.display = 'none';
};

// navigation
let navCurrent = 0;
function screenW(){
    screenSize = window.innerWidth;
    screenHeight = window.innerHeight;
    if (screenSize > 768){
        show(gnb);
        navCurrent = 1;
    }
    if (navCurrent == 1 && screenSize < 768){
        hide(gnb);
        navCurrent = 0;
    }
}

window.addEventListener("resize", screenW);

let op = false; 
menuTrigger.addEventListener('click', function(e){
    e.preventDefault();

    if(op == false) {
        show(gnb);
        gnb.animate([
            { left: "100%" },
            { left: "0" }
        ], {
            duration: 200,
            fill: "forwards"
        });
        
        op=true;     
    } else {
        gnb.animate([
            { left: "0"},
            { left: "100%"}
        ], {
            duration: 200,
            fill: "forwards"
        }); 
        op=false;  
    }
});


//뉴진스 이미지 변경
$(document).ready(function() {
    var screenSize, screenHeight;
    var current=false;
  
    function screen_size(){
        screenSize = $(window).width(); //스크린의 너비
  
      if( screenSize > 1024 && current==false){
          $(".about .tab1, .tab2").show();
          $(".about .tab3").hide();
            current=true;
          } 

      if(screenSize <= 1024){
          $(".about .tab1, .tab2").hide();
          $(".about .tab3").show();
          current=false;
      }
    }
screen_size();
  
 $(window).resize(function(){ 
      screen_size();
  }); 
});

