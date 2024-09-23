$(document).ready(function(){
    function initSlider() {
        $('.skill-list-container').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        console.log($('.skills-list').html());
    }

    initSlider();

    // Vuelve a ejecutar cuando cambia el tamaño de la ventana
    $(window).resize(function() {
        $('.skill-list-container').slick('unslick'); // Destruye el slider
        initSlider(); // Vuelve a inicializar el slider
    });
});