$(function() {                                   

    //attr:속성 바꿈
   var fragment = $('.main2 .tab_menu li a.current').attr('href');   
   // 'data.html#Modeling'
      
   fragment = fragment.replace('#', ' #');  //#을 띄어쓰고#으로 변경           
   $('#box').load(fragment); 
    //  $('#details').load('data.html #Modeling');
   
    $('.main2 .tab_menu li a').on('click', function(e) { 
      e.preventDefault();                                     
      fragment = this.href; 
      // fragment = &(this),attr('href');                           
  
      fragment = fragment.replace('#', ' #');  
      $('#box').load(fragment);                          
  
      $('.tab_menu a.current').removeClass('current');       
      $(this).addClass('current');
    });
  
  
  
  });