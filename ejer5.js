$(document).ready(function() {
    // Mostrar y ocultar el segundo <div> al pasar el mouse por el primer <div>
    $('#text1').hover(
        function() {
            $('#text2').removeClass('hidden');
        },
        function() {
            $('#text2').addClass('hidden');
        }
    );

    // Alternar el tamaño de la imagen al hacer clic en el <div> id "caja2"
    $('#caja2').click(function() {
        $('#img').toggleClass('enlarged');
    });

    // Agrandar el texto al hacer doble clic en el <div> id "caja3"
    $('#caja3').dblclick(function() {
        $(this).toggleClass('large-text');
    });
});


