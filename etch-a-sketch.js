const container = document.querySelector(".container");
const button = document.querySelector(".button");
let rows;
let columns;

function makeGrid(rows, columns) {
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "row";

        for (let j = 0; j < columns; j++){
            let column = document.createElement("div");
            row.appendChild(column).className = "column";

            column.addEventListener("mouseover", function(event){
                //Maina dažādas krāsas:
                let rgb1 = Math.floor(Math.random() * 255);
                let rgb2 = Math.floor(Math.random() * 255);
                let rgb3 = Math.floor(Math.random() * 255);
                let color = "rgb("+ rgb1 + "," + rgb2 + "," + rgb3 + ")";
                event.target.style.backgroundColor = color;
            } )    
        }
    }
};

function deleteOldGrid() {
    document
    .querySelectorAll(".column")
    .forEach((e) => e.parentNode.removeChild(e));

    document
    .querySelectorAll(".row")
    .forEach((e) => e.parentNode.removeChild(e));
}

//Izveido jaunu grid
button.onclick = function(){
    let cell = prompt("Enter the number of squares per side to make grid!");
    while(cell<0 || cell>100){
        cell = prompt("Number must be between 0 and 100!");
    }
    deleteOldGrid();
    makeGrid(cell, cell);
}

makeGrid(16, 16); 