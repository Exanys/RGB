const btn =document.getElementById("btn");
const R = document.getElementById("R");
const G = document.getElementById("G");
const B = document.getElementById("B");
const vystup = document.getElementById("vystup");
let RGB = [R.value, G.value, B.value];
let RGBhex = [];
let chybne = 0;




btn.addEventListener("click",function vypis(){
    prevod(RGB[0]);
    prevod(RGB[1]);
    prevod(RGB[2]);
    if(chybne > 0){
        vystup.innerHTML = `<p>RGB barva hexadecimalne: ${chybne} neni v rozsahu</p>`;
    }
    else{
        vystup.innerHTML = `<p>RGB barva hexadecimalne: #${RGBhex[0]}${RGBhex[1]}${RGBhex[2]}</p>`;
    }
    clean();
})

function prevod(value){
        if(value > 255 || value < 0){
            chybne = parseInt(value);
        }else if(value >= 0 && value < 10){
            RGBhex.push(`0${value.toString()}`);
        }else
           RGBhex.push(parseInt(value).toString(16));   
}   
function clean(){
    RGB = [];
    R.value = 0;
    R.value = 0;
    R.value = 0;
}