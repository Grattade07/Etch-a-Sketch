const container = document.getElementById("gridContainer");

function makeGrid() {
    makeRows(16);
    makeCols(16);
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

let cell = document.querySelectorAll(".cell");

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("mouseover", () => {
        cell[i].classList.add("cell-hover");
    });
    cell[i].addEventListener("mouseout", () => {
        cell[i].classList.remove("cell-hover");
    })
}

