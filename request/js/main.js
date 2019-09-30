var enlace = "https://jsonplaceholder.typicode.com/posts";

var contenedor = document.querySelector('.contenedor');

var miJson = new XMLHttpRequest();

//abrir la url que me pasan para poder hacer la peticion.

miJson.open('GET', enlace, true);

//hago el pedido y me lo envio.

miJson.send();

miJson.addEventListener('readystatechange', cargaArchivo);


function cargaArchivo(e) {

    if (e.target.readyState == 4 && e.target.status == 200) {
        //yo tengo todo y la conexion correcta.
        var listaPost = new Array();

        listaPost = JSON.parse(e.target.responseText);
        pintarLista(listaPost);
    }
}


function pintarLista(pListaPost) {

    /*
        <article class="par">
            <h2>Titulo de la noticia</h2>
            <p>texto breve</p>
            <a href="">enlace a la noticia entera</a>
        </article>

         <article class="par"><h2>Titulo de la noticia</h2><p>texto breve</p><a href="">enlace a la noticia entera</a></article>
    */
    var contenido = "";
    for (var i = 0; i < pListaPost.length; i++) {

        var estado = (i % 2 == 0) ? "par" : "impar";
        contenido += `<article class="${estado}">
            <h2>${pListaPost[i].title}</h2>
            <p>${pListaPost[i].body}</p>
            <a href="${enlace}/${pListaPost[i].id}">enlace a la noticia entera</a>
        </article>`
    }

    contenedor.innerHTML = contenido;

}



