$(document).ready(function(){
    price();
});

function price(){
    var valueData = $("#price_field").val();
    console.log(valueData);
    $('.detail_purchase div form fieldset ul li:nth-child(3) select').click(function(){
        $('#price_total').val(valueData);
    });
}


