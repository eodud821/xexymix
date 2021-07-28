$(document).ready(function(){
    toggle();
    $('.slider').bxSlider({
        speed: 750,
        infiniteLoop: true,
        touchEnabled: false,
        pager: true
    });
});


function toggle(){
    var $activeTarget = $('header > div > div');

    $('header > div > nav > button').click(function(){
        $activeTarget.toggleClass('active');
    });
}