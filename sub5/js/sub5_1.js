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

    $('.box1').waypoint(function() {    
      $('.box1').addClass('animated fadeInDown');
    }, {
      offset: '85%'            
    });

    $('.img1').waypoint(function() {    
        $('.img1').addClass('animated fadeInRight');
      }, {
        offset: '80%'            
      });

    $('.box2').waypoint(function() {
      $('.box2').addClass('animated fadeInDown');
    }, {
      offset: '75%'
    }); 

    $('.img2').waypoint(function() {    
        $('.img2').addClass('animated fadeInLeft');
      }, {
        offset: '70%'            
      });

    $('.box3').waypoint(function() {
      $('.box3').addClass('animated fadeInDown');
    }, {
      offset: '65%'
    });

    $('.img3').waypoint(function() {    
        $('.img3').addClass('animated fadeInRight');
      }, {
        offset: '60%'            
      });

});