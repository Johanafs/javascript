var stock = parseInt(prompt('Dime cuanto stock tienes'));

function getStock() {
    document.getElementById('mensaje').innerText = stock;
}

function addStock(pNumeroProductos) {
    stock = stock + pNumeroProductos;
    //stock += pNumeroProductos
}

function comprarProducto(pCantidadComprados) {
    if (pCantidadComprados <= stock) {
        stock -= pCantidadComprados;
        return comprobarStock()
    }
    else {
        console.log('No tienes suficientes productos en tu tienda, nuestro stock es de ' + stock);
    }
}

function comprobarStock() {
    var mensaje = (stock < 5) ? "te quedan " + stock + " unidades" : "tu stock es sufiente";

    return mensaje;
}