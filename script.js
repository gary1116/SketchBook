let number;
const mainGrid = document.querySelector(".grid-container");
let colors = ['#CC9933', '#669933', '#0033FF', '#99FFCC', '#FF00CC', '#FF3366', '#FF0033', '#FFFF33', '#000000', '#03A9F4','#8D6E63','#388E3C','#00FFFF', '#088F8F','#F0E68C','#DFFF00','#FFBF00']
let isDrawing = false;
let random_color = colors[(Math.floor( Math.random() * colors.length))]; 


function getValue() {
    const input = document.querySelector(".gridInput");
    number = input.value;
    if (number < 1 || number > 100) {
        alert("Please pick a number between 1 and 100!");
    }
    createGrid(number);
}

let createGrid = (size) => {
    const container = document.querySelector('.grid-container');
    container.innerHTML = ''; // Clear previous content

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.className = 'grid-item'; // Set the class name for styling
            container.appendChild(cell); // Append the cell to the container
        }
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // Set columns
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; // Set rows
}


mainGrid.addEventListener('mousedown', () => {
    isDrawing = true;
});

mainGrid.addEventListener('mouseup', () => {
    isDrawing = false;
});

mainGrid.addEventListener('mouseover', (event) => {
    if (isDrawing) {
        if (event.target.classList.contains('grid-item')) {
            event.target.style.backgroundColor = 'black';
        }
    }
});

let clearAll = () => {
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white'; // Set background color to white
    });
}


