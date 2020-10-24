const btn =document.getElementById("btn");
const R = document.getElementById("R");
const G = document.getElementById("G");
const B = document.getElementById("B");
let RGB = [R.value, G.value, B.value];
let RGBhex = [];
let nmb = 255;
let hex = nmb.toString(16);



btn.addEventListener("click",prevod());

function prevod(){
    RGB.forEach(function(value){
        if(value > 255 || value < 0){
            console.log(`${value} neni v platnem rozsahu`);
        }else{
           RGBhex.push(parseInt(value).toString(16));
        }
    })
    console.log(RGBhex);    
}   