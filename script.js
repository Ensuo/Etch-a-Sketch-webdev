var grid = document.getElementById("grid");
var grid_size = 16;
var btn_resize = document.getElementById("btn-resize");

function updateSquareColor(square){
    if(square.classList.contains('active')){
        square.classList.remove('active');
    }else{
        square.classList.add('active');
    }
}

/*function updateColor(color){
    switch(color.className){
        case 'red':
            document.querySelector
    }
}*/

function createGrid(size){
    for(var i = 0; i < size; i++){

        var row = document.createElement('div');
        row.className = 'row';

        for(var j = 0; j < size; j++){
            var square = document.createElement('div');
            square.className = 'square';

            row.appendChild(square);
        }
        grid.appendChild(row);
    }

    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("click", () =>  updateSquareColor(square));
    });
}

function updateGrid(){
    grid_size = prompt("Coloque um valor n (tamanho é n x n) menos que 30 e maior que 0 pfv");
    if(grid_size > 0){
        grid.innerHTML = "";
        createGrid(grid_size);
    }else{
        alert("Coloca um valor c3rt0 se nnnnnn vai 3er bUSAgs.");
    }
}

btn_resize.addEventListener('click', updateGrid);

/*document.querySelectorAll("colorList").forEach(color => {
    color.addEventListener("click", () => updateColor(color));
});*/

if(grid_size > 0){
    createGrid(grid_size);
}



