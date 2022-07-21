// Daniel Popovici - script.js 7/21/2022

//function that creates all the grid squares (make them divs?)

function createGrid(){
    let pageContainer = document.querySelector("#pageContainer");
    let squareGrid = document.createElement("div");
    squareGrid.setAttribute("id","grid");
    pageContainer.appendChild(squareGrid);

    for(let i = 1;i<=16;i++){
        let square = document.createElement("div");
        square.setAttribute("class","square");
        squareGrid.appendChild(square);
    }
}

createGrid();



