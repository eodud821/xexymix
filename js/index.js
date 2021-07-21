$(document).ready(function(){
    toggle();
});


function toggle(){
    var $activeTarget = $('header > div > div');

    $('header > div > nav > button').click(function(){
        $activeTarget.toggleClass('active');
    });
}