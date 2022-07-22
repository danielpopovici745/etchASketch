// Daniel Popovici - script.js 7/21/2022

const pageContainer = document.querySelector("#pageContainer");
const buttonContainer = document.querySelector("#buttonContainer");
const grid = document.createElement("div");
grid.setAttribute("id","grid");
pageContainer.appendChild(grid);
let sides = 16;

//creates the grid of squares

function createGrid(sides){
    for(let i = 1;i<=sides;i++){
        let row = document.createElement("div");
        row.setAttribute("class",`row`);
        grid.appendChild(row);
        for(let i =1; i<=sides;i++){
            let square = document.createElement("div");
            square.setAttribute("class","square");
            row.appendChild(square);
        }
    }
    squares = document.querySelectorAll(".square");
    giveTilesMouseOver(squares);
}

//destroys the grid which will be replaced by a new one by createGrid()

function destroyGrid(){
    squares.forEach(sq => sq.remove());
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => 
        row.remove()
    )
}

//grants each tile a mouseover listener

function giveTilesMouseOver(){
    
    squares.forEach(sq => sq.addEventListener('mouseover',() => sq.setAttribute("style","background-color:#000000; transition: background-color ease 0.3s;"))
    );
}

// Slider

let slider = document.querySelector("#slider");
slider.addEventListener("mouseup",function(){
    sides = document.querySelector("#slider").value;
    destroyGrid();
    createGrid(sides);
});
slider.addEventListener("touchend",function(){
    sides = document.querySelector("#slider").value;
    destroyGrid();
    createGrid(sides);
});

//Reset Button

const resetGrid = document.createElement("button");
resetGrid.setAttribute("id","resetGrid");
resetGrid.textContent = 'RESET';
resetGrid.addEventListener('click',function(){
    squares.forEach(sq => sq.setAttribute("style","background-color:#ffffff; transition: background-color ease 0.3s"))
});
resetGrid.addEventListener('touchdown',function(){
    squares.forEach(sq => sq.setAttribute("style","background-color:#ffffff; transition: background-color ease 0.3s"))
});
buttonContainer.appendChild(resetGrid);


//creates first grid when page loades
createGrid(sides);