let lol = prompt("¿Jugás League of Legends? (usar mayúsculas y tildes correspondientes)");
console.log("¿Jugás League of Legends? " + lol);

let respuestaSi = "Sí";
let respuestaNo = "No";

if (lol == respuestaNo) {
    alert("Hacés bien.");
}

if (lol == respuestaSi) {
    alert("Saludos, invocador.")
}

let campeonEscrito = prompt("¿Cuál es tu campeón favorito?");
console.log("Campeón favorito del usuario: ");
console.log(campeonEscrito);

let liga = prompt("¿En qué liga estás? ");
console.log("Liga del usuario: ");
console.log(liga);

let nameInvocador = prompt("¿Cuál es tu nombre de invocador? ");
console.log("Nombre de invocador del usuario: ");
console.log(nameInvocador);

class Campeón {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const aatrox = new Campeón("Aatrox", 4800);
const trundle = new Campeón("Trundle", 3150);
const zed = new Campeón("Zed", 4800);
const garen = new Campeón("Garen", 450);

const arrayCampeonesFav = [aatrox, trundle, zed, garen];
console.log("Mis campeones favoritos del juego son ");
console.log(arrayCampeonesFav)

const buscado = arrayCampeonesFav.find(Campeón => Campeón.nombre ==="Aatrox");
console.log("Mi mejor personaje es " + buscado);
console.log(buscado);