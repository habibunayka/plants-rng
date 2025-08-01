const dialogs = [
    {
        text: "Aku yakin kakek akan bangga melihat usahaku. Lingkungan ini kini hidup kembali berkat kerja kerasku, Terimakasih kakek.",
        background: "url('assets/images/ending-dialogs/dialog1.webp')",
    },
    {
        text: "Aku sudah berusaha, tapi masih ada banyak pekerjaan yang harus kulakukan. Aku akan terus menanam untuk masa depan yang lebih baik!",
        background: "url('assets/images/ending-dialogs/dialog2.webp')",
    },
];

let currentDialogIndex = 0;
const dialogText = document.getElementById("dialog-text");
const nextButton = document.getElementById("next-btn");
const background = document.getElementById("background");

this.backgroundMusic = new Audio(
    "assets/audio/background-musics/ending-music.mp3"
);


this.backgroundMusic.addEventListener("canplaythrough", () => {
    console.log("Audio file is ready to play");
    this.backgroundMusic.loop = true; // Atur agar musik berulang
    this.backgroundMusic.volume = 0.5; // Atur volume sesuai kebutuhan
    this.backgroundMusic.play().catch((error) => {
        console.error("Error playing background music:", error);
    });
});
this.backgroundMusic.addEventListener("error", (e) => {
    console.error("Error loading audio file:", e);
});

function typeText(text, index = 0) {
    if (index < text.length) {
        dialogText.innerHTML += text.charAt(index);
        setTimeout(() => typeText(text, index + 1), 40);
    } else {
        nextButton.style.display = "block";
    }
}

this.clickSfx = new Audio("assets/audio/sound-effects/click-sfx.mp3"); // Ganti dengan path musik Anda
function nextDialog() {
    
    this.clickSfx.loop = false; // Atur agar musik berulang
    this.clickSfx.volume = 0.9; // Atur volume sesuai kebutuhan
    this.clickSfx.play().catch((error) => {
        console.error("Error playing background music:", error);
    });
    if (currentDialogIndex < dialogs.length) {
        dialogText.innerHTML = "";
        nextButton.style.display = "none";
        background.style.backgroundImage =
            dialogs[currentDialogIndex].background;

        typeText(dialogs[currentDialogIndex].text);

        currentDialogIndex++;
    } else {
            window.location.href = "credit.html";
    }
}

// Mulai musik saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    this.backgroundMusic.play(); // Mulai musik
    nextDialog();
});
