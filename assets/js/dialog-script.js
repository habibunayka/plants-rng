const dialogs = [
    {
        text: "Aku akhirnya kembali ke rumah masa kecilku setelah sekian lama. Rumah ini terasa sepi tanpa kehadiran kakek.",
        background: "url('assets/images/dialogs/dialog1.webp')",
    },
    {
        text: "Aku yang anak yatim piatu, diasuh oleh kakek sejak kecil. Kakek adalah orang terbaik yang pernah ada di hidupku.",
        background: "url('assets/images/dialogs/dialog2.webp')",
    },
    {
        text: "Tapi beberapa hari yang lalu, kakek mengidap penyakit paru-paru yang disebabkan oleh asap disekitar, dan akhirnya meninggal.",
        background: "url('assets/images/dialogs/dialog3.webp')",
    },
    {
        text: "Dulu.. desa ini dipenuhi udara segar. Sekarang, udara terasa berat oleh polusi dari kota.",
        background: "url('assets/images/dialogs/dialog4.webp')",
    },
    {
        text: "Lahan kakek yang kini tak terurus, hanya menyisakan kekosongan. Di sudutnya, aku melihat pot tua, seember air, dan sedikit pupuk.",
        background: "url('assets/images/dialogs/dialog5.webp')",
    },
    {
        text: "Aku berlutut, menggenggam tanah kering. Aku masih ingat bagaimana kakek menanam dengan penuh kasih sayang.",
        background: "url('assets/images/dialogs/dialog6.png')",
    },
    {
        text: "Jika polusi telah merusak udara, aku akan mencoba memperbaikinya. Menanam kembali, dan mengembalikan apa yang hilang.",
        background: "url('assets/images/dialogs/dialog7.webp')",
    },
];

let currentDialogIndex = 0;
const dialogText = document.getElementById("dialog-text");
const nextButton = document.getElementById("next-btn");
const background = document.getElementById("background");

// Tambahkan elemen audio untuk musik latar
this.backgroundMusic = new Audio(
    "assets/audio/background-musics/dialog-music.mp3"
); // Ganti dengan path musik Anda


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
        dialogText.innerHTML = "Cerita selesai, berlanjut ke permainan...";
        nextButton.style.display = "none";
        setTimeout(function () {
            window.location.href = "main.html";
        }, 2000);
    }
}

// Mulai musik saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    this.backgroundMusic.play(); // Mulai musik
    nextDialog();
});
