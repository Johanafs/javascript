var trabajo = $('.trabajo');

trabajo.on('click', cargarModal);



function cargarModal() {

    var imagen = $(this).find('img').attr('src');
    var subtitulo = $(this).find('h4').text();
    var titulo = $(this).find('h3').text();


    $('body').append(`<div class="modal">
                                <div class="manto"></div>   
                                 <div class="contenedor">
                                   <img src="${imagen}">
                                      <h4>${subtitulo}</h4>
                                       <h3>${titulo}</h3>
                                          <div class="cerrar">
                                            <img src="images/cerrar.png" alt="cerrar">
                                         </div>
                                 
                                 </div>
                                
                        </div>`);


    $('.modal').fadeIn(400);
    $('.modal .contenedor').animate({ 'top': '10%' });
    $('.cerrar').on('click', cerrarModal);
    $(document).on('keydown', cerrarModal);
    $('.manto').on('click', cerrarModal);

}


function cerrarModal(e) {

    if (e.keyCode == 27 || e.type == "click") {

        $('.modal .contenedor').animate({ 'top': '7%' });
        $('.modal').fadeOut(400, function () {
            $('.modal').remove();
        });
    }
}