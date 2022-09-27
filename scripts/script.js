let canvasDimension = 16;
let canvas = document.querySelector('.canvas');



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

function draw(cells){
  let boxes = Array.from(cells);
  boxes.forEach((box) =>{
    box.addEventListener('mouseover', () => {
      box.setAttribute('style', 'background-color:black');
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

function getRandomColor(){
  let maxVal = 0xFFFFFF;
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber).toString(16);
  randColor = randomNumber.padStart(6,0);
  return `#${randColor.toUpperCase()}`;
}


createGrid(canvas, canvasDimension);
draw(cells);
drawRainbow(cells);

