const btn =document.getElementById("btn");
const R = document.getElementById("R");
const G = document.getElementById("G");
const B = document.getElementById("B");
const vystup = document.getElementById("vystup");
let RGB = [R.value, G.value, B.value];
let RGBhex = [];
let chybne;




btn.addEventListener("click",vypis());

function prevod(value){
        if(value > 255 || value < 0){
            chybne = parseInt(value);
        }else
           RGBhex.push(parseInt(value).toString(16));   
}   

function vypis(){
    
}