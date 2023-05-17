$(document).ready(function() {

    $('.visual h3, h2, .visual p').waypoint(function() {    
        $('.visual h3, h2, .visual>p').addClass('animated fadeInUp');
      }, {
        offset: '95%'            
      });

      $('.p1, .p2').waypoint(function() {    
        $('.p1, .p2').addClass('animated fadeInUp');
      }, {
        offset: '90%'            
      });

    $('.main1 img ').waypoint(function() {    
      $('.main1 img').addClass('animated fadeInDown');
    }, {
      offset: '85%'            
    });

    $('.main1 dt, .main1 dd').waypoint(function() {    
        $('.main1 dt, .main1 dd').addClass('animated fadeInLeft');
      }, {
        offset: '80%'            
      });

    $('.main2 img ').waypoint(function() {    
        $('.main2 img').addClass('animated fadeInDown');
      }, {
        offset: '75%'            
      });
  
    $('.main2 dt, .main2 dd').waypoint(function() {    
          $('.main2 dt, .main2 dd').addClass('animated fadeInLeft');
        }, {
          offset: '70%'            
        });

    $('.main3 img ').waypoint(function() {    
        $('.main3 img').addClass('animated fadeInDown');
      }, {
        offset: '65%'            
      });
  
    $('.main3 dt, .main3 dd, .inner h3').waypoint(function() {    
          $('.main3 dt, .main3 dd, .inner h3').addClass('animated fadeInLeft');
        }, {
          offset: '60%'            
        });

    $('.inner li').waypoint(function() {    
        $('.inner li').addClass('animated fadeInLeft');
    }, {
        offset: '59%'            
    });

    $('.inner i').waypoint(function() {    
        $('.inner i').addClass('animated rollIn');
    }, {
        offset: '59%'            
    });



});