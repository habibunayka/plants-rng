// this.backgroundMusic = new Audio('assets/audio/background-musics/index-music.mp3'); // Ganti dengan path musik Anda
//         this.backgroundMusic.addEventListener('canplaythrough', () => {
//             console.log('Audio file is ready to play');
//             this.backgroundMusic.loop = true; // Atur agar musik berulang
//             this.backgroundMusic.volume = 0.5; // Atur volume sesuai kebutuhan
//             this.backgroundMusic.play().catch(error => {
//                 console.error('Error playing background music:', error);
//             });
//         });
//         this.backgroundMusic.addEventListener('error', (e) => {
//             console.error('Error loading audio file:', e);
//         });

//         document.addEventListener("DOMContentLoaded", () => {
//             this.backgroundMusic.play();
//         });

let audio = new Audio("assets/audio/background-musics/index-music.mp3");

audio.addEventListener("canplaythrough", () => {
    audio.play().catch((e) => {
        window.addEventListener("click", () => {
            audio.play();
            audio.loop = true;
            audio.volume = 0.3;
        });
    });
});

document.getElementById("play-button").addEventListener("click", () => {
    window.location.href = "dialog.html";
});
