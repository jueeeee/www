// ESD 에너지 저감 장치

$(function() {                                   

   var fragment = $('.esd .tab_menu li a.current').attr('href');   
      
   fragment = fragment.replace('#', ' #');           
    $('#esd_box').load(fragment); 
   
    $('.esd .tab_menu li a').on('click', function(e){ 
      e.preventDefault();                                     
      fragment = this.href;                          
  
      fragment = fragment.replace('#', ' #');  
      $('#esd_box').load(fragment);                          
  
      $('.tab_menu a.current').removeClass('current');       
      $(this).addClass('current');
    });  
});


// LNG VALUE CHAIN

$(function() {                                   

    var fragment = $('.lng .tab_menu li a.current').attr('href');   
       
    fragment = fragment.replace('#', ' #');           
     $('#lng_box').load(fragment); 
    
     $('.lng .tab_menu li a').on('click', function(e){ 
       e.preventDefault();                                     
       fragment = this.href;                          
   
       fragment = fragment.replace('#', ' #');  
       $('#lng_box').load(fragment);                          
   
       $('.tab_menu a.current').removeClass('current');       
       $(this).addClass('current');
     });  
 });


// ENGINEERING

$(function(){
    var i = 0;
    var useData=[];
  
    function dataPrint(){
     $.ajax({
         url: './sub3_2.json',
         dataType: 'json',
         success: function(data){
              useData = data.list;
             
              var txt = '<ul>';
              
              var $Title = useData[i].Title;
              var $Sub = useData[i].Sub;
              var $Image = useData[i].Image;

              txt+='<li>';
              txt+='<img src="'+ $Image +'" alt="">';
              txt+='<dl>';
              txt+='<dt>'+$Title+'</dt>'; 
              txt+='<dd>'+$Sub+'</dd>';
              txt+='</dl>';
              txt +='</li>';
              
              txt += '</ul>';
  
              $('.engine_list').html(txt).hide().stop().fadeIn('fast');
              $('.text .num1').text(i+1);
              $('.text .num2').text(useData.length);
            } 
        });
    };
             
    dataPrint();
    
    $('.btn a').click(function(e){
        e.preventDefault();
    
        if($(this).hasClass('left')){   
            if(i==0)i=useData.length; 
            i--;
            dataPrint();
        }else if($(this).hasClass('right')){  
            if(i==useData.length-1)i=-1;
            i++;
            dataPrint();
        }
        
    });
      
});