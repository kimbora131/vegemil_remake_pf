$(function(){
//****************************************섹션1 (section1)
    //섹션1 텍스트 슬라이드
    function slide1(){$('.Sld1_item').last().prependTo($('.s1_Sld1'))}
    setInterval(slide1, 2000)

        $('.sampleBtn').on({
        mouseenter : function(){
            if(winWidth > 500){
                $('.sampleBtn').css({
                    'animation': 'sampleBtnAni 1s forwards'
                })
            }
        },
        mouseleave : function(){
            if(winWidth > 500){
                $('.sampleBtn').css({
                    'animation': 'sampleBtnRevAni 0.5s forwards'
                })
            }  
        }
    })

    
    //섹션1 이미지 슬라이드

    //네비게이션(dot)
    let Sld2item = $('.Sld2_item')
    let Sld2itemCount = Sld2item.length
    for(let i = 0 ; i < Sld2itemCount ; i++){
        let dot = "<a href='#' class='dot'></a>"
        $(".dots-Box").append(dot)}

    //이미지
    let index = 0
    $('.Sld2_item').eq(index).addClass('active')
    $('.dot').eq(index).addClass('active')

    function active(){
        $('.Sld2_item').removeClass('active')
        $('.dot').removeClass('active')
        $('.Sld2_item').eq(index % Sld2itemCount).addClass('active')
        $('.dot').eq(index  % Sld2itemCount).addClass('active')
    }

    function imgSld(){
        index++
        active()
    }
    setInterval(imgSld, 3000)

    //네비게이션 클릭 시
    $('.dot').on('click', function(){
        let n = $(this).index()
        index = n
        active(index)
    })



//****************************************섹션2 (section2)     
    $(window).scroll(function(){
        let top = $(this).scrollTop()
        
        if (top>300){
            $('.section2 .content .title').css('animation', 'titleDown 1s both ease-out');
        }else{
            $('.section2 .content .title').css('animation', 'titleUp 1s both ease-out');
        }

        if(top>1250){
            $('.photo').addClass('photoSlide')
        }else{
            $('.photo').css('display','block');
        }
        

    })



    //섹션2 원형 슬라이드

    let rotate = 0
    let currentRotate = 0

    function rotateCircle(){
        if(rotate > 0){
            currentRotate += 120
            $('.s2_Sld2').css('transform', 'translateX(-50%) rotate('+ currentRotate + 'deg)')
        }else{
            currentRotate -= 120
            $('.s2_Sld2').css('transform', 'translateX(-50%) rotate('+ currentRotate + 'deg)')
        }
    }

    // 원형슬라이드의 제목
    let titleItem = $('.titleItem');
    let titleItemMax = titleItem.length;

    let titleNum = 0

    function addACtive(){

        if(titleNum == titleItemMax) titleNum = 0
        if(titleNum == -1) titleNum = titleItemMax-1
        titleItem.stop().fadeOut(500).removeClass('active')
        titleItem.eq(titleNum).stop().fadeIn(500).addClass('active')

        console.log(titleNum)
    }
    addACtive()



    //왼쪽 버튼 클릭
    $('.section2 .arrowBtn .leftBtn').on('click', function(){
        rotate++
        if(winWidth < 500){
            $('.moCircleSlide img').first().appendTo($('.moCircleSlide'))
        }else{
            rotateCircle()          //원형슬라이드 회전(시계방향)
        }
        rotate = 0

        titleNum--
        addACtive()
        
    });
    //오른쪽 버튼 클릭
    $('.section2 .arrowBtn .rightBtn').on('click', function(){
        rotate--
        if(winWidth < 500){
            $('.moCircleSlide img').last().prependTo($('.moCircleSlide'))
        }else{
            rotateCircle()          //원형슬라이드 회전(시계방향)
        }
        rotate = 0

        titleNum++
        addACtive()
        
    });

    
    
    //****************************************섹션4 (section4) 
    //육아꿀팁 대방출 슬라이드

    let tipLbtn = $('.tip-box .arrowBtn .leftBtn')
    let tipRbtn = $('.tip-box .arrowBtn .rightBtn')
    let tips = $('.tips')
    let tip = $('.tip')
    let tipClick = 0
    
    //팁 움직이는 코드
    function tipRotate(){
        if(tipClick>0){
            tips.find($('.tip').first()).appendTo(tips)
        }else{
            tips.find($('.tip').last()).prependTo(tips)
        }
        tipClick = 0
        tip.delay(300).animate({'top': '0px', 'opacity':'1'}, 300)
    }


    //왼쪽 버튼 클릭
    tipLbtn.on('click', function(){
        tipClick++
        tip.stop().animate({'top': '-10px', 'opacity':'0'}, 300)
        setTimeout(tipRotate, 300)
        
    });
    //오른쪽 버튼 클릭
    tipRbtn.on('click', function(){
        tipClick--
        tip.stop().animate({'top': '-10px', 'opacity':'0'}, 300)
        setTimeout(tipRotate, 300)         
        tipClick = 0
    });

    


//반응형 윈도우 가로 사이즈 감지
    let winWidth = $(window).width()
    let header = $('header')
    let moLogo = '<div class="logo"><img src="img/logo.gif" alt="logo"></div>'
    let moHamberger = '<div class="hamberger"><span></span><span></span><span></span></div>'

    let N = 1

    if(winWidth < 500){
        
        //이미지 슬라이드 갯수만큼 새로 넣어주기
        for(let i = 0 ; i < 3; i++){
            let moCircleImg = '<img src="img/step0'+ N +'.jpg" alt="모바일 원형 슬라이드">'
            $('.moCircleSlide').prepend(moCircleImg)
            N++
        }
    }
    // console.log(winWidth)
    
    
    
})
