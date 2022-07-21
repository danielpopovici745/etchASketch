// Daniel Popovici - script.js 7/21/2022

let pageContainer = document.querySelector("#pageContainer");
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
console.log(squares);
squares.forEach(sq => sq.addEventListener('mouseover',() => sq.setAttribute("style","background-color:black; transition: background-color ease 0.3s;"))
);