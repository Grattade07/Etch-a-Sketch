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
        container.appendChild(row).className = "gridRow";
    };
}

function makeCols(colsNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < colsNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell"
        }
    }
}

makeGrid();