const flipBtn=document.getElementById("flipBtn");
const currentColorDiv=document.getElementById("currentColor");

colors=["red","blue","green","black","yellow"];

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

flipBtn.addEventListener("click",function(){
    document.body.style.backgroundColor=colors[getRandomInt(colors.length)];
    currentColorDiv.innerHTML="Current color is "+document.body.style.backgroundColor;

   
})

