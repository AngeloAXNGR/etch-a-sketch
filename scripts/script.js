let canvasDimension = 16;
let canvas = document.querySelector('.canvas');

// Interactables
let normalBtn = document.querySelector('#black-button');
normalBtn.addEventListener('click', () =>{
  draw(cells, "black");
});

let rainbowBtn = document.querySelector('#rainbow-button');
rainbowBtn.addEventListener('click', () =>{
  drawRainbow(cells);
});

let eraserBtn = document.querySelector('#eraser-button');
eraserBtn.addEventListener('click', () => {
  draw(cells, "white");
});


let clearBtn = document.querySelector('#clear-button');
clearBtn.addEventListener('click', () =>{
  clearCanvas(cells);
})

let dimensionRange = document.querySelector('#dimension-range');
dimensionRange.addEventListener("mouseup", () =>{
  createGrid(canvas, dimensionRange.value);
})
// Functions
function createGrid(canvas, dimension){
  canvas.innerHTML = "";

  // First Loop Code Block: Create Rows;
  for(let i = 0; i <= dimension - 1; i++){
    let rows = document.createElement('div')
    rows.setAttribute('id', 'rows');

    // For each rows, create cells
    for (let j = 0; j <= dimension - 1; j++)  {
      let cells = document.createElement('div');
      cells.setAttribute('id', 'cells');
      rows.appendChild(cells);
    }
    canvas.appendChild(rows);
  }
}

function draw(cells, color){
  let boxes = Array.from(cells);
  boxes.forEach((box) =>{
    box.addEventListener('mouseover', () => {
      box.setAttribute('style', `background-color:${color}`);
    });
  });
}

function drawRainbow(cells){
  let boxes = Array.from(cells);
  boxes.forEach((box) =>{
    box.addEventListener('mouseover', () => {
      box.setAttribute('style', `background-color:${getRandomColor()}`);
    });
  });
}

function clearCanvas(cells){
  let boxes = Array.from(cells);
  boxes.forEach((box) =>{
    box.setAttribute('style', 'background-color:white');
  });
}

// Helper Function for drawRainbow
function getRandomColor(){
  let maxVal = 0xFFFFFF;
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber).toString(16);
  randColor = randomNumber.padStart(6,0);
  return `#${randColor.toUpperCase()}`;
}


createGrid(canvas, canvasDimension);

