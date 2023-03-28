$(function () { //

    /**
     * @다국어선택
     * 
     */
    $('#langBtn').click(function(){
        url=$('#langList').val();
        window.open(url);
    })


    /**
     *  @메인슬라이드
     * 
     * 
     */
    const mainSlide = new Swiper('.sc-slide .swiper',{
        loop:true,
        autoplay: {
            delay: 3300,
            disableOnInteraction: false,
        },

        pagination:{
            el:'.fraction',
            type:"fraction"
        },
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        },
        on:{
            "slideChange":function(){
                if(this.realIndex >= 4){
                    $('.sc-slide .group-nav .btn-nav.citizen').addClass('active').siblings().removeClass('active')
                }else{
                    $('.sc-slide .group-nav .btn-nav.news').addClass('active').siblings().removeClass('active')
                }
            }
        }

    })

    $('.sc-slide .autoplay').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active').attr('aria-label','자동재생 정지');
            mainSlide.autoplay.start();
        }else{
            $(this).addClass('active').attr('aria-label','자동재생 적용');
            mainSlide.autoplay.stop();
        }
    })


    $('.sc-slide .group-nav .btn-nav').click(function(e){
        e.preventDefault();
        idx=$(this).data('idx');
        $(this).addClass('active').siblings().removeClass('active');

        mainSlide.slideTo(idx);
    })



    /**
     * @팝업배너
     * 
     */

    const bannerSlide = new Swiper('.sc-bannerslide .swiper',{
        slidesPerView:3,
        spaceBetween:43,
        loop:true,
        autoplay: {
            delay: 3300,
            disableOnInteraction: false,
        },
        pagination:{
            el:'.fraction',
            type:"fraction"
        },
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        }
    })



    $('.sc-bannerslide .autoplay').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active').attr('aria-label','자동재생 정지');
            bannerSlide.autoplay.start();
        }else{
            $(this).addClass('active').attr('aria-label','자동재생 적용');
            bannerSlide.autoplay.stop();
        }
    })



    /**
     * @아코디언메뉴
     */
    
    $('.sc-related .btn-related').click(function(){
        if($(this).hasClass('active')){
            $('.sc-related .btn-related').removeClass('active').siblings('.sub-area').slideUp();
            return false;
        }
        $('.sc-related .btn-related').removeClass('active').siblings('.sub-area').slideUp();
        $(this).addClass('active').siblings('.sub-area').slideDown();
    });




    /**
     * @tab키_접근성
     */

    //리팩토링 전
    // $('.sc-related .sub-item:first-child a').keydown(function(e){
    //     key = e.keyCode;
    //     if(key === 9 && e.shiftKey){
    //         $('.sc-related .btn-related').removeClass('active').siblings('.sub-area').slideUp();
    //     }
    // })
    // $('.sc-related .sub-item:last-child a').keydown(function(e){
    //     key = e.keyCode;
    //     if(key === 9 && !e.shiftKey){
    //         $('.sc-related .btn-related').removeClass('active').siblings('.sub-area').slideUp();
    //     }
    // })

    //리팩토링한 소스
    $('.sc-related .sub-item a').keydown(function(e) {
        const key = e.keyCode;
        const firstChild = $(this).parent().is(':first-child');
        const lastChild = $(this).parent().is(':last-child');
        const shift = e.shiftKey;
        console.log(firstChild);
        if((key === 9 && shift && firstChild) || (key === 9 && !shift && lastChild)){
            $('.sc-related .btn-related').removeClass('active').siblings('.sub-area').slideUp();
        }
    });




     /**
     * @업버튼
     */

    $(window).scroll(function(){
        curr=$(this).scrollTop();
        if(curr >= 100){
            $('#topBtn').addClass('show')
        }else{
            $('#topBtn').removeClass('show')
        }
    })

    $('#topBtn').click(function(e){
        e.preventDefault();
        window.scrollTo({top:0,behavior:"smooth"})
    })




}) //end