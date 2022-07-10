let grid = document.getElementById("grid");
let grid_size = 16;
let mode = 'blackmode';

let btn_resize = document.getElementById("btn-resize");
btn_resize.addEventListener('click', updateGrid);

let btn_reset = document.getElementById("btn-reset");
btn_reset.addEventListener('click', resetGrid);

let btn_blackmode = document.getElementById("blackmode");
btn_blackmode.addEventListener('click', function(){
    mode = "blackmode";
});

let btn_rainbowmode = document.getElementById("rainbowmode");
btn_rainbowmode.addEventListener('click', function(){
    mode = "rainbowmode";
});

let btn_erasermode = document.getElementById("erasermode");
btn_erasermode.addEventListener('click', function(){
    mode = "erasermode";
});

if(grid_size > 0){
    createGrid(grid_size);
}

function setCurrentmode(curMode){
    mode = curMode
}

function updateSquareColor(e){
    if (e.type === 'mouseover' && !mouseDown) return

    if(mode ==='blackmode'){
        e.target.classList.add('active');
        e.target.style.backgroundColor = '#000000';
    }else if(mode === 'rainbowmode'){
        e.target.classList.add('active');
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }else if(mode === 'erasermode'){
        e.target.style.backgroundColor = 'rgb(190, 189, 189)';
        if(e.target.classList.contains('active')){
            e.target.classList.remove('active');
        }
    }
    
}

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
        square.addEventListener("mousedown", updateSquareColor);
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

function resetGrid(mode){
    grid.innerHTML = "";
    createGrid(grid_size);
}



