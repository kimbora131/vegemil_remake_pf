$(function(){

    //섹션1 텍스트 슬라이드
    function slide1(){$('.Sld1_item').last().prependTo($('.s1_Sld1'))}
    setInterval(slide1, 2000)


    //섹션2 이미지 슬라이드

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


    $(window).scroll(function(){
        let top = $(this).scrollTop()
        
        if (top>300){
            $('.section2 .content .title').css('animation', 'titleDown 1s both ease-out');
        }else{
            $('.section2 .content .title').css('animation', 'titleUp 1s both ease-out');
        }

        if(top>1850){
            $('.photo').addClass('photoSlide')
        }else{
            $('.photo').removeClass('photoSlide')
        }
    })



    //***********************섹션2 원형 슬라이드

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

    //원형슬라이드의 제목
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
    $('.arrowBtn .leftBtn').on('click', function(){
        rotate++
        rotateCircle()          //원형슬라이드 회전(시계방향)
        rotate = 0

        titleNum--
        addACtive()
        
    });
    //오른쪽 버튼 클릭
    $('.arrowBtn .rightBtn').on('click', function(){
        rotate--
        rotateCircle()          //원형슬라이드 회전(반시계방향)
        rotate = 0

        titleNum++
        addACtive()
        
    });

    
    






})
