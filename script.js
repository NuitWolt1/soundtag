document.addEventListener('DOMContentLoaded', function() {
    const soundButton = document.getElementById('soundButton');
    const audio = new Audio('sound/sound.mp3'); // Относительный путь к звуковому файлу

    soundButton.addEventListener('click', function() {
        audio.volume = 1.0; // Установка громкости на максимум
        audio.play(); // Воспроизведение звука
    });
});
