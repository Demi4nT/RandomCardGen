/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector(".number").innerHTML = elnumero;
  document.querySelector(".top-suit").innerHTML = lapinta;
  document.querySelector(".bottom-suit").innerHTML = lapinta;
};

let numeros = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let elnumero = numeros[Math.floor(Math.random() * numeros.length)];

let pintas = ["♥", "♠", "♣", "♦"];
let lapinta = pintas[Math.floor(Math.random() * pintas.length)];

if (lapinta == "♥" || lapinta == "♦") {
  document.getElementById("pinta1").style.color = "red";
} else {
  document.getElementById("pinta1").style.color = "black";
}

if (lapinta == "♥" || lapinta == "♦") {
  document.getElementById("pinta2").style.color = "red";
} else {
  document.getElementById("pinta2").style.color = "black";
}
