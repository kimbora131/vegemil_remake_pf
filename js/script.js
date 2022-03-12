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
        console.log(top)
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
    


})
