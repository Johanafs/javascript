// let viajando = function (destino) {
//     return `viajando a la ciudad de: ${destino}`
// }



let viajando = (destino, duracion = 5) => `viajando a la ciudad de: ${destino} por ${duracion} dias`;

let viaje = viajando('Paris');

console.log(viaje);
