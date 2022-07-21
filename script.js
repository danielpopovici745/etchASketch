// Daniel Popovici - script.js 7/21/2022

let pageContainer = document.querySelector("#pageContainer");
let buttonContainer = document.querySelector("#buttonContainer");
let grid = document.createElement("div");
grid.setAttribute("id","grid");
pageContainer.appendChild(grid);

for(let i = 1;i<=16;i++){
    let row = document.createElement("div");
    row.setAttribute("class",`row`);
    grid.appendChild(row);
    for(let i =1; i<=16;i++){
        let square = document.createElement("div");
        square.setAttribute("class","square");
        row.appendChild(square);
    }
}
const squares = document.querySelectorAll(".square");
squares.forEach(sq => sq.addEventListener('mouseover',() => sq.setAttribute("style","background-color:#000000; transition: background-color ease 0.3s;"))
);

const resetGrid = document.createElement("button");
resetGrid.setAttribute("id","resetGrid");
resetGrid.textContent = 'RESET';
resetGrid.addEventListener('click',function(){
    squares.forEach(sq => sq.setAttribute("style","background-color:#ffffff; transition: background-color ease 0.3s"))
});
buttonContainer.appendChild(resetGrid);

const howManySquaresButton = document.createElement('button');
howManySquaresButton.textContent = 'How many squares?';
buttonContainer.appendChild(howManySquaresButton);


