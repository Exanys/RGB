const btn =document.getElementById("btn");
const  R = document.getElementById("R");
const  G = document.getElementById("G");
const B = document.getElementById("B");
const vystup = document.getElementById("vystup");
let RGBhex = [];
//let RGB = [];
let chybne = 0;
let hexa;




btn.addEventListener("click",function(){
    RGB = [R.value, G.value, B.value];
    vypis();
    clean();
})

function prevod(value){
        
        if(value > 255 || value < 0){
            chybne = parseInt(value);
        }else if(value >= 0 && value < 10){
            RGBhex.push(`0${value.toString().toUpperCase()}`);
        }else{  
            hexa = parseInt(value).toString(16).toUpperCase(); 
            if(hexa.length < 2){
                RGBhex.push("0"+hexa);  
            }else{RGBhex.push(hexa);}     
    }
 
}   
function clean(){
    RGB = [];
    RGBhex = [];
    R.value = 0;
    G.value = 0;
    B.value = 0;
    chybne = 0;
}

function vypis(){

    prevod(RGB[0]);
    prevod(RGB[1]);
    prevod(RGB[2]);
    if(chybne > 0){
        vystup.innerHTML = `<p>RGB barva hexadecimalne: ${chybne} není v rozsahu 0 až 250</p>`;
    }
    else{
        vystup.innerHTML = `<p>RGB barva hexadecimalne: #${RGBhex[0]}${RGBhex[1]}${RGBhex[2]}</p>`;
    }

}