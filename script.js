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

 function newGrid(){
    const newSize = parseInt(prompt("enter the amount of squares in one side"));
    if (newSize < 100) {
        creatGrid(newSize);
        
    }
    else{
        alert("square size should be max of 100");
    }
}
resizeButton.addEventListener("click",newGrid);




