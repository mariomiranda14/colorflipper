
// Array de colores predefinidos
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF5"];


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