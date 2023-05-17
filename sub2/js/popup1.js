$(document).ready(function(){
   
    var memo = [
          {imgsrc:'1.jpg' ,title:'LNG FSRU', sub1:'친환경 고효율 엔진으로 LNG선 시장선도', sub2:'LNG FSRU은 영하 163도로 액화된 천연가스를 운반하는 선박입니다.', 
           sub3:'특히 2001년에는 기존 대비 운항성능과 연비가 뛰어난 전기추진 LNG선을, 2008·2009년에는 세계 최대 크기인 26만6천 입방미터급 LNG선을, 2013년 이후에는 연비를 혁신적으로 개선한 친환경 고효율 엔진 LNG선을 각각 성공적으로 건조함으로써 앞선 기술력을 선보였습니다. 또한 LNG선의 핵심기술이라고 할 수 있는 화물창에서는 독자 개발한 한국형 화물창인 KC-1을 실선에 적용하는데 성공하였습니다. 그리고 극지용 쇄빙 LNG선, 수입국에서 LNG 기화 및 저장설비 역할을 하는 LNG-FSRU, LNG 연료주유선인위한 LNG Bunkering 선박 등 신개념 선박 개발에도 주력하여 LNG시장에서 기술 혁신을 주도하고 있습니다.'},
          {imgsrc:'2.jpg' ,title:'유조선', sub1:'친환경 기술을 자랑하는 원유운반선', sub2:'유조선은 원유를 운송하는 선박입니다.',
           sub3:'삼성중공업은 1992년 세계 최초로 아프라막스급 이중선체 유조선을 건조한 바 있으며, 친환경 선박 개발을 위해 지속적으로 노력하고 있습니다. 셔틀탱커는 높은 파도와 바람, 조류의 영향을 받는 해상에서 일정한 위치를 유지하며 원유생산설비에 안정적으로 접안할 수 있도록 첨단 위치제어 장비가 탑재되어있는 고부가가치 선박입니다. 삼성중공업은 전세계 셔틀탱커 136척 중 64척을 수주해 시장점유율 47%를 기록하며 이 분야에서 1위를 수성하고 있습니다.'},
          {imgsrc:'3.jpg' ,title:'쇄빙유조선', sub1:'극지 원유 운송의 새 지평, 양방향 쇄빙유조선', sub2:'쇄빙유조선은 얼음을 깨고 항해하는 선박입니다.',
           sub3:'삼성중공업은 2007년 세계 최초로 7만톤급 극지운항용 전·후진 양방향 쇄빙유조선를 건조하였고 이 후에도 7척을 추가로 수주하는데 성공했습니다. 이 선박은 최대 두께 1.4m의 얼음을 깨고 시속 3.5노트의 속도로 항해할 수 있으며, 영하 45도의 혹한에서도 견딜 수 있도록 설계됐습니다. 쇄빙유조선은 쇄빙선과 유조선을 하나로 결합하여 운송효율을 획기적으로 향상시킨 신개념 선박으로 평가받고 있습니다.'},
          {imgsrc:'4.jpg' ,title:'컨테이너선', sub1:'컨테이너선 대형화 주도', sub2:'컨테이너선은 대량의 컨테이너를 운반하는 선박입니다.',
           sub3:'삼성중공업은 5,000TEU급 컨테이너선이 주종을 이루던 지난 1999년에 세계 최초로 6,200TEU급 컨테이너선을 개발한 이래, 8,100TEU급(2002년), 9,600TEU급(2003년), 13,300TEU급(2006년), 16,000TEU급(2007년) 선박을 세계최초로 개발하며 컨테이너선의 대형화를 선도해왔습니다. 2015년에는 20,100TEU급 컨테이너선 4척과 21,100TEU급 컨테이너선 6척을 잇달아 수주하며 세계 최대 컨테이너선 수주 기록을 경신하였고, 2017년에는 23,000TEU급 컨테이너선 6척을 수주하며 컨테이너선 시장의 새 역사를 쓰고 있습니다.'},
          {imgsrc:'5.jpg' ,title:'VLEC', sub1:'세계 최초 초대형 에탄운반선으로 신시장 개척', sub2:'에탄운반선은 셰일가스 등 천연가스에서 추출되는 에탄을 액화하여 운반하는 선박입니다.',
           sub3:'삼성중공업은 2014년 세계 최초로 87만 입방미터급 에탄운반선을 수주해 신시장 개척에 성공했습니다. 에탄운반선은 운항성능이 뛰어나면서도 친환경적인 고부가가치 선박입니다. 삼성중공업은 셰일가스 개발과 함께 증가할 것으로 예상되는 에탄운반선 시장에서 성공적인 교두보를 마련한 것으로 평가받고 있습니다.'},
          {imgsrc:'6.jpg' ,title:'여객선', sub1:'유럽형 대형 여객선의 지속적인 개발', sub2:'여객선은 사람을 수송하는 선박입니다.',
           sub3:'삼성중공업은 지금까지 그리스 미노안(Minoan)社, 네덜란드 노포크(Nofork)社, 스웨덴 스테나(Stena)社 등으로부터 총 9척의 여객선을 수주하면서 크루즈선 사업 진출기반을 착실히 다졌습니다. 또한 2009년에는 국내 최초로 LNG를 연료로 사용해 운항 중 발생하는 질소산화물과 황산화물 배출량을 각각 90% 이상 감축시킨 친환경 여객선을 개발하는 등 친환경 기술연구에도 앞장서고 있습니다.'}
        ];
      
   
        var txt ='';  
        var ind = 0;
        var total = $('.pop_menu li').size();

        function popchange(){
        $('.main .popup img').attr('src','./images/content1/'+memo[ind].imgsrc);
        
        txt='';
        txt+= '<div class="title_box">'
        txt+= '<span>'+memo[ind].sub1+'</span>';
        txt+= '<strong>'+memo[ind].title+'</strong>';
        txt+= '<p>'+memo[ind].sub2+'</p>';
        txt+= '</div>'
        txt+= '<div class="text_box">'
        txt+= '<p>'+memo[ind].sub3+'</p>';
        txt+= '</div>'
        $('.main .popup .txt').html(txt);
    }

        $('.main .pop_menu a').click(function(e){
            e.preventDefault();

        ind = $(this).index('.main .pop_menu a');

        $('.pop_btn').fadeIn('slow');
        $('.main .modal_box').fadeIn('fast');
        $('.main .popup').fadeIn('slow');

        popchange();

    });

    $('.close_btn,.main .modal_box').click(function(e){
        e.preventDefault();
        $('.main .modal_box').hide();
        $('.main .popup').hide();
        $('.pop_btn').fadeOut('fast');
    });

    $('.pop_btn a').click(function(e){
        e.preventDefault();

    $('.main .popup').hide().fadeIn('slow'); 
    
    if($(this).hasClass('pre')){  
        if(ind==0)ind=total;  
        ind--;
        popchange();
    }else if($(this).hasClass('next')){ 
        if(ind==total-1)ind=-1;  
        ind++;
        popchange();
    }

    });
});



    // $('.main .pop_menu a').click(function(e){
    //     e.preventDefault();
    //     var txt ='';  
    //     var ind = $(this).index('.main .pop_menu a');
    //     var total = $('.pop_menu li').size();

    //     $('.pop_btn').fadeIn('slow');
    //     $('.main .modal_box').fadeIn('fast');
    //     $('.main .popup').fadeIn('slow');
  
    //     $('.main .popup img').attr('src','./images/content1/'+memo[ind].imgsrc);
    //     popchange();
  
    //     txt+= '<div class="title_box">'
    //     txt+= '<span>'+memo[ind].sub1+'</span>';
    //     txt+= '<strong>'+memo[ind].title+'</strong>';
    //     txt+= '<p>'+memo[ind].sub2+'</p>';
    //     txt+= '</div>'
    //     txt+= '<div class="text_box">'
    //     txt+= '<p>'+memo[ind].sub3+'</p>';
    //     txt+= '</div>'
     

    //     $('.main .popup .txt').html(txt);
  
    // });
  
    // $('.close_btn,.main .modal_box').click(function(e){
    //     e.preventDefault();
    //     $('.main .modal_box').hide();
    //     $('.main .popup').hide();
    //     $('.pop_btn').fadeOut('fast');
    // });
  
  
    // $('.pop_btn a').click(function(e){
    //     e.preventDefault();

    // $('.main .popup').hide().fadeIn('slow'); //fade효과 
    
    // if($(this).hasClass('pre')){  //이전버튼 클릭
    //     if(ind==0)ind=total;  // 3 2 1 0 3 2 1 0 ...
    //     ind--;
    //     popchange();
    // }else if($(this).hasClass('next')){  //다음버튼 클릭
    //     if(ind==total-1)ind=-1;  // 0 1 2 3 0 1 2 3 ...
    //     ind++;
    //     popchange();
    // }

    // });
    // });