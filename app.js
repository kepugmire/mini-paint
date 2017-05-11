
$('document').ready(function () {

    var $box = $('.box'),
        $reset = $('#reset'),
        color = $('white');

    $box.on('click', function () {
        $(this).addClass('white');
    });

    $box.on('dblclick', function () {
        $(this).removeClass('white');
    });

    $reset.on('click', function() {
        $box.removeClass('white red green blue yellow');
    });

    $('#red').on('click', function() {
        color = 'red';
    });

    $('#blue').on('click', function() {
        color = 'blue';
    });

    $('#green').on('click', function() {
        color = 'green';
    });

    $('#yellow').on('click', function() {
        color = 'yellow';
    });

    $('#white').on('click', function() {
        color = 'white';
    });



});