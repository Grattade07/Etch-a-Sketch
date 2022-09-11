const container = document.getElementById("gridContainer");

function makeGrid(num) {
    makeRows(num);
    makeCols(num);
}

let rows = document.getElementsByClassName("gridRow");
let cols = document.getElementsByClassName("cell");

function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        row.id = "gridRow";
        container.appendChild(row).className = "gridRow";
    };
}

function makeCols(colsNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < colsNum; j++) {
            let newCell = document.createElement("div");
            newCell.id = "cell";
            rows[j].appendChild(newCell).className = "cell"
        }
    }
}

makeGrid();

function reset(parent) {
   while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
   };
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    let gridSize = window.prompt("What size grid do you want?", 16);


    if (gridSize <= 100) {
        reset(container);
        makeGrid(gridSize);
        let cell = document.querySelectorAll(".cell");
        for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("mouseover", () => {
        cell[i].classList.add("cell-hover");
    });
}
    } else if (gridSize > 100) {
        
       gridSize = window.prompt("That's too big, please put a number =<100");
       reset(container);
        makeGrid(gridSize);
        let cell = document.querySelectorAll(".cell");
        for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("mouseover", () => {
        cell[i].classList.add("cell-hover");
    });
}
    }
});
