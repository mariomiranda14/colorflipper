// script.js - Versión Simple

// Array de colores predefinidos
const colors = [
    "Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Gray", "Cyan",
    "Magenta", "Lime", "Maroon", "Navy", "Olive", "Teal", "Turquoise", "Violet", "Gold", "Silver"
];

const colorButton = document.getElementById("colorButton");
const colorDisplay = document.querySelector(".color-display__value");

// Función para cambiar el color de fondo de manera aleatoria
function changeBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const newColor = colors[randomIndex];
    document.body.style.backgroundColor = newColor;
    colorDisplay.textContent = newColor;
}

// Evento para detectar el clic en el botón
colorButton.addEventListener("click", changeBackgroundColor);
