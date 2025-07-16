import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => { /* NOTE: ARROW functions are best used when using classes or REACT */
   //write your code here 
   document.querySelector('.card').classList.add(generateRandSuite());
   document.querySelector('.card').innerHTML = (generateRandNum());

};

let generateRandNum = () =>{
        let cente = ["Q","2","3","4","5","6","7","8","9","10","A","J","K"];
        let numIndex = Math.floor(Math.random() * cente.length);

        return cente[numIndex];
    };

let generateRandSuite = () => {
        let suits = ["diamonds", "spades","clubs", "hearts", "hearts2", "diamonds2"];
        let suitsIndex = Math.floor(Math.random() * suits.length);

        return suits[suitsIndex];
    };