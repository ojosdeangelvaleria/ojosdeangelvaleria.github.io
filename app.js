onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };


document.addEventListener("DOMContentLoaded", function() {
    
const showTooltip = (message, x, y) => {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = message;

    tooltip.style.top = `${y}px`;
    tooltip.style.left = `${x}px`;

    document.body.appendChild(tooltip);
    setTimeout(() => {
        tooltip.remove();
    }, 2000); // Elimina el tooltip después de 2 segundos
};

const heartButton = document.getElementById("heartButton");
heartButton.addEventListener("click", function() {
    const rect = heartButton.getBoundingClientRect();
    window.open("https://ojosdeangelvaleria.github.io/cards_for_you/", "_blank");
    showTooltip("Abriendo tarjetas para ti en nueva ventana...", rect.left, rect.top - 30);
});

const musicButton = document.getElementById("musicButton");
musicButton.addEventListener("click", function() {
    const rect = musicButton.getBoundingClientRect();
    window.open("https://ojosdeangelvaleria.github.io/music_for_you/", "_blank");
    showTooltip("Abriendo música para ti en nueva ventana...", rect.left, rect.top - 30);
});
});
