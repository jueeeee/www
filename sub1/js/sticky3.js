$(document).ready(function () {
    
    $('.tab_menu li:eq(0)').find('a').addClass('spy');

    var menuh = $('.title_area').offset().top + $('.title_area').height();
    
    var history1 = $('#content .main_box>div:eq(0)').offset().top -180;
    var history2 = $('#content .main_box>div:eq(1)').offset().top -180;
    var history3 = $('#content .main_box>div:eq(2)').offset().top -180;
    var history4 = $('#content .main_box>div:eq(3)').offset().top -180;


    // 스크롤 이벤트
    $(window).on('scroll',function(){
        
        var scroll = $(window).scrollTop();

        // tab on
        if(scroll > menuh){
            $('.tab_box').addClass('navOn');
            $('#headerArea').hide();
            $('.history_wrap').css('marginTop',150); // 탭 높이만큼 마진
        } else {
            $('.tab_box').removeClass('navOn');
            $('#headerArea').fadeIn('fast');
            $('.main_box').css('marginTop','');
        }


        // tab spy
        $('.tab_box ul li').find('a').removeClass('spy');
        if(scroll >= 0 && scroll <= history2){
            $('.tab_box ul li:eq(0)').find('a').addClass('spy');

        } else if(scroll>history2 && scroll<=history3){
            $('.tab_box ul li:eq(1)').find('a').addClass('spy');

        } else if(scroll>history3 && scroll<=history4){
            $('.tab_box ul li:eq(2)').find('a').addClass('spy');
        } else if(scroll>history4){
            $('.tab_box ul li:eq(3)').find('a').addClass('spy');
        }

        
        // // 연혁 붙이기
        // $('.main').removeClass('spy');
        // if(scroll > tabmove+184 && scroll < history2-10){
        //     $('.main:eq(0)').addClass('spy');
        // } else if(scroll>=history2-10 && scroll<history3-10){
        //     $('.main:eq(1)').addClass('spy');
        // } else if(scroll>=history3-10 && scroll<history4-10){
        //     $('.main:eq(2)').addClass('spy');
        // } else if(scroll>history4){
        //     $('.main:eq(3)').addClass('spy');
        // } else {
        //     //$('.year').removeClass('current');
        // }

    });



    // tab click, scroll move
    $('.tab_box li a').click(function(e){
        e.preventDefault();

        var ind = $(this).index('.tab_box li a');
        var value = $('.main_box .main:eq(' + ind + ')').offset().top - 100;
        
        // value의 위치로 움직여라
        $("html,body").stop().animate({"scrollTop":value},500);
    });
});