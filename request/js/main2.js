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
    */

    for (var i = 0; i < pListaPost.length; i++) {

        //titulo
        var h2 = document.createElement('h2');
        var titulo = document.createTextNode(pListaPost[i].title);

        h2.appendChild(titulo);

        //parrafo

        var p = document.createElement('p');
        var texto = document.createTextNode(pListaPost[i].body);

        p.appendChild(texto);

        //enlace

        var a = document.createElement('a');
        a.href = enlace + '/' + pListaPost[i].id;
        a.innerText = "Enlace a noticia";

        //articulo

        var article = document.createElement('article');
        article.className = (i % 2) ? "impar" : "par";

        //tiro todo en el article por orden

        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(a);

        contenedor.appendChild(article);

    }


}



