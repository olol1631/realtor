$(document).ready(function(){
    $('.feedback__items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1110,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,  
                dots: true,
              }
            }
        ]
    });

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll>100){
            $('.main-page__top').addClass('menu-fixed');
        } else {
            $('.main-page__top').removeClass('menu-fixed');
        }
    })
    //свернуть меню
    $('.burger').click(function(event){
        $('.burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.menu-link, .main-page__tel').click(function(event){
        $('.burger, .menu').removeClass('active');
        $('body').removeClass('lock');
    })
    
    $(".menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href');
        console.log(id);
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        var top = $(id).offset().top - 60;
        console.log(top);
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
  });