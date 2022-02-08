if ($(window).width() > 768) {
    new fullScroll({
        mainElement: "main",
        displayDots: true,
        dotsPosition: "right",
        animateTime: 0.7,
        animateFunction: "ease",
    });
}

feather.replace()

$('.hamburgermenu').on('click', function(){
    $('div.hamburgermenu span:nth-child(1)').toggleClass('rotateTop');
    $('div.hamburgermenu span:nth-child(3)').toggleClass('rotateBottom');
    $('div.hamburgermenu span:nth-child(2)').toggleClass('hide');
    $('ul.list').toggleClass('slide');


})