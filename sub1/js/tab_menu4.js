$(document).ready(function(){
    var cnt=$('.main .map').size();  //탭메뉴 개수 ***
    $('.main .map:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.tab_menu .tab1').css('borderColor','#0c4da2').css('color','#0c4da2'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      
    $('.tab_menu .tab').click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
          var ind = $(this).parent().index();  // 클릭시 해당 index를 뽑아준다  해당 선택자가 html에서 연속으로 위치함
          //var ind = $(this).index('tabs .tab');  //두 가지 방법 
          //console.log(ind); 
          $('.content_area').css('overflow','visible').css('height','auto');  //*** 이거 추가 !! 


          $(".main .map").hide(); //모든 탭내용을 안보이게...
          $(".main .map:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
          $('.tab').css('fontWeight','400').css('color','#666').css('background','#fff'); //모든 탭메뉴를 비활성화
          $(this).css('fontWeight','500').css('color','#0c4da2').css('background','#f8f8f8'); // 클릭한 해당 탭메뉴만 활성화

     });
   
   });
