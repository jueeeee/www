//서브비주얼 배경 
$(document).ready(function() {
    var screenSize, screenHeight;
  
    function screen_size(){
        screenSize = $(window).width(); //스크린의 너비
        screenHeight = $(window).height();  //스크린의 높이
  
        $("#content").css('margin-top',screenHeight);
        
        if( screenSize > 768) {           
            $("#imgBG").attr('src','./images/sub1/sub_main1.png'); //큰이미지
        }else
            $("#imgBG").attr('src','./images/sub1/sub_main1.png'); //작은이미지
        if(screenSize <= 768){
            $("#imgBG").show();
            current=false;
        }
    }
  
    screen_size();  //최초 실행시 호출
    
   $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
        screen_size();
    }); 
    
    $('.down').click(function(){
        screenHeight = $(window).height();
        $('html,body').animate({'scrollTop':screenHeight}, 1000);
    });
  });


//intro 타이핑 효과
const content = "2,3! hello we're NewJeans!".split("");
//let typingBool = false;
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