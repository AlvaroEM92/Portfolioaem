$(document).ready(function() {
    console.log("Hola.");
    //controlar los colores de los iconos SVG
    function changeFill () {
        if ($(window).width() <= 768) {
            $('.icon-fixed').attr('fill', '#0F172A');
        } else {
            $('.icon-fixed').attr('fill', '#94a3b8');
        }
    }
    $(window).resize(function() {
        changeFill();
    })
    changeFill();
    //evento para scrolear las secciones
    $('.nav-list-item').on('click', function() {
        var section = $(this).data('section');
        var target = $('.' + section);

        $('.nav-list-item').removeClass('active')
        $(this).addClass('active')
        if (target.length) {
            var offset = target.offset().top -295; // 100px desde el top de la pantalla
            $('html, body').animate({
                scrollTop: offset
            }, 500); // Duración del desplazamiento en milisegundos
        }
        $('.section-content').removeClass('visible')
        target.addClass('visible')
    });
});

