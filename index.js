const btn =document.getElementById("btn");
const R = document.getElementById("R");
const G = document.getElementById("G");
const B = document.getElementById("B");
const vystup = document.getElementById("vystup");
let RGB = [R.value, G.value, B.value];
let RGBhex = [];
let chybne = 0;




btn.addEventListener("click",vypis());

function prevod(value){
        if(value > 255 || value < 0){
            chybne = parseInt(value);
        }else
           RGBhex.push(parseInt(value).toString(16));   
}   

function vypis(){
    prevod(RGB[0]);
    prevod(RGB[1]);
    prevod(RGB[2]);
    if(chybne > 0){
        vystup.innerHTML = `<p>${chybne} neni v rozsahu</p>`;
    }
    else{
        vystup.innerHTML = `<p>#${RGBhex[0]}${RGBhex[1]}${RGBhex[2]}`;
    }
}