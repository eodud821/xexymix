$(document).ready(function(){
    var popTarget = $(".popup");
    var popClose = $(".pop_close");
    popup($(".callPopup"),popTarget,popClose);

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
function popup(popOpen,popTarget,popClose){
    popOpen.click(function(){
        popTarget.addClass("activate");
    });
    popClose.click(function(){
        popTarget.removeClass("activate");
    });
}