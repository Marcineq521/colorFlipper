const flipBtn=document.getElementById("flipBtn");
const currentColorDiv=document.getElementById("currentColor");



function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

flipBtn.addEventListener("click",function(){
    document.body.style.backgroundColor=`rgb(${getRandomInt(255)},${getRandomInt(255)}, ${getRandomInt(255)})`;
    currentColorDiv.innerHTML="Current color is "+document.body.style.backgroundColor;

    
})

