const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationTimeEl = document.getElementById('duration-time');
const trackTitle = document.getElementById('track-title');

// Cambiar la canción
function changeTrack() {
    const select = document.getElementById('music-select');
    const selectedTrack = select.options[select.selectedIndex];
    if (selectedTrack.value) {
        audioSource.src = selectedTrack.value;
        trackTitle.textContent = selectedTrack.text;
        audioPlayer.load();
        playAudio();
        showToast(`Reproduciendo: ${selectedTrack.text}`);
    }
}

// Reproducir audio
function playAudio() {
    audioPlayer.play();
    showToast("Reproducción iniciada");
}

// Pausar audio
function pauseAudio() {
    audioPlayer.pause();
    showToast("Reproducción pausada");
}

// Detener audio
function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    showToast("Reproducción detenida");
}

// Actualizar progreso
audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    if (duration) {
        progressBar.style.width = `${(currentTime / duration) * 100}%`;
    }
    currentTimeEl.textContent = formatTime(currentTime);
    durationTimeEl.textContent = formatTime(duration);
});

// Ajustar el progreso al hacer clic
function setProgress(event) {
    const width = event.target.clientWidth;
    const clickX = event.offsetX;
    const duration = audioPlayer.duration;

    if (duration) {
        audioPlayer.currentTime = (clickX / width) * duration;
    }
}

// Cambiar volumen
function changeVolume(value) {
    audioPlayer.volume = value;
    showToast(`Volumen: ${Math.round(value * 100)}%`);
}

// Cambiar velocidad
function changeSpeed(value) {
    audioPlayer.playbackRate = value;
    showToast(`Velocidad: ${value}x`);
}

// Formatear tiempo (segundos a mm:ss)
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Mostrar notificaciones tipo Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2000);
}
