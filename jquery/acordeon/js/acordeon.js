
//opcion 1
// $('.faq h2').on('click', function () {
//     $(this).next().slideToggle(400);
// });

$('.faq h2').on('click', desplegar)

function desplegar() {

    var contenido = $(this).next();

    $('.faq p').slideUp(400);
    $('.faq h2').removeClass('titulo');

    if (contenido.css('display') == 'none') {
        //desplegar
        contenido.slideDown(400);
        $(this).addClass('titulo');

    }
    else {
        //replegar
        contenido.slideUp(400);

    }



}