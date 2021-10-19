
var hotel= {
    name: "Eurostars Palace",
    location: "Córdoba",
    img: "foto_hotel.jpg",
};

document.getElementById("hotel-name").innerHTML = "Eurostars Palace";
document.getElementById("hotel-location").innerHTML = "Córdoba";
document.getElementById("image").src = "foto_hotel.jpg"


var score = prompt("Puntuación del 1 al 5");
document.getElementById("score").innerHTML = score + " estrellas";

var review = confirm("¿Quieres que la reseña sea anónima?");
document.getElementById("review").checked= review;



