$(document).ready(function(){
   
    var memo = [
          {imgsrc:'1.jpg' ,title:'FLNG', sub1:'FLNG는 해상에서 천연가스를 채굴한 뒤 이를 정제하고 LNG로 액화해 저장ㆍ하역할 수 있는 해양플랜트 설비입니다.', 
           sub3:''},
          {imgsrc:'2.jpg' ,title:'FPSO', sub1:'세계 최다 FPSO 건조실적', sub2:'FPSO는 부유식 원유생산저장하역설비로서 심해 유전이나 유전의 조기 개발, 중소규모 유전 개발에 활용되는 고가의 해양설비입니다.',
           sub3:''},
          {imgsrc:'3.jpg' ,title:'부유식 해양구조물', sub1:'고부가가치의 해양구조물 생산으로 기술력 축적', sub2:'부유식 해양구조물은 심해 해상에 설치돼 해저 유전의 시추와 생산 작업에 투입되는 설비입니다.',
           sub3:''},
          {imgsrc:'4.jpg' ,title:'고정식 해양플랫폼', sub1:'세계 시장에서 빛나는 이름, 삼성중공업', sub2:'고정식 해양플랫폼은 수심이 비교적 얕은 해상에 고정하여 설치되는 해양자원개발설비입니다.',
           sub3:''},
          {imgsrc:'5.jpg' ,title:'드릴십', sub1:'드릴십 세계 시장점유율 1위', sub2:'드릴십은 심해지역이나 파도가 심한 해상에서 원유를 발굴하는 시추설비로 고도의 선박건조기술과 해저시추기술이 필요한 고부가가치선입니다.',
           sub3:''},
          {imgsrc:'6.jpg' ,title:'잭업리그', sub1:'새로운 먹거리로 떠오른 고부가 시추설비', sub2:'잭업리그는 통상 대륙붕 유전 개발에 투입되는 시추 설비입니다.',
           sub3:''}
        ];
      
   
    $('.main .pop_menu a').click(function(e){
        e.preventDefault();
        var txt ='';  
        var ind = $(this).index('.main .pop_menu a');  
  
        $('.main .modal_box').fadeIn('fast');
        $('.main .popup').fadeIn('slow');
  
        $('.main .popup img').attr('src','./images/content2/'+memo[ind].imgsrc);
  
        txt+= '<div class="title_box">'
        txt+= '<span>'+memo[ind].sub1+'</span>';
        txt+= '<strong>'+memo[ind].title+'</strong>';
        txt+= '<p>'+memo[ind].sub2+'</p>';
        txt+= '</div>'
        txt+= '<div class="text_box">'
        txt+= '<p>'+memo[ind].sub3+'</p>';
        txt+= '</div>'
     

        $('.main .popup .txt').html(txt);
  
    });
  
    $('.close_btn,.main .modal_box').click(function(e){
        e.preventDefault();
        $('.main .modal_box').hide();
        $('.main .popup').hide();
    });
  });
  