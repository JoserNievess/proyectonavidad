const audio = document.getElementById('audio');
const volumeControl = document.getElementById('volumeControl');
const volumeIcon = document.getElementById('volumeIcon');

// Función para actualizar el volumen cuando se mueve la barra
volumeControl.addEventListener('input', () => {
    const volume = volumeControl.value;
    audio.volume = volume;

    // Cambiar el icono de volumen según el nivel
    if (volume == 0) {
        volumeIcon.textContent = "🔇"; // Silencio
    } else if (volume < 0.5) {
        volumeIcon.textContent = "🔉"; // Volumen bajo
    } else {
        volumeIcon.textContent = "🔊"; // Volumen alto
    }
});

// Iniciar el volumen en el nivel de la barra (máximo)
audio.volume = volumeControl.value;
