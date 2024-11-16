const container= document.querySelector(".container");
const resizeButton = document.querySelector("#resizeButton");

function creatGrid(size){
  
    container.innerHTML = '';
   
    for (let i = 0; i < size * size; i++) {
     const newDiv = document.createElement("div");
     newDiv.classList.add("child");
     container.appendChild(newDiv);
 
    }
    
 }
 creatGrid(16);

