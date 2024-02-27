let number;
const mainGrid = document.querySelector(".grid-container");
const random = document.querySelector('.btn-info');
let colors = ['#CC9933', '#669933', '#0033FF', '#99FFCC', '#FF00CC', '#FF3366', '#FF0033', '#FFFF33','#FFC437','#5BFFC9','#F65BFF', '#A9A9A9', '#03A9F4','#8D6E63','#388E3C','#00FFFF', '#088F8F','#F0E68C','#DFFF00','#FFBF00']
let isDrawing = false;
const dark = document.querySelector('.btn-dark');


function getValue() {
    const input = document.querySelector(".gridInput");
    number = input.value;
    if (number < 1 || number > 100) {
        alert("Please pick a number between 1 and 100!");
    }
    createGrid(number);
}

function handleEnter(event){
    if(event.key ==='Enter'){
        getValue();
    }
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

function black(){

    mainGrid.addEventListener('mouseover', (event) => {
        if (isDrawing) {
            if (event.target.classList.contains('grid-item')) {
                event.target.style.backgroundColor = 'black';
            }
        }
    });
}
dark.addEventListener('click', black);

let clearAll = () => {
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white'; // Set background color to white
    });
}



function changeColor() {
    mainGrid.addEventListener('mouseover', (event) => {
        if (isDrawing) {
            let random_color = colors[Math.floor(Math.random() * colors.length)];
            if (event.target.classList.contains('grid-item')) {
                event.target.style.backgroundColor = random_color;
            }
        }
    });
}

random.addEventListener('click' , changeColor);
