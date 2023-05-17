$(document).ready(function() {


    $('h2').waypoint(function() {    
        $('h2').addClass('animated fadeInUp');
      }, {
        offset: '95%'            
      });

      $('.up').waypoint(function() {    
        $('.up').addClass('animated fadeInUp');
      }, {
        offset: '90%'            
      });

    $('.main1').waypoint(function() {    
      $('.main1').addClass('animated fadeInDown');
    }, {
      offset: '85%'            
    });

    $('.main2 .title_box').waypoint(function() {
      $('.main2 .title_box').addClass('animated fadeInDown');
    }, {
      offset: '75%'
    });

    $('.edu1').waypoint(function() {
        $('.edu1').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    }); 
      
    $('.edu2').waypoint(function() {
        $('.edu2').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    }); 

    $('.edu3').waypoint(function() {
        $('.edu3').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    }); 


    $('.box3').waypoint(function() {
      $('.box3').addClass('animated fadeInDown');
    }, {
      offset: '65%'
    });

   

});