$(document).ready(function () {
    //ham nay giup kiem tra class: neu co thi xoa di, neu khong thi them vao
   
    $('.nutmenu').click(function (e) { 
        e.preventDefault();

        $('.icon1').toggleClass('hide');
        $('.icon2').toggleClass('hide');
        $('nav').toggleClass('display');
    });
    //cuon man hinh xuong
    $('.nutheader').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi-2').offset().top
        },400);
    });
   
    
    

    //kiem tra xem vi tri cua khoi 2 la o dau va in ra man hinh
    //console.log($('.khoi-2').offset().top);

    $('.nut-den').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi-3').offset().top
        },400);
    });
    $('.scrollTop').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        },400);
        
    });

    $('.item1').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        },400,function name(params) {
            $('nav').removeClass('display');
            $('.icon1').removeClass('hide');
            $('.icon2').addClass('hide');
        });
    });
    $('.item2').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.superpower').offset().top
        },400,function name(params) {
            $('nav').removeClass('display');
            $('.icon1').removeClass('hide');
            $('.icon2').addClass('hide');
        });
    });
    $('.item3').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.portforlio').offset().top
        },400,function name(params) {
            $('nav').removeClass('display');
            $('.icon1').removeClass('hide');
            $('.icon2').addClass('hide');
        });
    });
    $('.item4').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.about').offset().top
        },400,function name(params) {
            $('nav').removeClass('display');
            $('.icon1').removeClass('hide');
            $('.icon2').addClass('hide');
        });
    });
    $('.item5').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.diploma').offset().top
        },400,function name(params) {
            $('nav').removeClass('display');
            $('.icon1').removeClass('hide');
            $('.icon2').addClass('hide');
        });
    });
    $('.item6').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.contact').offset().top
        },400,function name(params) {
            $('nav').removeClass('display');
            $('.icon1').removeClass('hide');
            $('.icon2').addClass('hide');
        });
    });

    
   
    // $('.scrollTop').fadeOut();
    $('.scrollTop').hide();


    //su kien cuon chuot
    $(window).scroll(function () { 
        window.pageYOffset//dung de tinh vi tri minh dang cuon den
         

        if (window.pageYOffset >= 200) {
            $('.scrollTop').fadeIn();//co the nhap tham so thoi gian vao ngoac nay
        } else {
            $('.scrollTop').fadeOut();
        }
    });
});