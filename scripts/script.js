let canvasDimension = 16;
let canvas = document.querySelector('.canvas');


function createGrid(canvas, dimension){
  canvas.innerHTML = "";

  // First Loop Code Block: Create Rows;
  for(let i = 0; i <= dimension; i++){
    let rows = document.createElement('div')
    rows.setAttribute('id', 'rows');
    canvas.appendChild(rows);

    // For each rows, create cells
    for (let j = 0; j <= dimension; j++)  {
      let cells = document.createElement('div');
      cells.setAttribute('id', 'cells');
      rows.appendChild(cells);
    }
  }
  
}

createGrid(canvas, canvasDimension);