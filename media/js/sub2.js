// -----서브비주얼 배경-----
$(document).ready(function() {
    var screenSize, screenHeight;
  
    function screen_size(){
        screenSize = $(window).width(); 
        screenHeight = $(window).height(); 
  
        $("#content").css('margin-top',screenHeight);
        
        if( screenSize > 768) {           
            $("#imgBG").attr('src','./images/sub2/sub_main2.png'); //큰이미지
        }else
            $("#imgBG").attr('src','./images/sub2/sub_main2.png'); //작은이미지
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


// player 만들기~
const musicWrap = document.querySelector(".playerWrap");
const musicImg = musicWrap.querySelector(".playerImg img");
const musicName = musicWrap.querySelector(".playInfo li");
const musicAudio = musicWrap.querySelector("#main_audio");
const musicPlay = musicWrap.querySelector("#controlPlay");
const musicPrevBtn = musicWrap.querySelector("#controlPrev");
const musicNextBtn = musicWrap.querySelector("#controlNext");
const musicProgress = musicWrap.querySelector(".playerProgress");
const musicProgressBar = musicProgress.querySelector(".bar");
const musicProgressCurrent = musicProgress.querySelector(".current");
const musicProgressDuration = musicProgress.querySelector(".duration");
const MusicListBtn = musicWrap.querySelector("#controlList");

const musicAudio2 = document.querySelector(".album2 #main_audio");
const musicAudio3 = document.querySelector(".album3 #main_audio");

let musicIndex = 1;
let musicIndex2 = 1;
let musicIndex3 = 1;

let length1=$('.album1 .playInfo li').size();
let length2=$('.album2 .playInfo li').size();
let length3=$('.album3 .playInfo li').size();

$('.album1 .playInfo li:eq(0)').css('color','black');
$('.album2 .playInfo li:eq(0)').css('color','black');
$('.album3 .playInfo li:eq(0)').css('color','black');

// 음악과 관련된 모든 것 load
function loadMusic(k,num){
    if(k==1){
        musicAudio.src = `./music/music1-${num}.mp3`;
    }else if(k==2){
        $('.album2 #main_audio').attr('src','./music/music2-'+num+'.mp3');
    }else if(k==3){
        $('.album3 #main_audio').attr('src','./music/music3-'+num+'.mp3');
    }
}

// 플레이
function playMusic(k){
    if(k==1){
        musicWrap.classList.add("paused");
        musicPlay.setAttribute("title", "일시정지")
        musicPlay.setAttribute("class", "fa-solid fa-pause")
        musicAudio.play();
        musicImg.classList.add("current");
        $('.album1 .playInfo li').css('color','#fff');
        $('.album1 .playInfo li:eq('+ (musicIndex-1) +')').css('color','black');
    }else if(k==2){
        $('.album2 .playerWrap').addClass("paused");
        $('.album2 #controlPlay').attr("title", "일시정지");
        $('.album2 #controlPlay').attr("class", "fa-solid fa-pause");
        musicAudio2.play();
        $('.album2 .playerImg img').addClass("current");
        $('.album2 .playInfo li').css('color','#fff');
        $('.album2 .playInfo li:eq('+ (musicIndex2-1) +')').css('color','black');
    }else if(k==3){
        $('.album3 .playerWrap').addClass("paused");
        $('.album3 #controlPlay').attr("title", "일시정지");
        $('.album3 #controlPlay').attr("class", "fa-solid fa-pause");
        musicAudio3.play();
        $('.album3 .playerImg img').addClass("current");
        $('.album3 .playInfo li').css('color','#fff');
        $('.album3 .playInfo li:eq('+ (musicIndex3-1) +')').css('color','black');
    }
   
}

// 일시정지
function pauseMusic(k){
    if(k==1){
        musicWrap.classList.remove("paused");
        musicPlay.setAttribute("title", "재생")
        musicPlay.setAttribute("class", "fa-solid fa-play")
        musicAudio.pause();
        musicImg.classList.remove("current");
    }else if(k==2){
        $('.album2 .playerWrap').removeClass("paused");
        $('.album2 #controlPlay').attr("title", "재생");
        $('.album2 #controlPlay').attr("class", "fa-solid fa-play");
        musicAudio2.pause();
        $('.album2 .playerImg img').removeClass("current");
    }else if(k==3){
        $('.album3 .playerWrap').removeClass("paused");
        $('.album3 #controlPlay').attr("title", "재생");
        $('.album3 #controlPlay').attr("class", "fa-solid fa-play");
        musicAudio3.pause();
        $('.album3 .playerImg img').removeClass("current");
    }
  
}

// 이전곡 듣기
function prevMusic(num){
    if(num==1){
        musicIndex--;
        musicIndex < 1 ? musicIndex = length1 : musicIndex = musicIndex;
        loadMusic(num,musicIndex);
        playMusic(1);
    }else if(num==2){
        musicIndex2--;
        musicIndex2 < 1 ? musicIndex2 = length2 : musicIndex2 = musicIndex2;
        loadMusic(num,musicIndex2);
        playMusic(2);
    }else if(num==3){
        musicIndex3--;
        musicIndex3 < 1 ? musicIndex3 = length3 : musicIndex3 = musicIndex3;
        loadMusic(num,musicIndex3);
        playMusic(3);
    }

}

// 다음곡 듣기
function nextMusic(num){
    if(num==1){
        musicIndex++;
        musicIndex > length1 ? musicIndex = 1 : musicIndex = musicIndex;
        loadMusic(num,musicIndex);
        playMusic(1);
    }else if(num==2){
        musicIndex2++;
        musicIndex2 > length2 ? musicIndex2 = 1 : musicIndex2 = musicIndex2;
        loadMusic(num,musicIndex2);
        playMusic(2);
    }else if(num==3){
        musicIndex3++;
        musicIndex3 > length3 ? musicIndex3 = 1 : musicIndex3 = musicIndex3;
        loadMusic(num,musicIndex3);
        playMusic(3);
    }
}

// 재생 일시정지
musicPlay.addEventListener("click", ()=>{
    const isMusicPaused = musicWrap.classList.contains("paused");
    isMusicPaused ? pauseMusic(1) : playMusic(1);
})

musicPrevBtn.addEventListener("click", ()=>{
    prevMusic(1);
});
musicNextBtn.addEventListener("click", ()=>{
    nextMusic(1);
});

$('.album2 #controlPlay').click(function(){
    const isMusicPaused = $('.album2 .playerWrap').is(".paused");
    isMusicPaused ? pauseMusic(2) : playMusic(2);
});
$('.album2 #controlPrev').click(function(){
    prevMusic(2);
});
$('.album2 #controlNext').click(function(){
    nextMusic(2);
});


$('.album3 #controlPlay').click(function(){
    const isMusicPaused = $('.album3 .playerWrap').is(".paused");
    isMusicPaused ? pauseMusic(3) : playMusic(3);
});
$('.album3 #controlPrev').click(function(){
    prevMusic(3);
});
$('.album3 #controlNext').click(function(){
    nextMusic(3);
});

