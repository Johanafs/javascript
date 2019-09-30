var contenedor = $('.contenedor');

contenedor.hover(entra, sale);

function entra() {
    $(this).find('.info').stop().animate({ 'left': '0px' })
}

function sale() {
    $(this).find('.info').stop().animate({ 'left': '-400px' })
}