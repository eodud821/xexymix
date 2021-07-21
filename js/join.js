$(document).ready(function(){
    sayHello();
});

function sayHello(){
    $('.btn_nextStep').click(function(){
        alert('회원가입이 완료되었습니다.');
        window.location.href = "/";
    });
}