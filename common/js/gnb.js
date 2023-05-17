//글로벌네비게이션

$(document).ready(function() {

    var smh=$('.visual').height();  
    var on_off=false; 
    
        $('#headerArea').mouseenter(function(){
           
            $(this).css('background','#fff');
            $('.dropdownmenu li a').css('color','#333'); 
            $('.top_menu a').css('color','#333'); 
           
            on_off=true;
        });
    
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
 
   
      //2depth 열기/닫기
     $('ul.dropdownmenu').hover(         
        function() { 
           $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
           $('#headerArea').animate({height:350},'fast').clearQueue();
        },function() {
           $('ul.dropdownmenu li.menu ul').hide();
           $('#headerArea').animate({height:130},'fast').clearQueue();
      });
     
      //1depth 효과
      $('ul.dropdownmenu li.menu').hover(
        function() { 
            $('.depth1',this).css('color','#0c4da2').css('font-weight','500');
        },function() {
           $('.depth1',this).css('color','#333');
      });
 
      //2depth 효과
      $('ul.dropdownmenu li.menu ul li').hover(
        function() { 
            $('a',this).css('color','#0c4da2');
        },function() {
           $('a',this).css('color','#333');
      });
      
 
      //tab 처리
      $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
         $('ul.dropdownmenu li.menu ul').slideDown('normal');
         $('#headerArea').animate({height:350},'fast').clearQueue();
      });
 
     $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
         $('ul.dropdownmenu li.menu ul').slideUp('fast');
         $('#headerArea').animate({height:150},'normal').clearQueue();
     });
  });


//패밀리사이트
  $(document).ready(function() {
   
	$('.family .arrow').toggle(function(){
		$('.family .aList').fadeIn('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>')	
	},function(){
        $('.family .aList').fadeOut('fast');
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>')	
	});

	//tab키 처리
	  $('.family .arrow').on('focus', function () {        
              $('.family .aList').fadeIn('fast');	
       });
       $('.family .aList li:last a').on('blur', function () {        
              $('.family .aList').fadeOut('fast');
       });
 
});




//상단이동
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리
    var winh = $(window).height()/4;  // 윈도우 높이
   // console.log(winh);
   
    $('.text').text(scroll);

    if(scroll>500){ //500이상의 거리가 발생되면
        $('.topMove').fadeIn('slow');  //top보여라~~~~
    }else{
        $('.topMove').fadeOut('fast');//top안보여라~~~~
    }
});

$('.topMove').click(function(e){
   e.preventDefault();   //a태그 니까 꼭 사용
    //상단으로 스르륵 이동합니다.
   $("html,body").stop().animate({"scrollTop":0},1000);
   //$("html,body").stop().animate({"scrollTop":100},1000); //해당 높이로 이동
});