const container = document.getElementById("grid-container");
const clearBtn = document.getElementById("clear-btn");
const resizeBtn = document.getElementById("resize-btn");

let gridSize = 16; 



function createGrid(size) {
  container.innerHTML = ''; 
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.addEventListener('mouseover', () => div.style.backgroundColor = getRandomColor());
    container.appendChild(div);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


clearBtn.addEventListener('click', () => createGrid(gridSize));


resizeBtn.addEventListener('click', () => {
  let newSize = prompt("Создать новые ячейки (1-100):");
  if (newSize >= 1 && newSize <= 100) {
    gridSize = newSize;
    createGrid(gridSize);
  } else {
    alert("Ошибка ле");
  }
});

createGrid(gridSize);
