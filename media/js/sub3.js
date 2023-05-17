// -----서브비주얼 배경-----
$(document).ready(function() {
    var screenSize, screenHeight;
  
    function screen_size(){
        screenSize = $(window).width(); 
        screenHeight = $(window).height(); 
  
        $("#content").css('margin-top',screenHeight);
        
        if( screenSize > 768) {           
            $("#imgBG").attr('src','./images/sub3/sub_main3.jpg'); //큰이미지
        }else
            $("#imgBG").attr('src','./images/sub3/sub_main3.jpg'); //작은이미지
        if(screenSize <= 768){
            $("#imgBG").show();
            current=false;
        }
    }
  
    screen_size(); 
    
   $(window).resize(function(){  
        screen_size();
    }); 
    
    $('.down').click(function(){
        screenHeight = $(window).height();
        $('html,body').animate({'scrollTop':screenHeight}, 1000);
    });
  });


// -----intro 타이핑 효과-----
const content = "2,3! hello we're NewJeans!".split("");
let typingIdx = 0;

function typing () {
    if (typingIdx < content.length) {
        $(".intro p").append(content[typingIdx]);
        typingIdx++; 
    } 
    else{ 
        clearInterval(clear1);  
    } 
}
let clear1 =  setInterval(typing, 110);

