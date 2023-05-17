
//BUSINESS
$(document).ready(function(){

    var busiCount = 2;
    var busiCnt = 1;

    $('.business .business_box .text_box ul li:eq(0)').show();
    $('.business .business_box img:eq(0)').show();

    $('.business .business_btn a').click(function(e){
        e.preventDefault();

        if($(this).is('.prev')){ 
            if(busiCnt == 1){ busiCnt = busiCount+1; }
            busiCnt--;
        }else if($(this).is('.next')){ 
            if(busiCnt == busiCount){ busiCnt = 0; }
            busiCnt++;
        }

        $('.business .business_box .text_box ul li').hide();
        $('.business .business_box .text_box ul li:eq('+ (busiCnt-1) +')').fadeIn();

        $('.business .business_box img').hide();
        $('.business .business_box img:eq('+ (busiCnt-1) +')').fadeIn();

    });
});

//THCHNOLOGY
$('.eventSlideMenu ul li>span').mouseenter(function(event){
    var $target=$(event.target);  // var $target = $(this)

//   clearInterval(timeonoff);
  $('.eventSlideMenu ul li').removeClass('current');
  $(this).parent().addClass('current');   

  $('.eventSlideMenu ul li h4').css('opacity',0);
  $('.eventSlideMenu ul li p').css('opacity',0);
  $('.eventSlideMenu ul li a').css('opacity',0); 

     if($target.is('.buttonMenu01')){  //첫번째 버튼에 마우스 오버되면
         $('.eventSlideMenu ul li:eq(0)').animate({left:[0,'easeOutQuad']},400).clearQueue();
         $('.eventSlideMenu ul li:eq(1)').animate({left:[800,'easeOutQuad']},400).clearQueue();
         $('.eventSlideMenu ul li:eq(2)').animate({left:[1000,'easeOutQuad']},400).clearQueue();
         $('.buttonMenu01').css('width','800');
         $('.img01 p').css('opacity','1');
         $('.img01 h4').css('opacity','1');
         $('.img01 a').css('opacity','1');
         $('.img01 .first_title').css('opacity','0');

         $('.img02 .first_title').css('opacity','1');
         $('.img03 .first_title').css('opacity','1');

     }else if($target.is('.buttonMenu02')){//두번째 버튼에 마우스 오버되면
        $('.eventSlideMenu ul li:eq(0)').animate({left:[0,'easeOutQuad']},400).clearQueue();
        $('.eventSlideMenu ul li:eq(1)').animate({left:[200,'easeOutQuad']},400).clearQueue();
        $('.eventSlideMenu ul li:eq(2)').animate({left:[1000,'easeOutQuad']},400).clearQueue();
        $('.buttonMenu02').css('width','800');
        $('.img02 p').css('opacity','1');
        $('.img02 h4').css('opacity','1');
        $('.img02 a').css('opacity','1');
        $('.img02 .first_title').css('opacity','0');

        $('.img01 .first_title').css('opacity','1');
        $('.img03 .first_title').css('opacity','1');

     }else if($target.is('.buttonMenu03')){
        $('.eventSlideMenu ul li:eq(0)').animate({left:[0,'easeOutQuad']},400).clearQueue();
        $('.eventSlideMenu ul li:eq(1)').animate({left:[200,'easeOutQuad']},400).clearQueue();
        $('.eventSlideMenu ul li:eq(2)').animate({left:[400,'easeOutQuad']},400).clearQueue();
        $('.buttonMenu03').css('width','800');
        $('.img03 p').css('opacity','1');
        $('.img03 h4').css('opacity','1');
        $('.img03 a').css('opacity','1');
        $('.img03 .first_title').css('opacity','0');

        $('.img01 .first_title').css('opacity','1');
        $('.img02 .first_title').css('opacity','1');
     }

     $('.eventSlideMenu ul').mouseleave(function(event){
        var $target=$(event.target);  // var $target = $(this)
        $('.eventSlideMenu ul li:eq(0)').animate({left:[0,'easeOutQuad']},400).clearQueue();
        $('.eventSlideMenu ul li:eq(1)').animate({left:[400,'easeOutQuad']},400).clearQueue();
        $('.eventSlideMenu ul li:eq(2)').animate({left:[800,'easeOutQuad']},400).clearQueue();
        $('.eventSlideMenu ul li span').css('width','400');
        $('.eventSlideMenu p, .eventSlideMenu h4, .eventSlideMenu a').css('opacity','0');
        $('.eventSlideMenu ul li').removeClass('current');
        $('.first_title').css('opacity','1');
    

    //timeonoff= setInterval(move_gallery, 4000);  //부활~~
 });
});


//SCROLL
$(document).ready(function () {

    var h0= $('#content section:eq(0)').offset().top-500 ;  
    var h1= $('#content section:eq(1)').offset().top-500 ;
    var h2= $('#content section:eq(2)').offset().top-500 ;
    var h3= $('#content section:eq(3)').offset().top-500 ;
    var h4= $('#content section:eq(4)').offset().top-500 ;

    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
               
        if(scroll>=h0 && scroll<h1){                      
          $('#content section:eq(0)').addClass('boxMove0');
        
        }else if(scroll>=h1 && scroll<h2){                      
          $('#content section:eq(1)').addClass('boxMove1');

        }else if(scroll>=h2 && scroll<h3){                     
          $('#content section:eq(2)').addClass('boxMove2');

        }else if(scroll>=h3 && scroll<h4){                      
          $('#content section:eq(3)').addClass('boxMove3');

        }else if(scroll>=h4){                        
          $('#content section:eq(4)').addClass('boxMove4');
       }
              
    });

});



//NEWS SLIDEGALLERY
$(document).ready(function() {
     var position=0; 
     var movesize=$('.news_content ul li').width();
     var timeonoff;
    
     $('.news_content ul').after($('.news_content ul').clone());
  
     function moveG() {
         position-=movesize;
         $('.news_content').animate({left:position}, 'fast',
             function(){							
             if(position<=-2400){
                 $('.news_content').css('left',0);
                 position=0;
             }
         }).clearQueue();
     }
 
     timeonoff= setInterval(moveG, 3000);
   

   $('.button').click(function(e){
      e.preventDefault();
 
      clearInterval(timeonoff);
      
      if($(this).is('.prev')){
          
           position-=movesize;
          $('.news_content').animate({left:position}, 'fast',function(){
             if(position<=-2400){
                 position=0;
                 $('.news_content').css('left',0);
              }
          }).clearQueue();  
 
      }else if($(this).is('.next')){ 
            if(position>=0){
                 $('.news_content').css('left',-2400);
                 position=-2400;
             }
  
             position+=movesize; 
             $('.news_content').animate({left:position}, 'fast',
                 function(){							
                     if(position>=0){
                         $('.news_content').css('left',-2400);
                         position=-2400;
                     }
                 }).clearQueue();
   
       }
    });
 });
 
