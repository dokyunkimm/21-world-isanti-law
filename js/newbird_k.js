






$(function(){

    //var ftTop = $('.foot_bottom').offset().top;
    //var btnTop = $('.law_wrap .left_text_fixed');
    //var btnTopM = $('.law_wrap .m_go_top_btn ');
    var btnJoin = $('.join_btn');
    //console.log(ftTop);



    $( window ).scroll( function() {
        if($(window).scrollTop() + ($(window).outerHeight()/2) >= $(".footer").offset().top){
            $(".law_wrap .left_text_fixed").addClass("on absol");
            btnJoin.addClass('absol');
            $(".header").removeClass('fadeIn');
            $(".m_floating_btn").removeClass('fadeIn');
            $(".m_go_top_btn").addClass("down absol");
        } else {
            $(".law_wrap .left_text_fixed").removeClass("on absol");
            btnJoin.removeClass('absol');
            $(".header").addClass('fadeIn');
            $(".m_floating_btn").addClass('fadeIn');
            $(".m_go_top_btn").removeClass("down absol");
        }

        if($(window).scrollTop() > 0){
            $(".law_wrap .left_text_fixed").addClass("top");
        } else {
            $(".law_wrap .left_text_fixed").removeClass("top");
        }


        // if($(window).scrollTop() + $(window).outerHeight() > ftTop) {
        //     btnTop.addClass('absol');
        //     btnJoin.addClass('absol');
            
        //     btnTopM.addClass('absol');
        // } else {
        //     btnTop.removeClass('absol');
        //     btnJoin.removeClass('absol');

        //     btnTopM.removeClass('absol');
        // }


    });
    
    $(".top_btn, .m_go_top_btn").click(function(){
        $("html, body").animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});

