$(document).keyup(function () {
    n1 = $('#n1').val();
    n2 = $('#n2').val();

    if  ( parseInt(n1) > parseInt(n2)) {
        $('#res').text("el numero mayor es: " + n1);
    }
    else {
        $('#res').text("el numero mayor es: " + n2);
    }
});

