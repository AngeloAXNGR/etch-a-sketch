let canvasDimension = 32;
let canvas = document.querySelector('.canvas');

let gridValue = document.querySelector('#grid-size');

// Interactables
let normalBtn = document.querySelector('#black-button');
normalBtn.addEventListener('click', () =>{
  normalBtn.classList.add('active');
  rainbowBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
  // draw(cells, "black");
  toggleSingleColorDraw(cells);
});

let rainbowBtn = document.querySelector('#rainbow-button');
rainbowBtn.addEventListener('click', () =>{
  rainbowBtn.classList.add('active');
  normalBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
  toggleRainbowDraw(cells);
});

let eraserBtn = document.querySelector('#eraser-button');
eraserBtn.addEventListener('click', () => {
  eraserBtn.classList.add('active');
  rainbowBtn.classList.remove('active');
  normalBtn.classList.remove('active');
  toggleEraser(cells);
});


let clearBtn = document.querySelector('#clear-button');
clearBtn.addEventListener('click', () =>{
  clearCanvas(cells);
})

let dimensionRange = document.querySelector('#dimension-range');
dimensionRange.addEventListener("mouseup", () =>{
  createGrid(canvas, dimensionRange.value);
  rainbowBtn.classList.remove('active');
  normalBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
})

dimensionRange.addEventListener("input", () =>{
  gridValue.textContent = `${dimensionRange.value} x ${dimensionRange.value}`;
})

// Functions
function createGrid(canvas, dimension){
  canvas.innerHTML = "";

  // First Loop Code Block: Create Rows;
  for(let i = 0; i <= dimension - 1; i++){
    let rows = document.createElement('div')
    rows.setAttribute('id', 'rows');
    rows.ondragstart = false;

    // For each rows, create cells
    for (let j = 0; j <= dimension - 1; j++)  {
      let cells = document.createElement('div');
      cells.setAttribute('id', 'cells');
      cells.ondragstart = false;
      rows.appendChild(cells);
      
    }
    canvas.appendChild(rows);
  }
}


function toggleSingleColorDraw(cells){
  canvas.onmousedown = enableDrawState;
  let boxes = Array.from(cells);
  boxes.forEach((box) =>{
    box.onmouseenter = drawSingleColor;
  });

  canvas.onmouseup = disableDrawState;
}

function toggleRainbowDraw(cells){
  canvas.onmousedown = enableDrawState;
  let boxes = Array.from(cells);
  boxes.forEach((box) =>{
    box.onmouseenter = drawMultipleColor;
  });

  canvas.onmouseup = disableDrawState;
}

function toggleEraser(cells){
  canvas.onmousedown = enableDrawState;
  let boxes = Array.from(cells);
  boxes.forEach((box) =>{
    box.onmouseenter = enableEraser;
  });

  canvas.onmouseup = disableDrawState;
}

// Functions for checking draw state 
//(Done as a replacement for mouseover event when drawing in the canvas)

drawState = false;
function enableDrawState(e){
  console.log('Enabled');
  e.preventDefault();
  drawState = true;
}

function disableDrawState(e){
  drawState = false;
}

function drawSingleColor(e){
  if(drawState === false){
    return;
  }

   console.log('toggle: ', e.target);
  e.target.setAttribute('style', "background:black");
}

function drawMultipleColor(e){
  if(drawState === false){
    return;
  }

   console.log('toggle: ', e.target);
  e.target.setAttribute('style', `background:${getRandomColor()}`);
}

function enableEraser(e){
  if(drawState === false){
    return;
  }

   console.log('toggle: ', e.target);
  e.target.setAttribute('style', "background:white");
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

