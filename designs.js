
function makeGrid(height, width) {

   
    const TH = document.getElementById('inputHeight').value;

    const TW = document.getElementById('inputWidth').value;
    const canvas = document.getElementById('pixelCanvas');
  

    canvas.innerHTML = '';
  
    
  
    
    for (let i = 0; i < TH; i++) {
      let row = canvas.insertRow(i);
  
      
      for (let j = 0; j < TW; j++) {
        let cell = row.insertCell(j);
  
        
        cell.addEventListener('click', function(event) {
          event.target.style.backgroundColor = document.getElementById('colorPicker').value;
        });
      }
    }
  }
  
  
  document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();
    
    makeGrid();
  });