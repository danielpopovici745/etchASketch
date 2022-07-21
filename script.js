// Daniel Popovici - script.js 7/21/2022

const pageContainer = document.querySelector("#pageContainer");
const buttonContainer = document.querySelector("#buttonContainer");
const grid = document.createElement("div");
grid.setAttribute("id","grid");
pageContainer.appendChild(grid);
let sides = 16;
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

function destroyGrid(){
    squares.forEach(sq => sq.remove());
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => 
        row.remove()
    )
}

function giveTilesMouseOver(){
    
    squares.forEach(sq => sq.addEventListener('mouseover',() => sq.setAttribute("style","background-color:#000000; transition: background-color ease 0.3s;"))
    );
}

createGrid(sides);


const howManySquaresButton = document.createElement('button');
howManySquaresButton.textContent = '# of Tiles per Side';
howManySquaresButton.addEventListener('click',function(){
    sides = prompt("How many tiles per side would you like? (Enter an integer between 0 and 48");
    if(sides > 47){
        while(sides > 47){
            sides = prompt("Sorry,this many tiles will make the grid disappear. Please enter an integer smaller than 48");
        }
        
    }
    if(sides == undefined || sides == 0){
        while(sides == undefined || sides == 0){
            sides = prompt("How many tiles per side would you like? (Enter an integer between 0 and 48");
        }
        
    }
    
    
    destroyGrid();
    createGrid(sides);
});
buttonContainer.appendChild(howManySquaresButton);


const resetGrid = document.createElement("button");
resetGrid.setAttribute("id","resetGrid");
resetGrid.textContent = 'RESET';
resetGrid.addEventListener('click',function(){
    squares.forEach(sq => sq.setAttribute("style","background-color:#ffffff; transition: background-color ease 0.3s"))
});
buttonContainer.appendChild(resetGrid);




