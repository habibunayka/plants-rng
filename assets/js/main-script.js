class Game {
    constructor() {
        this.gameData = {
            plants: [
                {
                    id: 1,
                    title: "Rumput",
                    description: "Tanaman yang cepat tumbuh dan umum",
                    image: "assets/images/plants/rumput-grown.png",
                    rarity: "umum",
                    growthTime: 4,
                    sellPrice: 55,
                    basePrice: 50,
                    updateInterval: 6,
                    moneyIncrement: 5,
                    pollutionReduction: 2,
                },
                {
                    id: 2,
                    title: "Pohon Bonsai",
                    description: "Pohon yang kuat dan tahan lama",
                    image: "assets/images/plants/pohon-bonsai-grown.png",
                    rarity: "umum",
                    growthTime: 8,
                    sellPrice: 80,
                    basePrice: 75,
                    updateInterval: 7,
                    moneyIncrement: 8,
                    pollutionReduction: 3,
                },
                {
                    id: 3,
                    title: "Bunga Matahari",
                    description:
                        "Bunga yang cerah dan menarik banyak perhatian",
                    image: "assets/images/plants/bunga-matahari-grown.png",
                    rarity: "tidak-umum",
                    growthTime: 10,
                    sellPrice: 130,
                    basePrice: 120,
                    updateInterval: 10,
                    moneyIncrement: 12,
                    pollutionReduction: 6,
                },
                {
                    id: 4,
                    title: "Kaktus Mini",
                    description: "Kaktus kecil yang mudah dirawat",
                    image: "assets/images/plants/kaktus-mini-grown.png",
                    rarity: "tidak-umum",
                    growthTime: 12,
                    sellPrice: 170,
                    basePrice: 160,
                    updateInterval: 10,
                    moneyIncrement: 16,
                    pollutionReduction: 6,
                },
                {
                    id: 5,
                    title: "Jamur Merah",
                    description: "Jamur merah yang mencolok",
                    image: "assets/images/plants/jamur-merah-grown.png",
                    rarity: "tidak-umum",
                    growthTime: 14,
                    sellPrice: 210,
                    basePrice: 200,
                    updateInterval: 11,
                    moneyIncrement: 18,
                    pollutionReduction: 8,
                },
                {
                    id: 6,
                    title: "Mawar Hitam",
                    description: "Mawar dengan kelopak hitam eksotik",
                    image: "assets/images/plants/mawar-hitam-grown.png",
                    rarity: "langka",
                    growthTime: 18,
                    sellPrice: 320,
                    basePrice: 300,
                    updateInterval: 13,
                    moneyIncrement: 22,
                    pollutionReduction: 10,
                },
                {
                    id: 7,
                    title: "Anggrek Biru",
                    description: "Anggrek langka dengan kelopak biru",
                    image: "assets/images/plants/anggrek-biru-grown.png",
                    rarity: "langka",
                    growthTime: 25,
                    sellPrice: 420,
                    basePrice: 400,
                    updateInterval: 20,
                    moneyIncrement: 30,
                    pollutionReduction: 16,
                },
                {
                    id: 8,
                    title: "Tanaman Karnivora",
                    description:
                        "Tanaman yang dapat menangkap dan mencerna serangga",
                    image: "assets/images/plants/tanaman-karnivora-grown.png",
                    rarity: "langka",
                    growthTime: 20,
                    sellPrice: 570,
                    basePrice: 550,
                    updateInterval: 16,
                    moneyIncrement: 32,
                    pollutionReduction: 18,
                },
                {
                    id: 9,
                    title: "Sakura Mini",
                    description: "Versi mini dari pohon Blossom yang indah",
                    image: "assets/images/plants/sakura-mini-grown.png",
                    rarity: "epik",
                    growthTime: 25,
                    sellPrice: 850,
                    basePrice: 800,
                    updateInterval: 22,
                    moneyIncrement: 50,
                    pollutionReduction: 20,
                },
                {
                    id: 10,
                    title: "Bunga Sihir",
                    description: "Bunga yang bersinar di kegelapan",
                    image: "assets/images/plants/bunga-sihir-grown.png",
                    rarity: "epik",
                    growthTime: 26,
                    sellPrice: 310,
                    basePrice: 1050,
                    updateInterval: 22,
                    moneyIncrement: 55,
                    pollutionReduction: 22,
                },
                {
                    id: 11,
                    title: "Jamur Kristal",
                    description: "Jamur dengan bentuk kristal yang memukau",
                    image: "assets/images/plants/jamur-kristal-grown.png",
                    rarity: "epik",
                    growthTime: 30,
                    sellPrice: 300,
                    basePrice: 1600,
                    updateInterval: 20,
                    moneyIncrement: 60,
                    pollutionReduction: 20,
                },
                {
                    id: 12,
                    title: "Pohon Emas",
                    description: "Pohon langka dengan daun berwarna emas",
                    image: "assets/images/plants/pohon-emas-grown.png",
                    rarity: "legendaris",
                    growthTime: 40,
                    sellPrice: 480,
                    basePrice: 2000,
                    updateInterval: 16,
                    moneyIncrement: 70,
                    pollutionReduction: 30,
                },
                {
                    id: 13,
                    title: "Bunga Pelangi",
                    description: "Bunga dengan warna pelangi yang memukau",
                    image: "assets/images/plants/bunga-pelangi-grown.png",
                    rarity: "legendaris",
                    growthTime: 38,
                    sellPrice: 680,
                    basePrice: 2500,
                    updateInterval: 12,
                    moneyIncrement: 80,
                    pollutionReduction: 40,
                },
            ],
            playerData: {
                money: 100000,
                pollution: 10000,
                inventory: [
                    { name: "Pupuk", type: "item" },
                    { name: "Air", type: "item" },
                ],
                upgrades: {
                    potCount: 1,
                    moneyMultiplier: 1,
                    pollutionMultiplier: 1,
                },
                plantStatus: {},
                skins: {
                    default: true,
                    blue: false,
                    red: false,
                },
            },
        };
        this.plantSfx = new Audio("assets/audio/sound-effects/plant-sfx.mp3");
        this.clickSfx = new Audio("assets/audio/sound-effects/click-sfx.mp3");
        this.sellSfx = new Audio("assets/audio/sound-effects/sell-sfx.mp3");
        this.selectedPot = null;
        this.isTutorialOpen = true;
        this.notifications = [];

        // Properti untuk minigame
        this.saveRiver = {
            score: 0,
            timeLeft: 30,
            countdownStart: 5,
            maxTrash: 6,
            trashInterval: null,
            gameInterval: null,
            countdownInterval: null,
        };

        this.selectedSkin = "default";
        this.missionProgress = {
            pollution: 0,
            saveRiver: 0,
            sortingGarbage: 0,
        };
        this.init();
        this.setupMinigame();
        this.listenerBoolean = false;

        // Tambahkan elemen audio untuk musik latar
        this.backgroundMusic = new Audio(
            "assets/audio/background-musics/main-music.mp3"
        );
        this.backgroundMusic.addEventListener("canplaythrough", () => {
            console.log("Berkas audio sudah siap diputar");
            this.backgroundMusic.loop = true;
            this.backgroundMusic.volume = 0.5;
            this.backgroundMusic.play().catch((error) => {
                console.error("Kesalahan saat memutar musik latar:", error);
            });
        });
        this.backgroundMusic.addEventListener("error", (e) => {
            console.error("Kesalahan memuat berkas audio:", e);
        });

        this.sortingGarbage = {
            score: 0,
            timeLeft: 30,
            countdownStart: 5,
            gameInterval: null,
            countdownInterval: null,
            currentGarbage: null,
            garbageTypes: {
                organic: [
                    "vegetable.png",
                    "vegetable-2.png",
                    "leaves.png",
                    "leaves-2.png",
                    "fruit.png",
                    "fruit-2.png",
                    "fruit-3.png",
                    "fruit-4.png",
                ],
                anorganic: [
                    "plastic-bottle.png",
                    "plastic-bottle-2.png",
                    "plastic-bottle-3.png",
                    "plastic-bag.png",
                    "plastic-cup.png",
                    "plastic-plate.png",
                ],
                hazardous: [
                    "battery.png",
                    "battery-2.png",
                    "chemical.png",
                    "chemical-2.png",
                    "medicine.png",
                    "medicine-2.png",
                ],
            },
        };

        this.currentSlide = 1;
        this.totalSlides =
            document.getElementsByClassName("tutorial-slide").length;
        this.showTutorial();

        // Contoh: Menambahkan event listener untuk tombol gatcha
        this.setupGatchaEventListeners();
    }

    async init() {
        localStorage.removeItem("plantStatus");
        this.loadPlantStatus();
        this.setupEventListeners();
        this.renderGarden();
        this.updateUI();
        this.startGameLoop();

        // Tambahkan logika untuk menanam ulang tanaman saat halaman dimuat
        this.replantAll();

        // Muat data shop jika diperlukan
        this.loadShopData();

        // Tambahkan event listener untuk menutup modal dengan klik di luar
        window.addEventListener("click", (e) => {
            if (e.target.classList.contains("modal")) {
                this.closeAllModals();
            }
        });

        // Setup modal upgrade
        this.setupUpgradeModal();

        this.equipSkinToSelectedPot(); // Terapkan skin default ke pot terpilih
        this.updateSkinModal(); // Perbarui modal skin
        this.updateMissionUI(); // Perbarui UI misi
    }

    async loadGameData() {
        try {
            const response = await fetch("data.json");
            const initialData = await response.json();

            // Ambil data dari localStorage jika ada
            const savedGameData = JSON.parse(localStorage.getItem("gameData"));

            this.gameData = {
                ...initialData,
                playerData: savedGameData || initialData.playerData,
            };
        } catch (error) {
            console.error("Kesalahan memuat data game:", error);
        }
    }

    loadPlantStatus() {
        const savedStatus =
            JSON.parse(localStorage.getItem("plantStatus")) || {};
        this.gameData.playerData.plantStatus = savedStatus;

        Object.entries(savedStatus).forEach(([potIndex, plant]) => {
            const pot = document.querySelector(
                `.pot[data-index='${potIndex}']`
            );

            if (plant && pot) {
                if (plant.status === "growing") {
                    pot.classList.add("growing");
                    pot.dataset.plantId = plant.plantId;

                    // Tambahkan elemen timer jika belum ada
                    let timerDiv = pot.querySelector(".pot-timer");
                    if (!timerDiv) {
                        timerDiv = document.createElement("div");
                        timerDiv.className = "pot-timer";
                        pot.appendChild(timerDiv);
                    }

                    console.log(`Timer ditambahkan untuk pot ${potIndex}`);

                    // Hitung waktu yang sudah berlalu
                    const timePassed = Math.floor(
                        (Date.now() - plant.lastUpdate) / 1000
                    );
                    let remainingGrowthTime =
                        plant.remainingGrowthTime - timePassed;

                    if (remainingGrowthTime > 0) {
                        // Lanjutkan dari sisa waktu yang ada
                        this.startPlantGrowth(pot, remainingGrowthTime);
                    } else {
                        pot.classList.remove("growing");
                        pot.classList.add("grown");
                        this.gameData.playerData.plantStatus[
                            pot.dataset.index
                        ].status = "grown";
                        this.updateUI();
                        this.savePlantStatus();
                    }
                } else if (plant.status === "grown") {
                    pot.classList.add("grown");
                    this.updateUI();
                }
            }
        });
    }

    savePlantStatus() {
        localStorage.setItem(
            "plantStatus",
            JSON.stringify(this.gameData.playerData.plantStatus)
        );
    }

    updateUI() {
        document.getElementById("money").querySelector("span").textContent =
            this.gameData.playerData.money;
        document.getElementById("pollution").querySelector("span").textContent =
            this.gameData.playerData.pollution;
    }

    setupEventListeners() {
        document
            .getElementById("shopBtn")
            .addEventListener("click", () => this.openShop());
        document
            .getElementById("minigameBtn")
            .addEventListener("click", () => this.openMinigameSelection());
        document
            .getElementById("upgradeBtn")
            .addEventListener("click", () => this.openUpgrade());
        document
            .getElementById("inventoryBtn")
            .addEventListener("click", () => this.openInventory());
        document
            .getElementById("missionBtn")
            .addEventListener("click", () => this.openMissionModal());

        // Tambahkan event listener untuk deselect pot ketika klik di luar
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".pot") && !e.target.closest(".modal")) {
                this.deselectCurrentPot();
            }
        });

        // Event listener untuk tab shop
        const tabButtons = document.querySelectorAll(".tab-button");
        tabButtons.forEach((button) => {
            button.addEventListener("click", () => {
                this.switchShopTab(button);
                this.clickSfx.loop = false; // Atur agar musik berulang
                this.clickSfx.volume = 0.5; // Atur volume sesuai kebutuhan
                this.clickSfx.play().catch((error) => {
                    console.error("Error playing background music:", error);
                });
            });
        });

        // Event listener untuk gatcha buttons
        const gatchaButtons = document.querySelectorAll(".gatcha-btn");
        gatchaButtons.forEach((button) => {
            button.addEventListener("click", (e) =>
                this.handleGatcha(
                    e.target.dataset.type,
                    parseInt(e.target.dataset.count)
                )
            );
        });

        // Event listener untuk beli tanaman
        const buyPlantButtons = document.querySelectorAll(".buy-plant-btn");
        buyPlantButtons.forEach((button) => {
            button.addEventListener("click", () => {
                this.buyPlant(button.dataset.plantId);
            });
        });

        this.populateGatchaPlants();
    }

    renderGarden() {
        const potsContainer = document.getElementById("plantPots");
        potsContainer.innerHTML = "";

        for (let i = 0; i < 20; i++) {
            const pot = document.createElement("div");
            pot.className = "pot";
            pot.dataset.index = i;

            // Sembunyikan pot yang belum dibuka
            if (i >= this.gameData.playerData.upgrades.potCount) {
                pot.style.display = "none";
            }

            const plantStatus = this.gameData.playerData.plantStatus[i];
            if (plantStatus) {
                pot.dataset.plantId = plantStatus.plantId;
                pot.classList.add(plantStatus.status);

                if (plantStatus.status === "growing") {
                    const timerDiv = document.createElement("div");
                    timerDiv.className = "pot-timer";
                    timerDiv.textContent = `Matang dalam: ${plantStatus.remainingGrowthTime}s`;
                    pot.appendChild(timerDiv);

                    // Jalankan timer pertumbuhan
                    this.startPlantGrowth(pot, plantStatus.remainingGrowthTime);
                } else if (plantStatus.status === "grown") {
                    const timerDiv = document.createElement("div");
                    timerDiv.className = "pot-timer";
                    timerDiv.textContent = `Panen dalam: ${plantStatus.updateCountdown}s`;
                    pot.appendChild(timerDiv);
                }
            }
            pot.addEventListener("click", () => this.selectPot(i));
            potsContainer.appendChild(pot);
        }
    }

    selectPot(index) {
        // Deselect pot sebelumnya
        if (this.selectedPot !== null) {
            const previousPot = document.querySelector(
                `.pot[data-index='${this.selectedPot}']`
            );
            previousPot.classList.remove("selected");
            this.removePotActions(previousPot);
        }

        // Pilih pot baru
        this.selectedPot = index;
        const pot = document.querySelector(`.pot[data-index='${index}']`);
        pot.classList.add("selected");
        this.showPotActions(pot);
    }

    removePotActions(pot) {
        const actions = pot.querySelector(".pot-actions");
        const plantButton = pot.querySelector(".plant-button");
        if (actions) pot.removeChild(actions);
        if (plantButton) pot.removeChild(plantButton);
    }

    showPotActions(pot) {
        this.removePotActions(pot);

        if (!pot.dataset.plantId) {
            const plantButton = document.createElement("button");
            // Ubah teks "Plant" menjadi "Tanam"
            plantButton.textContent = "Tanam";
            plantButton.className = "plant-button";
            plantButton.addEventListener("click", () =>
                this.openInventory(pot)
            );

            pot.appendChild(plantButton);

            const actions = document.createElement("div");
            actions.className = "pot-actions";
            actions.appendChild(plantButton);
            pot.appendChild(actions);
        } else {
            const actions = document.createElement("div");
            actions.className = "pot-actions";

            const sellButton = document.createElement("button");
            sellButton.textContent = "Jual";
            sellButton.className = "sell";
            sellButton.style.display = "none"; // awalannya disembunyikan
            sellButton.addEventListener("click", () => {
                this.sellPlant(pot);
                this.sellSfx.loop = false; // Atur agar musik berulang
                this.sellSfx.volume = 1; // Atur volume sesuai kebutuhan
                this.sellSfx.play().catch((error) => {
                    console.error("Error playing background music:", error);
                });
            });
            actions.appendChild(sellButton);

            const infoButton = document.createElement("button");
            infoButton.textContent = "Info";
            infoButton.className = "info";
            infoButton.style.display = "block"; // Tampilkan info button
            infoButton.addEventListener("click", () => this.showPlantInfo(pot));
            actions.appendChild(infoButton);

            if (pot.classList.contains("grown")) {
                sellButton.style.display = "block"; // Tampilkan tombol jual jika sudah panen

                const useItemButton = document.createElement("button");
                useItemButton.textContent = "Gunakan Item";
                useItemButton.className = "use-item";
                useItemButton.addEventListener("click", () =>
                    this.openInventoryForUseItem(pot)
                );
                actions.appendChild(useItemButton);
            }

            pot.appendChild(actions);
        }
    }

    /**
     * Menghapus tanaman dari inventory.
     * @param {string} plantName
     */
    removePlantFromInventory(plantName) {
        const plantIndex = this.gameData.playerData.inventory.findIndex(
            (item) => item.type === "plant" && item.name === plantName
        );
        if (plantIndex !== -1) {
            this.gameData.playerData.inventory.splice(plantIndex, 1);
            this.saveGameData();
            this.updateUI();
        }
    }

    openInventory(pot = null) {
        if (this.isAnyModalOpen()) return;

        this.clickSfx.loop = false; // Atur agar musik berulang
        this.clickSfx.volume = 0.5; // Atur volume sesuai kebutuhan
        this.clickSfx.play().catch((error) => {
            console.error("Error playing background music:", error);
        });
        this.closeAllModals();
        const inventoryModal = document.getElementById("inventoryModal");
        const inventoryItems = document.getElementById("inventoryItems");
        inventoryItems.innerHTML = ""; // Bersihkan inventory sebelumnya

        if (pot) {
            const plants = this.gameData.playerData.inventory.filter(
                (item) => item.type === "plant"
            );

            const plantsSection = document.createElement("div");
            plantsSection.className = "inventory-section";
            const plantsHeading = document.createElement("h3");
            plantsHeading.textContent = "Tanaman";
            plantsSection.appendChild(plantsHeading);

            plants.forEach((plant) => {
                const plantData = this.gameData.plants.find(
                    (p) => p.title === plant.name
                );
                if (plantData) {
                    const itemDiv = document.createElement("div");
                    itemDiv.className = "inventory-item " + plantData.rarity; // Terapkan kelas berdasarkan raritas

                    const img = document.createElement("img");
                    img.src = `assets/images/plants/${plant.name
                        .toLowerCase()
                        .replace(" ", "-")}-grown.png`;
                    img.alt = plant.name;

                    const span = document.createElement("span");
                    span.className = "gatcha-plant-name";
                    span.textContent = plant.name;

                    const infoButton = document.createElement("button");
                    infoButton.textContent = "Info";
                    infoButton.className = "info-button";
                    infoButton.addEventListener("click", (event) => {
                        event.stopPropagation(); // Mencegah event bubbling
                        this.showPlantInfoModal(plantData);
                    });

                    itemDiv.appendChild(img);
                    itemDiv.appendChild(span);
                    itemDiv.appendChild(infoButton);

                    itemDiv.addEventListener("click", () => {
                        if (!pot.dataset.plantId) {
                            // Tanaman belum ada, tanam sekarang
                            this.plantSfx.loop = false; // Atur agar musik berulang
                            this.plantSfx.volume = 1; // Atur volume sesuai kebutuhan
                            this.plantSfx.play().catch((error) => {
                                console.error(
                                    "Error playing background music:",
                                    error
                                );
                            });
                            pot.dataset.plantId = plantData.id;
                            this.startPlantGrowth(pot);
                            this.removePlantFromInventory(plant.name);
                            this.updatePotActions(pot);
                            inventoryModal.style.display = "none";
                        }
                    });
                    plantsSection.appendChild(itemDiv);
                } else {
                    console.warn(
                        `Tanaman dengan nama "${plant.name}" tidak ditemukan dalam data tanaman.`
                    );
                }
            });

            inventoryItems.appendChild(plantsSection);
        } else {
            // Tampilkan inventory untuk semua item dan tanaman
            const items = this.gameData.playerData.inventory.filter(
                (item) => item.type === "item"
            );
            const plants = this.gameData.playerData.inventory.filter(
                (item) => item.type === "plant"
            );

            // Bagian untuk item
            const itemsSection = document.createElement("div");
            itemsSection.className = "inventory-section";
            const itemsHeading = document.createElement("h3");
            itemsHeading.textContent = "Item";
            itemsSection.appendChild(itemsHeading);

            items.forEach((item) => {
                const itemDiv = document.createElement("div");
                itemDiv.className = "inventory-item";

                const img = document.createElement("img");
                img.src = `assets/images/items/${item.name.toLowerCase()}.png`;
                img.alt = item.name;

                const span = document.createElement("span");
                span.className = "gatcha-plant-name";
                span.textContent = item.name;

                const infoButton = document.createElement("button");
                infoButton.textContent = "Info";
                infoButton.className = "info-button";
                infoButton.addEventListener("click", (event) => {
                    event.stopPropagation();
                    this.showItemInfo(item);
                });

                itemDiv.appendChild(img);
                itemDiv.appendChild(span);
                itemDiv.appendChild(infoButton);
                itemDiv.classList.add("langka");

                itemDiv.addEventListener("click", () => {});

                itemsSection.appendChild(itemDiv);
            });

            const plantsSection = document.createElement("div");
            plantsSection.className = "inventory-section";
            const plantsHeading = document.createElement("h3");
            plantsHeading.textContent = "Tanaman";
            plantsSection.appendChild(plantsHeading);

            plants.forEach((plant) => {
                const plantData = this.gameData.plants.find(
                    (p) => p.title === plant.name
                );
                const itemDiv = document.createElement("div");
                itemDiv.className = "inventory-item " + plantData.rarity;

                const img = document.createElement("img");
                img.src = `assets/images/plants/${plant.name
                    .toLowerCase()
                    .replace(" ", "-")}-grown.png`;
                img.alt = plant.name;

                const span = document.createElement("span");
                span.className = "gatcha-plant-name";
                span.textContent = plant.name;

                const infoButton = document.createElement("button");
                infoButton.textContent = "Info";
                infoButton.className = "info-button";
                infoButton.addEventListener("click", (event) => {
                    event.stopPropagation();
                    this.showPlantInfoModal(plantData);
                });

                itemDiv.appendChild(img);
                itemDiv.appendChild(span);
                itemDiv.appendChild(infoButton);

                itemDiv.addEventListener("click", () => {});

                plantsSection.appendChild(itemDiv);
            });

            inventoryItems.appendChild(plantsSection);
            inventoryItems.appendChild(itemsSection);
        }

        inventoryModal.style.display = "block";
    }

    showItemInfo(item) {
        const itemInfoModal = document.getElementById("itemInfoModal");
        const itemImage = document.getElementById("itemImage");
        const itemTitle = document.getElementById("itemTitle");
        const itemRarity = document.getElementById("itemRarity");
        const itemDescription = document.getElementById("itemDescription");

        // Atur informasi berdasarkan nama item
        switch (item.name.toLowerCase()) {
            case "pupuk":
                itemTitle.textContent = "Pupuk";
                itemImage.src = "assets/images/items/pupuk.png";
                itemRarity.textContent = "Kelangkaan: Umum";
                itemDescription.textContent =
                    "Menggandakan Koin dan pengurangan polusi yang didapatkan dari tanaman.";
                break;
            case "air":
                itemTitle.textContent = "Air";
                itemImage.src = "assets/images/items/air.png";
                itemRarity.textContent = "Kelangkaan: Langka";
                itemDescription.textContent =
                    "Memberi kelembapan dan membantu memanen tanaman lebih cepat.";
                break;
            default:
                itemTitle.textContent = "Item Tidak Diketahui";
                itemImage.src = "assets/images/items/default.png";
                itemRarity.textContent = "";
                itemDescription.textContent =
                    "Informasi untuk item ini tidak tersedia.";
        }

        // Tampilkan modal info item
        itemInfoModal.style.display = "block";
    }

    openInventoryForUseItem(pot) {
        if (this.isAnyModalOpen()) return;

        this.closeAllModals();
        const inventoryModal = document.getElementById("inventoryModal");
        const inventoryItems = document.getElementById("inventoryItems");
        inventoryItems.innerHTML = "";

        // Menampilkan hanya item yang dapat digunakan pada tanaman
        const items = this.gameData.playerData.inventory.filter(
            (item) => item.type === "item"
        );

        const itemsSection = document.createElement("div");
        itemsSection.className = "inventory-section";
        const itemsHeading = document.createElement("h3");
        itemsHeading.textContent = "Item";
        itemsSection.appendChild(itemsHeading);

        items.forEach((item) => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "inventory-item";

            const img = document.createElement("img");
            img.src = `assets/images/items/${item.name.toLowerCase()}.png`;
            img.alt = item.name;

            const span = document.createElement("span");
            span.textContent = item.name;

            itemDiv.appendChild(img);
            itemDiv.appendChild(span);
            itemDiv.classList.add("langka");

            itemDiv.addEventListener("click", () => {
                this.useItemOnPlant(pot, item.name);
                inventoryModal.style.display = "none";
            });

            itemsSection.appendChild(itemDiv);
        });
        inventoryItems.appendChild(itemsSection);

        inventoryModal.style.display = "block";
    }

    useItemOnPlant(pot, itemName) {
        const plantStatus =
            this.gameData.playerData.plantStatus[pot.dataset.index];
        if (!plantStatus) return;

        if (itemName === "Air") {
            if (plantStatus.remainingGrowthTime <= 10) {
                const plantData = this.gameData.plants.find(
                    (p) => p.id == plantStatus.plantId
                );
                let moneyEarned =
                    plantData.moneyIncrement *
                    this.gameData.playerData.upgrades.moneyMultiplier;
                if (plantStatus.fertilizerStacks) {
                    moneyEarned *= 2;
                }
                this.gameData.playerData.money += moneyEarned;

                let pollutionReduction =
                    plantData.pollutionReduction *
                    this.gameData.playerData.upgrades.pollutionMultiplier;

                if (plantStatus.fertilizerStacks) {
                    pollutionReduction *= 2;
                }

                this.gameData.playerData.pollution -= pollutionReduction;

                plantStatus.lastUpdate = Date.now();
                this.updateUI();
                this.saveGameData();
                this.savePlantStatus();
                if (plantStatus.fertilizerStacks) {
                    this.notifications.push(
                        `+${moneyEarned} Koin, -${pollutionReduction} polusi (Air digunakan, Pupuk digunakan)`
                    );
                    plantStatus.fertilizerStacks -= 1;
                    this.showNotifications();
                } else {
                    this.notifications.push(
                        `+${moneyEarned} Koin, -${pollutionReduction} polusi (Air digunakan)`
                    );
                    this.showNotifications();
                }
            }
        } else if (itemName === "Pupuk") {
            if (!plantStatus.fertilizerStacks) {
                plantStatus.fertilizerStacks = 0;
            }
            if (plantStatus.fertilizerStacks < 3) {
                plantStatus.fertilizerStacks += 1;
                this.notifications.push(
                    `Pupuk diterapkan! Tumpukan saat ini: ${plantStatus.fertilizerStacks}`
                );
                this.showNotifications();
            } else if (plantStatus.fertilizerStacks >= 3) {
                alert(
                    "Tanaman sudah diberikan pupuk hingga tumpukan maksimal."
                );
                return;
            }
        }

        this.removeItemFromInventory(itemName);
        this.savePlantStatus();
        this.updateUI();
        this.updatePotActions(pot);
    }

    removeItemFromInventory(itemName) {
        const itemIndex = this.gameData.playerData.inventory.findIndex(
            (item) => item.type === "item" && item.name === itemName
        );
        if (itemIndex !== -1) {
            this.gameData.playerData.inventory.splice(itemIndex, 1);
            this.saveGameData();
            this.updateUI();
        }
    }

    startPlantGrowth(pot, remainingGrowthTime = null) {
        const plantId = pot.dataset.plantId;
        const plantData = this.gameData.plants.find((p) => p.id == plantId);
        pot.classList.add("growing");

        // Tambahkan gambar tanaman ke pot
        let plantImage = pot.querySelector("img");
        if (!plantImage) {
            plantImage = document.createElement("img");
            pot.appendChild(plantImage);
        }
        plantImage.src = `assets/images/plants/${plantData.title
            .toLowerCase()
            .replace(" ", "-")}-growing.png`;
        plantImage.alt = plantData.title;

        let timerDiv = pot.querySelector(".pot-timer");
        if (!timerDiv) {
            timerDiv = document.createElement("div");
            timerDiv.className = "pot-timer";
            pot.appendChild(timerDiv);
        }

        if (remainingGrowthTime === null || isNaN(remainingGrowthTime)) {
            console.error(
                `remainingGrowthTime tidak terdefinisi untuk pot index ${pot.dataset.index}`
            );
            remainingGrowthTime = plantData.growthTime;
        }
        let updateCountdown = plantData.updateInterval;

        const updateTimer = setInterval(() => {
            const plantStatus =
                this.gameData.playerData.plantStatus[pot.dataset.index];
            if (!plantStatus) {
                clearInterval(updateTimer);
                return;
            }
            if (plantStatus.status === "growing") {
                timerDiv.innerHTML = `Tumbuh dalam: ${remainingGrowthTime}s`;
                remainingGrowthTime--;
                plantStatus.remainingGrowthTime = remainingGrowthTime;
                this.savePlantStatus();
            } else if (plantStatus.status === "grown") {
                // Ubah gambar ke status panen
                plantImage.src = `assets/images/plants/${plantData.title
                    .toLowerCase()
                    .replace(" ", "-")}-grown.png`;
                timerDiv.innerHTML = `Panen dalam: ${updateCountdown}s`;
                updateCountdown--;

                if (updateCountdown < 0) {
                    updateCountdown = plantData.updateInterval;

                    let moneyEarned =
                        plantData.moneyIncrement *
                        this.gameData.playerData.upgrades.moneyMultiplier;
                    if (plantStatus.fertilizerStacks) {
                        moneyEarned *= 2;
                    }
                    this.gameData.playerData.money += moneyEarned;

                    let pollutionReduction =
                        plantData.pollutionReduction *
                        this.gameData.playerData.upgrades.pollutionMultiplier;

                    if (plantStatus.fertilizerStacks) {
                        pollutionReduction *= 2;
                    }
                    this.gameData.playerData.pollution -= pollutionReduction;

                    plantStatus.lastUpdate = Date.now();

                    this.updateUI();
                    this.saveGameData();
                    this.savePlantStatus();

                    if (plantStatus.fertilizerStacks) {
                        this.notifications.push(
                            `+${moneyEarned} Koin, -${pollutionReduction} polusi (Pupuk digunakan)`
                        );
                    } else {
                        this.notifications.push(
                            `+${moneyEarned} Koin, -${pollutionReduction} polusi`
                        );
                    }
                    if (plantStatus.fertilizerStacks) {
                        plantStatus.fertilizerStacks -= 1;
                    }
                    this.showNotifications();
                }
            }
        }, 1000);

        const existingStatus =
            this.gameData.playerData.plantStatus[pot.dataset.index];
        if (existingStatus && existingStatus.updateTimer) {
            clearInterval(existingStatus.updateTimer);
        }

        this.gameData.playerData.plantStatus[pot.dataset.index] = {
            plantId,
            status: "growing",
            updateTimer: updateTimer,
            lastUpdate: Date.now(),
            remainingGrowthTime: remainingGrowthTime,
            fertilizerStacks: existingStatus
                ? existingStatus.fertilizerStacks
                : 0,
        };

        this.savePlantStatus();

        setTimeout(() => {
            pot.classList.remove("growing");
            pot.classList.add("grown");
            this.gameData.playerData.plantStatus[pot.dataset.index].status =
                "grown";
            this.updateUI();
            this.savePlantStatus();
            this.saveGameData();
        }, remainingGrowthTime * 1000);

        this.updatePotActions(pot);
    }

    sellPlant(pot) {
        const plantId = pot.dataset.plantId;
        const plantData = this.gameData.plants.find((p) => p.id == plantId);
        const plantStatus =
            this.gameData.playerData.plantStatus[pot.dataset.index];

        if (plantStatus.status === "growing") {
            alert("Tanaman sedang tumbuh dan tidak bisa dijual.");
            return;
        }

        if (plantStatus && plantStatus.updateTimer) {
            clearInterval(plantStatus.updateTimer);
        }

        delete this.gameData.playerData.plantStatus[pot.dataset.index];

        pot.dataset.plantId = "";
        pot.classList.remove("grown", "growing");

        const timerDiv = pot.querySelector(".pot-timer");
        if (timerDiv) {
            pot.removeChild(timerDiv);
        }

        const plantImage = pot.querySelector("img");
        if (plantImage) {
            pot.removeChild(plantImage);
        }

        this.removePotActions(pot);

        this.gameData.playerData.money += plantData.sellPrice;

        this.savePlantStatus();
        this.saveGameData();

        this.updateUI();

        this.addNotification(
            `Anda menjual: ${plantData.title} seharga ${plantData.sellPrice} Koin`
        );
        this.showNotifications();
    }

    showPlantInfo(pot) {
        if (this.isAnyModalOpen()) return;

        this.closeAllModals();
        const plantId = pot.dataset.plantId;
        const plantData = this.gameData.plants.find((p) => p.id == plantId);
        const plantInfoModal = document.getElementById("plantInfoModal");
        const plantInfo = document.getElementById("plantInfo");
        plantInfo.innerHTML = `
            <h3 style="color: #4CAF50; font-size: 1.5em;">${plantData.title}</h3>
            <img src="${plantData.image}" alt="${plantData.title}" style="width: 200px; height: auto; margin-bottom: 10px;">
            <p style="font-size: 1em; color: #fff;">${plantData.description}</p>
            <p style="font-size: 1em; color: #FFD700;">Waktu Tumbuh: <strong>${plantData.growthTime} detik</strong></p>
            <p style="font-size: 1em; color: #FFD700;">Waktu Panen: <strong>${plantData.updateInterval} detik</strong></p>
            <p style="font-size: 1em; color: #FFD700;">Penambahan Koin: <strong>${plantData.moneyIncrement}</strong></p>
            <p style="font-size: 1em; color: #FFD700;">Pengurangan Polusi: <strong>${plantData.pollutionReduction}</strong></p>
            <p style="font-size: 1em; color: #FFD700;">Harga Jual: <strong>${plantData.sellPrice}</strong></p>
        `;
        plantInfoModal.style.display = "block";
    }

    showPlantInfoModal(plantData) {
        const plantInfoModal = document.getElementById("plantInfoModal");
        const plantInfo = document.getElementById("plantInfo");
        plantInfo.innerHTML = `
            <h3 style="color: #4CAF50; font-size: 1.5em;">${plantData.title}</h3>
            <img src="${plantData.image}" alt="${plantData.title}" style="width: 200px; height: auto; margin-bottom: 10px;">
            <p style="font-size: 1em; color: #fff;">${plantData.description}</p>
            <p style="font-size: 1em; color: #FFD700;">Waktu Tumbuh: <strong>${plantData.growthTime} detik</strong></p>
            <p style="font-size: 1em; color: #FFD700;">Waktu Panen: <strong>${plantData.updateInterval} detik</strong></p>
            <p style="font-size: 1em; color: #FFD700;">Penambahan Koin: <strong>${plantData.moneyIncrement}</strong></p>
            <p style="font-size: 1em; color: #FFD700;">Pengurangan Polusi: <strong>${plantData.pollutionReduction}</strong></p>
            <p style="font-size: 1em; color: #FFD700;">Harga Jual: <strong>${plantData.sellPrice}</strong></p>
        `;
        plantInfoModal.style.display = "block";
    }

    updatePlants() {
        // Logika untuk memperbarui pertumbuhan tanaman dan mengurangi polusi
    }

    startGameLoop() {
        if (this.isTutorialOpen == true) {
            return null;
        } else {
            setInterval(() => {
                this.updatePlants();
                this.updateUI();
                this.increasePollution();
            }, 2000);
        }
    }

    increasePollution() {
        let pollution = this.gameData.playerData.pollution;

        if (pollution > 0) {
            console.log("Increase Pollution dipanggil");
            this.gameData.playerData.pollution += 1;
        }

        this.updatePollutionEffect();
    }

    updatePollutionEffect() {
        if (this.isTutorialOpen == true) return;

        const pollutionLevel = this.gameData.playerData.pollution / 10000;
        const overlay = document.getElementById("pollutionOverlay");
        overlay.style.opacity = pollutionLevel;
    }

    async saveGameData() {
        localStorage.setItem(
            "gameData",
            JSON.stringify(this.gameData.playerData)
        );

        if (window.electron) {
            window.electron.saveGameData(this.gameData);
        }
    }

    showNotifications() {
        this.notifications.forEach((message) => {
            this.addNotification(message);
        });
        this.notifications = [];
    }

    resetGame() {
        if (
            confirm(
                "Apakah Anda yakin ingin mereset game? Semua progress akan hilang!"
            )
        ) {
            localStorage.removeItem("gameData");
            localStorage.removeItem("plantStatus");

            Object.values(this.gameData.playerData.plantStatus).forEach(
                (plant) => {
                    if (plant.updateTimer) clearInterval(plant.updateTimer);
                }
            );

            this.loadGameData().then(() => {
                this.gameData.playerData.plantStatus = {};
                this.renderGarden();
                this.updateUI();
                this.notifications.push("Game telah direset!");
                this.showNotifications();
            });
        }
    }

    deselectCurrentPot() {
        if (this.selectedPot !== null) {
            const previousPot = document.querySelector(
                `.pot[data-index='${this.selectedPot}']`
            );
            previousPot.classList.remove("selected");
            this.removePotActions(previousPot);
            this.selectedPot = null;
        }
    }

    updatePotActions(pot) {
        this.removePotActions(pot);
        this.showPotActions(pot);
    }

    replantAll() {
        Object.entries(this.gameData.playerData.plantStatus).forEach(
            ([potIndex, plant]) => {
                const pot = document.querySelector(
                    `.pot[data-index='${potIndex}']`
                );
                if (plant && pot && plant.status !== "grown") {
                    this.startPlantGrowth(pot, plant.remainingGrowthTime);
                }
            }
        );
    }

    addItem(name, type) {
        this.gameData.playerData.inventory.push({ name, type });
        this.saveGameData();
        this.updateUI();
    }

    populateShopItems() {
        const shopItemsContainer =
            document.getElementById("shopItemsContainer");
        shopItemsContainer.innerHTML = "";

        this.gameData.plants.forEach((plant) => {
            const plantCard = document.createElement("div");
            plantCard.className = `shop-item-card ${plant.rarity}`;

            const img = document.createElement("img");
            img.src = plant.image;
            img.alt = plant.title;

            const title = document.createElement("h4");
            title.textContent = plant.title;

            const cost = document.createElement("p");
            cost.textContent = `Biaya: ${plant.basePrice} Koin`;

            const buyButton = document.createElement("button");
            buyButton.className = "buy-plant-btn";
            buyButton.dataset.plantId = plant.id;
            buyButton.textContent = "Beli";
            buyButton.addEventListener("click", () => this.buyPlant(plant.id));

            plantCard.appendChild(img);
            plantCard.appendChild(title);
            plantCard.appendChild(cost);
            plantCard.appendChild(buyButton);

            shopItemsContainer.appendChild(plantCard);
        });
    }

    openShop() {
        if (this.isAnyModalOpen()) return;

        this.clickSfx.loop = false; // Atur agar musik berulang
        this.clickSfx.volume = 0.5; // Atur volume sesuai kebutuhan
        this.clickSfx.play().catch((error) => {
            console.error("Error playing background music:", error);
        });
        this.closeAllModals();
        this.populateShopItems();
        document.getElementById("shopModal").style.display = "block";
    }

    switchShopTab(button) {
        const targetTab = button.dataset.tab;

        document
            .querySelectorAll(".tab-button")
            .forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        document.querySelectorAll(".tab-content").forEach((tab) => {
            if (tab.id === targetTab) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });
    }

    /**
     * Method untuk menangani proses gatcha.
     * Koin akan dikurangi, dan tanaman yang dipilih secara acak
     * akan ditambahkan ke inventory.
     */
    handleGatcha(type, count) {
        let cost;
        // Tentukan biaya berdasarkan tipe dan jumlah gatcha
        switch (type) {
            case "cheap":
                cost = count > 1 ? 100 * count - 50 : 100;
                break;
            case "normal":
                cost = count > 1 ? 250 * count - 100 : 250;
                break;
            case "expensive":
                cost = count > 1 ? 1000 * count - 500 : 1000;
                break;
            default:
                console.error("Tipe gatcha tidak valid:", type);
                return;
        }

        if (this.gameData.playerData.money <= cost) {
            return;
        }

        // Kurangi Koin pemain dan update UI
        this.gameData.playerData.money -= cost;

        const obtainedPlants = [];
        // Untuk setiap kali gatcha
        for (let i = 0; i < count; i++) {
            const plant = this.getRandomPlant(type); // Pilih tanaman secara acak
            if (plant) {
                // Tambahkan tanaman ke inventory pemain
                this.gameData.playerData.inventory.push({
                    name: plant.title,
                    type: "plant",
                });
                obtainedPlants.push(plant);
            }
        }
        this.sellSfx.loop = false; // Atur agar musik berulang
        this.sellSfx.volume = 1; // Atur volume sesuai kebutuhan
        this.sellSfx.play().catch((error) => {
            console.error("Error playing background music:", error);
        });

        this.updateUI(); // Perbarui tampilan Koin dan inventori
        this.showGatchaNotification(obtainedPlants);
    }

    /**
     * Method untuk memilih tanaman secara acak berdasarkan tipe gatcha.
     * Untuk tipe "cheap", pilih tanaman dengan rarity "umum".
     * Untuk tipe "normal", pilih tanaman dengan rarity "tidak-umum".
     * Untuk tipe "expensive", pilih tanaman dengan rarity "langka", "epik", atau "legendaris".
     */
    getRandomPlant(type) {
        let weights = {};
        switch (type) {
            case "cheap":
                weights = {
                    "umum": 70,
                    "tidak-umum": 30,
                };
                break;
            case "normal":
                weights = {
                    "tidak-umum": 70,
                    "langka": 30,
                };
                break;
            case "expensive":
                weights = {
                    "langka": 65,
                    "epik": 25,
                    "legendaris": 10,
                };
                break;
            default:
                console.error("Tipe gatcha tidak valid:", type);
                return null;
        }
        
        let totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
        let randomNum = Math.random() * totalWeight;
        const originalRandom = randomNum;
        
        let selectedRarity = null;
        for (let rarity in weights) {
            if (randomNum < weights[rarity]) {
                selectedRarity = rarity;
                break;
            }
            randomNum -= weights[rarity];
        }
        console.log(`[Gatcha ${type}] random: ${originalRandom.toFixed(2)}, selected rarity: ${selectedRarity}`);
        
        let candidates = this.gameData.plants.filter(p => p.rarity === selectedRarity);
        
        if (candidates.length === 0) {
            console.warn(`Tidak ada tanaman dengan rarity "${selectedRarity}". Fallback ke "umum".`);
            candidates = this.gameData.plants.filter(p => p.rarity === "umum");
        }
        
        if (candidates.length === 0) {
            console.error("Tidak ada tanaman yang cocok ditemukan.");
            return null;
        }
        
        const randomIndex = Math.floor(Math.random() * candidates.length);
        console.log(`[Gatcha ${type}] tanaman dipilih:`, candidates[randomIndex]);
        return candidates[randomIndex];
    }

    /**
     * Method untuk menampilkan notifikasi hasil gatcha.
     * Modal ini akan menampilkan daftar tanaman yang diperoleh.
     */
    showGatchaNotification(plants) {
        const modal = document.getElementById("gatchaNotificationModal");
        const container = document.getElementById("gatchaPlantsContainer");
        container.innerHTML = ""; // Bersihkan kontainer sebelumnya

        plants.forEach((plant) => {
            const plantEl = document.createElement("div");
            plantEl.className = "gatcha-plant " + plant.rarity;
            plantEl.innerHTML = `
                <img src="${plant.image}" alt="${plant.title}">
                <span>${plant.title}</span>
            `;
            container.appendChild(plantEl);
        });

        modal.style.display = "block";
    }

    buyPlant(plantId) {
        const plant = this.gameData.plants.find((p) => p.id == plantId);
        if (!plant) {
            alert("Tanaman tidak ditemukan.");
            return;
        }

        const price = plant.basePrice;

        if (this.gameData.playerData.money < price) {
            this.addNotification("Koin tidak cukup!");
            this.showNotifications();
            return;
        }

        this.sellSfx.loop = false; // Atur agar musik berulang
        this.sellSfx.volume = 0.5; // Atur volume sesuai kebutuhan
        this.sellSfx.play().catch((error) => {
            console.error("Error playing background music:", error);
        });

        this.gameData.playerData.money -= price;
        this.gameData.playerData.inventory.push({
            name: plant.title,
            type: "plant",
        });
        this.updateUI();
        this.saveGameData();
    }

    loadShopData() {
        // Implementasi jika ada data shop yang berasal dari sumber eksternal
    }

    closeAllModals() {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => {
            if (
                modal.id === "saveRiverModal" ||
                modal.id === "sortingGarbageModal" ||
                modal.id === "tutorialModal"
            ) {
                return;
            }
            modal.style.display = "none";
        });
    }

    isAnyModalOpen() {
        const modals = document.querySelectorAll(".modal");
        for (let modal of modals) {
            if (modal.style.display === "block") {
                return true;
            }
        }
        return false;
    }

    openUpgrade() {
        if (this.isAnyModalOpen()) return;

        this.clickSfx.loop = false; // Atur agar musik berulang
        this.clickSfx.volume = 0.5; // Atur volume sesuai kebutuhan
        this.clickSfx.play().catch((error) => {
            console.error("Error playing background music:", error);
        });
        this.closeAllModals();
        const upgradeModal = document.getElementById("upgradeModal");
        this.updateUpgradeUI();
        upgradeModal.style.display = "block";
    }

    setupUpgradeModal() {
        this.updateUpgradeUI();

        document
            .getElementById("upgradePotBtn")
            .addEventListener("click", () => {
                this.upgradePot();
            });

        document
            .getElementById("upgradeMoneyMultiplierBtn")
            .addEventListener("click", () => {
                this.upgradeMoneyMultiplier();
            });

        document
            .getElementById("upgradePollutionMultiplierBtn")
            .addEventListener("click", () => {
                this.upgradePollutionMultiplier();
            });
    }

    updateUpgradeUI() {
        const potCount = this.gameData.playerData.upgrades.potCount;
        const moneyMultiplier =
            this.gameData.playerData.upgrades.moneyMultiplier;
        const pollutionMultiplier =
            this.gameData.playerData.upgrades.pollutionMultiplier;

        document.getElementById("potCount").textContent = potCount;
        document.getElementById(
            "moneyMultiplier"
        ).textContent = `${moneyMultiplier}x`;
        document.getElementById(
            "pollutionMultiplier"
        ).textContent = `${pollutionMultiplier}x`;

        const nextPotUpgradeCost = 250 * potCount;
        const nextMoneyMultiplierCost = 1000 * moneyMultiplier;
        const nextPollutionMultiplierCost = 1500 * pollutionMultiplier;

        document.getElementById("potUpgradeCost").textContent =
            nextPotUpgradeCost;
        document.getElementById("moneyMultiplierCost").textContent =
            nextMoneyMultiplierCost;
        document.getElementById("pollutionMultiplierCost").textContent =
            nextPollutionMultiplierCost;
    }

    upgradePot() {
        const currentPot = this.gameData.playerData.upgrades.potCount;
        if (currentPot >= 20) {
            alert("Jumlah pot sudah maksimal (20).");
            return;
        }

        const cost = 250 * currentPot;

        if (this.gameData.playerData.money < cost) {
            this.notifications.push(`Koin tidak cukup untuk upgrade pot.`);
            this.showNotifications();
            return;
        }

        this.sellSfx.loop = false; // Atur agar musik berulang
        this.sellSfx.volume = 0.5; // Atur volume sesuai kebutuhan
        this.sellSfx.play().catch((error) => {
            console.error("Error playing background music:", error);
        });

        this.gameData.playerData.money -= cost;
        this.gameData.playerData.upgrades.potCount += 1;

        const newPot = document.querySelector(
            `.pot[data-index='${currentPot}']`
        );
        if (newPot) {
            newPot.style.display = "block";
        }

        this.updateUI();
        this.updateUpgradeUI();
        this.saveGameData();
    }

    upgradeMoneyMultiplier() {
        const currentMultiplier =
            this.gameData.playerData.upgrades.moneyMultiplier;
        if (currentMultiplier >= 5) {
            alert("Pengganda Koin sudah maksimal (5x).");
            return;
        }

        const cost = 1000 * currentMultiplier;

        if (this.gameData.playerData.money < cost) {
            this.notifications.push(
                `Koin tidak cukup untuk meningkatkan pengganda Koin.`
            );
            this.showNotifications();
            return;
        }

        this.sellSfx.loop = false; // Atur agar musik berulang
        this.sellSfx.volume = 0.5; // Atur volume sesuai kebutuhan
        this.sellSfx.play().catch((error) => {
            console.error("Error playing background music:", error);
        });

        this.gameData.playerData.money -= cost;
        this.gameData.playerData.upgrades.moneyMultiplier += 1;
        this.updateUI();
        this.updateUpgradeUI();
        this.saveGameData();
    }

    upgradePollutionMultiplier() {
        const currentMultiplier =
            this.gameData.playerData.upgrades.pollutionMultiplier;
        if (currentMultiplier >= 5) {
            alert("Pengganda polusi sudah maksimal (5x).");
            return;
        }

        const cost = 1500 * currentMultiplier;

        if (this.gameData.playerData.money < cost) {
            this.notifications.push(
                `Koin tidak cukup untuk meningkatkan pengganda polusi.`
            );
            this.showNotifications();
            return;
        }

        this.sellSfx.loop = false; // Atur agar musik berulang
        this.sellSfx.volume = 0.5; // Atur volume sesuai kebutuhan
        this.sellSfx.play().catch((error) => {
            console.error("Error playing background music:", error);
        });

        this.gameData.playerData.money -= cost;
        this.gameData.playerData.upgrades.pollutionMultiplier += 1;
        this.updateUI();
        this.updateUpgradeUI();
        this.saveGameData();
    }

    updateUI() {
        document.getElementById("money").querySelector("span").textContent =
            this.gameData.playerData.money;
        document.getElementById("pollution").querySelector("span").textContent =
            this.gameData.playerData.pollution;
    }

    setupMinigame() {
        document
            .getElementById("minigameBtn")
            .addEventListener("click", () => this.openMinigameSelection());

        const minigameCards = document.querySelectorAll(".minigame-card");
        minigameCards.forEach((card) => {
            card.addEventListener("click", () => {
                const gameName = card.dataset.game;
                this.openMinigame(gameName);
            });
        });
    }

    openMinigameSelection() {
        if (this.isAnyModalOpen()) return;

        this.clickSfx.loop = false; // Atur agar musik berulang
        this.clickSfx.volume = 0.5; // Atur volume sesuai kebutuhan
        this.clickSfx.play().catch((error) => {
            console.error("Error playing background music:", error);
        });
        this.closeAllModals();
        document.getElementById("minigameSelectionModal").style.display =
            "block";
    }

    openMinigame(gameName) {
        if (gameName === "saveRiver") {
            this.closeAllModals();
            document.getElementById("saveRiverModal").style.display = "block";
            this.startSaveRiverGame();
        } else if (gameName === "sortingGarbage") {
            this.closeAllModals();
            document.getElementById("sortingGarbageModal").style.display =
                "block";
            this.startSortingGarbageGame();
        }
    }

    closeSaveRiverModal() {
        this.endSaveRiverGame(true);
        document.getElementById("saveRiverModal").style.display = "none";
    }

    startSaveRiverGame() {
        const { saveRiver } = this;
        saveRiver.score = 0;
        saveRiver.timeLeft = 30;
        saveRiver.countdownStart = 5;
        saveRiver.isStarted = false; // Flag untuk menandakan permainan belum dimulai

        const gameScoreSpan = document.getElementById("gameScore");
        const gameTimerSpan = document.getElementById("gameTimer");
        const gameBackground = document.getElementById("gameBackground");

        // Hapus elemen sampah yang masih ada
        const trashElements = gameBackground.querySelectorAll(".trash");
        trashElements.forEach((trash) => trash.remove());

        gameScoreSpan.textContent = saveRiver.score;
        gameTimerSpan.textContent = `Mulai dalam: ${saveRiver.countdownStart}`;

        saveRiver.countdownInterval = setInterval(() => {
            if (saveRiver.countdownStart > 0) {
                gameTimerSpan.textContent = `Mulai dalam: ${saveRiver.countdownStart}`;
                saveRiver.countdownStart--;
            } else {
                clearInterval(saveRiver.countdownInterval);
                saveRiver.isStarted = true; // Countdown selesai, permainan dimulai
                gameTimerSpan.textContent = saveRiver.timeLeft;
                this.runSaveRiverTimer();
                this.spawnTrash();
            }
        }, 1000);
    }

    runSaveRiverTimer() {
        const { saveRiver } = this;
        const gameTimerSpan = document.getElementById("gameTimer");

        saveRiver.gameInterval = setInterval(() => {
            if (saveRiver.timeLeft > 0) {
                saveRiver.timeLeft--;
                gameTimerSpan.textContent = saveRiver.timeLeft;
                if (saveRiver.timeLeft <= 0) {
                    this.endSaveRiverGame();
                }
            }
        }, 1000);
    }

    spawnTrash() {
        const { saveRiver } = this;
        // Hanya spawn sampah jika permainan sudah dimulai (countdown selesai)
        if (!saveRiver.isStarted) return;

        const gameBackground = document.getElementById("gameBackground");
        const currentTrash = gameBackground.querySelectorAll(".trash").length;

        if (currentTrash < saveRiver.maxTrash && saveRiver.timeLeft > 0) {
            const types = Object.keys(this.sortingGarbage.garbageTypes);
            const randomType = types[Math.floor(Math.random() * types.length)];
            const images = this.sortingGarbage.garbageTypes[randomType];
            const randomImage =
                images[Math.floor(Math.random() * images.length)];

            const trash = document.createElement("img");
            trash.src = `assets/images/trash-items/${randomImage}`;
            trash.className = "trash";
            trash.style.position = "absolute";
            trash.style.width = "60px";
            trash.style.height = "60px";
            trash.style.cursor = "pointer";

            trash.style.top = `${
                Math.random() * (gameBackground.clientHeight - 60)
            }px`;
            trash.style.left = `${
                Math.random() * (gameBackground.clientWidth - 60)
            }px`;

            trash.addEventListener("click", () => {
                saveRiver.score += 10;
                document.getElementById("gameScore").textContent =
                    saveRiver.score;
                trash.remove();
                this.spawnTrash();
            });

            gameBackground.appendChild(trash);
        }

        if (saveRiver.timeLeft > 0) {
            saveRiver.trashInterval = setTimeout(() => {
                this.spawnTrash();
            }, 2000);
        }
    }

    endSaveRiverGame(manualClose = false) {
        const { saveRiver } = this;
        const gameBackground = document.getElementById("gameBackground");
        const gameScoreSpan = document.getElementById("gameScore");
        const gameTimerSpan = document.getElementById("gameTimer");

        clearInterval(saveRiver.gameInterval);
        clearTimeout(saveRiver.trashInterval);
        clearInterval(saveRiver.countdownInterval);

        const trashElements = gameBackground.querySelectorAll(".trash");
        trashElements.forEach((trash) => trash.remove());

        // Reset flag agar permainan dianggap belum dimulai saat game diakhiri
        saveRiver.isStarted = false;

        if (manualClose) {
            this.notifications.push(`Permainan "Selamatkan Sungai" ditutup.`);
            this.showNotifications();
            return;
        }

        const score = saveRiver.score;
        if (score >= 500) {
            const extraPoints = score - 500;
            const airDiterima = Math.floor(extraPoints / 100) + 1;
            const KoinDiterima = Math.floor(extraPoints / 100) * 100 + 100;
            this.gameData.playerData.inventory.push({
                name: "Air",
                type: "item",
            });
            this.gameData.playerData.money += KoinDiterima;
            this.notifications.push(
                `Anda menang permainan! Mendapatkan ${airDiterima} Air dan ${KoinDiterima} Koin.`
            );

            if (score >= this.missionProgress.saveRiver) {
                this.missionProgress.saveRiver = score;
                this.updateMissionProgress();
            }
        } else {
            this.notifications.push(
                `Permainan berakhir! Skor Anda: ${score}. Tidak memenuhi kriteria kemenangan.`
            );
        }
        this.showNotifications();
        this.saveGameData();
        this.updateUI();

        this.closeSaveRiverModal();
    }

    closeMinigameSelectionModal() {
        document.getElementById("minigameSelectionModal").style.display =
            "none";
    }

    addNotification(message) {
        const notificationContainer = document.getElementById("notification");

        const notificationItem = document.createElement("div");
        notificationItem.className = "notification-item";
        notificationItem.textContent = message;

        notificationContainer.appendChild(notificationItem);

        setTimeout(() => {
            notificationItem.classList.add("fade-out");
            notificationItem.addEventListener("animationend", () => {
                notificationItem.remove();
            });
        }, 3000);
    }

    openMissionModal() {
        if (this.isAnyModalOpen()) return;

        this.clickSfx.loop = false; // Atur agar musik berulang
        this.clickSfx.volume = 0.5; // Atur volume sesuai kebutuhan
        this.clickSfx.play().catch((error) => {
            console.error("Error playing background music:", error);
        });
        this.closeAllModals();
        document.getElementById("missionModal").style.display = "block";
        this.updateMissionProgress();
    }

    updateMissionProgress() {
        const pollution = this.gameData.playerData.pollution;
        const saveRiverScore = this.missionProgress.saveRiver;
        const sortingGarbageScore = this.missionProgress.sortingGarbage
            ? this.missionProgress.sortingGarbage
            : 0;

        document.getElementById("pollutionProgress").textContent = pollution;
        document.getElementById("saveRiverProgress").textContent =
            saveRiverScore;
        document.getElementById("sortingGarbageProgress").textContent =
            sortingGarbageScore;

        const claimRewardBtn = document.getElementById("claimRewardBtn");
        if (pollution === 0) {
            claimRewardBtn.classList.add("active");
            claimRewardBtn.style.backgroundColor = "#4CAF50";
            claimRewardBtn.style.cursor = "pointer";
            claimRewardBtn.style.opacity = "1";
        } else {
            claimRewardBtn.classList.remove("active");
            claimRewardBtn.style.backgroundColor = "#f44336";
            claimRewardBtn.style.cursor = "not-allowed";
            claimRewardBtn.style.opacity = "0.5";
        }

        const claimSaveRiverBtn = document.getElementById("claimSaveRiverBtn");
        if (saveRiverScore >= 700) {
            claimSaveRiverBtn.classList.add("active");
            claimSaveRiverBtn.style.backgroundColor = "#4CAF50";
            claimSaveRiverBtn.style.cursor = "pointer";
            claimSaveRiverBtn.style.opacity = "1";
        } else {
            claimSaveRiverBtn.classList.remove("active");
            claimSaveRiverBtn.style.backgroundColor = "#f44336";
            claimSaveRiverBtn.style.cursor = "not-allowed";
            claimSaveRiverBtn.style.opacity = "0.5";
        }

        const claimSortingGarbageBtn = document.getElementById(
            "claimSortingGarbageBtn"
        );
        if (sortingGarbageScore >= 400) {
            claimSortingGarbageBtn.classList.add("active");
            claimSortingGarbageBtn.style.backgroundColor = "#4CAF50";
            claimSortingGarbageBtn.style.cursor = "pointer";
            claimSortingGarbageBtn.style.opacity = "1";
        } else {
            claimSortingGarbageBtn.classList.remove("active");
            claimSortingGarbageBtn.style.backgroundColor = "#f44336";
            claimSortingGarbageBtn.style.cursor = "not-allowed";
            claimSortingGarbageBtn.style.opacity = "0.5";
        }
    }

    claimSaveRiverReward() {
        if (this.saveRiver.score >= 700) {
            alert("Hadiah berhasil diklaim! Anda mendapatkan Skin Pot Biru.");
            this.unlockBluePot();
            const claimBtn = document.getElementById("claimSaveRiverBtn");
            claimBtn.textContent = "Sudah Diklaim";
            claimBtn.disabled = true;
        } else {
            return;
        }
    }

    claimSortingGarbageReward() {
        const sortingGarbageScore = this.sortingGarbage
            ? this.sortingGarbage.score
            : 0;
        if (sortingGarbageScore >= 400) {
            alert("Hadiah berhasil diklaim! Anda mendapatkan Skin Pot Merah.");
            this.unlockRedPot();
            const claimBtn = document.getElementById("claimSortingGarbageBtn");
            claimBtn.textContent = "Sudah Diklaim";
            claimBtn.disabled = true;
        } else {
            return;
        }
    }

    claimReward() {
        if (this.gameData.playerData.pollution > 0) return;

        const confirmEnd = confirm(
            "Apakah Anda ingin mengakhiri cerita? Semua resource akan menghilang."
        );
        if (confirmEnd) {
            window.location.href = "ending.html";
        } else {
            checkMissionCompletion();
        }
    }

    unlockBluePot() {
        const bluePotButton = document.querySelector(
            '.skin-btn[data-skin="blue"]'
        );
        if (bluePotButton) {
            this.gameData.playerData.skins.blue = true;
            bluePotButton.disabled = false;
            const bluePotItem = document.querySelector(
                ".inventory-item.locked"
            );
            if (bluePotItem) {
                bluePotItem.classList.remove("locked");
                bluePotItem.querySelector("span").textContent = "Pot Biru";
            }
        }
    }

    unlockRedPot() {
        const redPotButton = document.querySelector(
            '.skin-btn[data-skin="red"]'
        );
        if (redPotButton) {
            this.gameData.playerData.skins.red = true;
            redPotButton.disabled = false;
            const redPotButtonElement = document.querySelector(
                '.inventory-item.locked button[data-skin="red"]'
            );
            if (redPotButtonElement) {
                const redPotItem =
                    redPotButtonElement.closest(".inventory-item");
                redPotItem.classList.remove("locked");
                redPotItem.querySelector("span").textContent = "Pot Merah";
            }
        }
    }

    openSkinModal() {
        if (this.isAnyModalOpen()) return;

        this.clickSfx.loop = false; // Atur agar musik berulang
        this.clickSfx.volume = 0.5; // Atur volume sesuai kebutuhan
        this.clickSfx.play().catch((error) => {
            console.error("Error playing background music:", error);
        });
        this.closeAllModals();
        document.getElementById("skinModal").style.display = "block";
    }

    equipSkin(pot, skin) {
        if (!this.gameData.playerData.skins[skin]) {
            alert("Anda belum memiliki skin ini!");
            return;
        }

        this.selectedSkin = skin;
        this.saveGameData();

        const pots = document.querySelectorAll(".pot");
        pots.forEach((p) => {
            if (skin === "blue") {
                p.style.backgroundImage =
                    "url('assets/images/pot-skins/blue-pot.png')";
            } else if (skin === "red") {
                p.style.backgroundImage =
                    "url('assets/images/pot-skins/red-pot.png')";
            } else {
                p.style.backgroundImage =
                    "url('assets/images/pot-skins/default-pot.png')";
            }
        });

        this.updateSkinButtons(skin);
    }

    updateSkinButtons(selectedSkin) {
        const skinButtons = document.querySelectorAll(".skin-btn");
        skinButtons.forEach((button) => {
            if (button.dataset.skin === selectedSkin) {
                button.classList.add("equipped");
                button.textContent = "Terpakai";
                button.style.backgroundColor = "red";
                button.disabled = true;
            } else {
                button.classList.remove("equipped");
                button.textContent = "Pasang";
                button.style.backgroundColor = "green";
                button.disabled = false;
            }
        });
    }

    equipSkinToSelectedPot() {
        const pot = document.querySelector(".pot");
        if (pot) {
            this.equipSkin(pot, this.selectedSkin);
        } else {
            console.log("Tidak ada pot yang dipilih.");
        }
    }

    updateSkinModal() {
        const skinButtons = document.querySelectorAll(".skin-btn");
        skinButtons.forEach((button) => {
            if (button.dataset.skin === this.selectedSkin) {
                button.classList.add("equipped");
                button.textContent = "Terpakai";
                button.style.backgroundColor = "red";
                button.disabled = true;
            } else {
                button.classList.remove("equipped");
                button.textContent = "Pasang";
                button.style.backgroundColor = "green";
                button.disabled = false;
            }
        });
    }

    populateGatchaPlants() {
        const gatchaCheapPlantsContainer =
            document.getElementById("gatchaCheapPlants");
        const gatchaNormalPlantsContainer =
            document.getElementById("gatchaNormalPlants");
        const gatchaExpensivePlantsContainer = document.getElementById(
            "gatchaExpensivePlants"
        );

        gatchaCheapPlantsContainer.innerHTML = "";
        gatchaNormalPlantsContainer.innerHTML = "";
        gatchaExpensivePlantsContainer.innerHTML = "";

        const cheapPlants = this.gameData.plants.filter(
            (plant) => plant.rarity === "umum" || plant.rarity === "tidak-umum"
        );

        const normalPlants = this.gameData.plants.filter(
            (plant) =>
                plant.rarity === "tidak-umum" || plant.rarity === "langka"
        );

        const expensivePlants = this.gameData.plants.filter(
            (plant) =>
                plant.rarity === "langka" ||
                plant.rarity === "epik" ||
                plant.rarity === "legendaris"
        );

        const populatePlants = (container, plants) => {
            plants.forEach((plant) => {
                const plantCard = document.createElement("div");
                plantCard.className = `gatcha-plant ${plant.rarity}`;

                const img = document.createElement("img");
                img.src = `assets/images/plants/${plant.title
                    .toLowerCase()
                    .replace(" ", "-")}-grown.png`;
                img.alt = plant.title;
                img.className = "gatcha-plant-image";

                const name = document.createElement("span");
                name.textContent = plant.title;
                name.className = "gatcha-plant-name";

                plantCard.appendChild(img);
                plantCard.appendChild(name);
                container.appendChild(plantCard);
            });
        };

        populatePlants(gatchaCheapPlantsContainer, cheapPlants);
        populatePlants(gatchaNormalPlantsContainer, normalPlants);
        populatePlants(gatchaExpensivePlantsContainer, expensivePlants);
    }

    startSortingGarbageGame() {
        const { sortingGarbage } = this;
        sortingGarbage.score = 0;
        sortingGarbage.timeLeft = 30;
        document.getElementById("sortingGameScore").textContent = "0";
        document.getElementById("sortingGameTimer").textContent = "30";

        let countdown = sortingGarbage.countdownStart;
        const countdownDisplay = document.createElement("div");
        countdownDisplay.style.position = "absolute";
        countdownDisplay.style.top = "50%";
        countdownDisplay.style.left = "50%";
        countdownDisplay.style.transform = "translate(-50%, -50%)";
        countdownDisplay.style.fontSize = "48px";
        countdownDisplay.style.color = "white";
        countdownDisplay.id = "sortingGameCountdown";
        document
            .getElementById("garbageGameBackground")
            .appendChild(countdownDisplay);

        sortingGarbage.countdownInterval = setInterval(() => {
            countdownDisplay.textContent = countdown;
            if (countdown <= 0) {
                clearInterval(sortingGarbage.countdownInterval);
                countdownDisplay.remove();
                this.startSortingGameplay();
            }
            countdown--;
        }, 1000);

        if (this.listenerBoolean !== true) {
            // Panggil satu kali untuk memasang event listener klik pada bin
            this.setupGarbageBinsListeners();
            // Pasang event listener keydown seperti semula
            document.addEventListener(
                "keydown",
                this.handleGarbageSorting.bind(this)
            );
        }
    }

    startSortingGameplay() {
        const { sortingGarbage } = this;
        this.spawnGarbage();

        sortingGarbage.gameInterval = setInterval(() => {
            sortingGarbage.timeLeft--;
            document.getElementById("sortingGameTimer").textContent =
                sortingGarbage.timeLeft;

            if (sortingGarbage.timeLeft <= 0) {
                this.endSortingGarbageGame();
            }
        }, 1000);
    }

    spawnGarbage() {
        if (!this.sortingGarbage.currentGarbage) {
            const types = ["organic", "anorganic", "hazardous"];
            const type = types[Math.floor(Math.random() * types.length)];
            const images = this.sortingGarbage.garbageTypes[type];
            const image = images[Math.floor(Math.random() * images.length)];

            const garbage = document.createElement("div");
            garbage.className = "garbage";
            garbage.dataset.type = type;

            const img = document.createElement("img");
            img.src = `assets/images/trash-items/${image}`;
            garbage.appendChild(img);

            document.getElementById("garbageContainer").appendChild(garbage);
            this.sortingGarbage.currentGarbage = garbage;
        }
    }

    handleGarbageSorting(event) {
        if (!this.sortingGarbage.currentGarbage) return;

        if (this.listenerBoolean !== true) {
            return;
        }

        let selectedType = null;
        const garbage = this.sortingGarbage.currentGarbage;

        switch (event.key) {
            case "ArrowLeft":
                selectedType = "anorganic";
                break;
            case "ArrowDown":
                selectedType = "organic";
                break;
            case "ArrowRight":
                selectedType = "hazardous";
                break;
            default:
                return;
        }

        // Panggil proses yang sama dengan input klik
        this.processGarbageSorting(selectedType);
    }

    endSortingGarbageGame(manualClose = false) {
        const { sortingGarbage } = this;

        clearInterval(sortingGarbage.gameInterval);
        clearInterval(sortingGarbage.countdownInterval);
        document.removeEventListener(
            "keydown",
            this.handleGarbageSorting.bind(this)
        );

        // Hapus countdown display jika masih ada
        const countdownDisplay = document.getElementById(
            "sortingGameCountdown"
        );
        if (countdownDisplay) {
            countdownDisplay.remove();
        }

        if (sortingGarbage.currentGarbage) {
            sortingGarbage.currentGarbage.remove();
            sortingGarbage.currentGarbage = null;
        }

        if (manualClose) {
            this.notifications.push(`Permainan "Sortir Sampah" ditutup.`);
            this.showNotifications();
            document.getElementById("sortingGarbageModal").style.display =
                "none";
            return;
        }

        const score = sortingGarbage.score;
        if (score >= 300) {
            const extraPoints = score - 300;
            const pupukDiterima = Math.floor(extraPoints / 50) + 1;
            const KoinDiterima = Math.floor(extraPoints / 50) * 100 + 100;

            for (let i = 0; i < pupukDiterima; i++) {
                this.gameData.playerData.inventory.push({
                    name: "Pupuk",
                    type: "item",
                });
            }
            this.gameData.playerData.money += KoinDiterima;
            this.notifications.push(
                `Anda menang permainan! Mendapatkan ${pupukDiterima} Pupuk dan ${KoinDiterima} Koin.`
            );

            if (score > this.missionProgress.sortingGarbage) {
                this.missionProgress.sortingGarbage = score;
                this.updateMissionProgress();
            }
        } else {
            this.notifications.push(
                `Permainan berakhir! Skor Anda: ${score}. Tidak memenuhi kriteria kemenangan.`
            );
        }

        this.showNotifications();
        this.saveGameData();
        this.updateUI();

        // Tutup modal setelah permainan selesai
        document.getElementById("sortingGarbageModal").style.display = "none";
    }

    closeSortingGarbageModal() {
        this.endSortingGarbageGame(true);
    }

    showTutorial() {
        const tutorialModal = document.getElementById("tutorialModal");
        const nextSlideBtn = document.getElementById("nextSlideBtn");

        tutorialModal.style.display = "block";
        // Tampilkan slide pertama
        this.showSlide(this.currentSlide);
        // Perbarui label tombol berdasarkan progress slide
        this.updateTutorialButton();

        nextSlideBtn.addEventListener("click", () => {
            // Jika sudah berada di slide terakhir, maka tutup tutorial
            if (this.currentSlide === this.totalSlides) {
                tutorialModal.style.display = "none";
                this.isTutorialOpen = false;

                this.startGameLoop();
            } else {
                // Pindah ke slide berikutnya dan perbarui tombol
                this.currentSlide++;
                this.showSlide(this.currentSlide);
                this.updateTutorialButton();
            }
        });
    }

    updateTutorialButton() {
        const nextSlideBtn = document.getElementById("nextSlideBtn");
        // Jika sedang menampilkan slide terakhir, tombol berubah menjadi "Selesai"
        if (this.currentSlide === this.totalSlides) {
            nextSlideBtn.textContent = `Selesai (${this.currentSlide}/${this.totalSlides})`;
        } else {
            nextSlideBtn.textContent = `Berikutnya (${this.currentSlide}/${this.totalSlides})`;
        }
    }

    showSlide(slideNumber) {
        for (let i = 1; i <= this.totalSlides; i++) {
            document.getElementById(`slide${i}`).style.display =
                i === slideNumber ? "block" : "none";
        }
    }

    updatePollutionUI() {
        const pollutionOverlay = document.getElementById("pollutionOverlay");
        pollutionOverlay.style.opacity = 1;
    }

    // Method untuk setup event listener tombol gatcha
    setupGatchaEventListeners() {
        document.querySelectorAll(".gatcha-btn").forEach((button) => {
            button.addEventListener("click", (e) => this.handleGatchaClick(e));
        });
    }

    // Method untuk menangani klik tombol gatcha
    handleGatchaClick(event) {
        const button = event.currentTarget;
        const type = button.dataset.type; // "cheap", "normal", "expensive"
        const count = parseInt(button.dataset.count);
        let cost = 0;

        // Tentukan biaya sesuai jenis dan jumlah
        if (type === "cheap") {
            cost = count === 1 ? 100 : 250;
        } else if (type === "normal") {
            cost = count === 1 ? 250 : 650;
        } else if (type === "expensive") {
            cost = count === 1 ? 1000 : 2500;
        }

        // Periksa kecukupan Koin
        if (this.gameData.playerData.money < cost) {
            this.notifications.push(`Koin tidak cukup untuk melakukan gatcha!`);
            this.showNotifications();
            return;
        }

        // Kurangi Koin dan perbarui UI
        this.gameData.playerData.money -= cost;
        this.updateUI();

        // Gunakan getRandomPlant untuk setiap gatcha agar hasilnya sesuai weighted probability
        const obtainedPlants = [];
        for (let i = 0; i < count; i++) {
            const plant = this.getRandomPlant(type);
            if (!plant) continue;
            // Tambahkan tanaman ke inventory pemain
            this.gameData.playerData.inventory.push({
                name: plant.title,
                type: "plant",
                image: plant.image,
            });
            obtainedPlants.push(plant);
        }

        // Tampilkan modal notifikasi gatcha dengan hasil yang telah dipilih
        this.showGatchaNotification(obtainedPlants);
    }

    // Method untuk menampilkan notifikasi hasil gatcha
    showGatchaNotification(plants) {
        const modal = document.getElementById("gatchaNotificationModal");
        const container = document.getElementById("gatchaPlantsContainer");
        container.innerHTML = ""; // Bersihkan kontainer

        plants.forEach((plant) => {
            const plantEl = document.createElement("div");
            plantEl.className = "gatcha-plant " + plant.rarity; // kelas tambahan sesuai rarity
            plantEl.innerHTML = `
                <img class="gatcha-plant-image" src="${plant.image}" alt="${plant.title}">
                <span class="gatcha-plant-name">${plant.title}</span>
            `;
            container.appendChild(plantEl);
        });

        modal.style.display = "block";
    }

    // Method notifikasi sederhana (jika belum ada)
    showNotification(message) {
        const notification = document.getElementById("notification");
        notification.textContent = message;
        // Atur posisi agar notifikasi terlihat
        notification.style.transform = "translateY(0)";
        notification.style.opacity = 1;
        setTimeout(() => {
            // Kembalikan posisi notifikasi agar menghilang
            notification.style.transform = "translateY(-100px)";
            notification.style.opacity = 0;
        }, 3000);
    }

    // Tambahkan metode ini untuk inisialisasi event listener klik pada bin
    setupGarbageBinsListeners() {
        this.listenerBoolean = true;
        document.getElementById("organicBin").addEventListener("click", () => {
            console.log("Organic bin clicked");
            this.processGarbageSorting("organic");
        });

        document
            .getElementById("anorganicBin")
            .addEventListener("click", () => {
                console.log("Anorganic bin clicked");
                this.processGarbageSorting("anorganic");
            });

        document
            .getElementById("hazardousBin")
            .addEventListener("click", () => {
                console.log("Hazardous bin clicked");
                this.processGarbageSorting("hazardous");
            });
    }

    // Metode ini menangani logika sorting untuk input klik atau keydown
    processGarbageSorting(selectedType) {
        // Pastikan masih ada sampah yang aktif
        if (!this.sortingGarbage.currentGarbage) return;

        const garbage = this.sortingGarbage.currentGarbage;
        let correct = garbage.dataset.type === selectedType;
        const gameBackground = document.getElementById("garbageGameBackground");

        if (correct == true) {
            this.sortingGarbage.score += 10;
            gameBackground.style.backgroundColor = "rgba(0, 255, 0, 0.3)";
        } else {
            this.sortingGarbage.score -= 5;
            gameBackground.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
        }

        // Perbarui skor pada UI, misalnya:
        document.getElementById("sortingGameScore").textContent =
            this.sortingGarbage.score;

        setTimeout(() => {
            gameBackground.style.backgroundColor = "";
        }, 300);

        garbage.remove();
        this.sortingGarbage.currentGarbage = null;
        this.spawnGarbage();
    }
}

function checkMissionCompletion() {
    const pollutionProgress = this.gameData.playerData.pollution;
    const saveRiverScore = this.saveRiver.score;
    const sortingGarbageScore = this.sortingGarbage.score;

    if (pollutionProgress <= 0) {
        document.getElementById("claimRewardBtn").classList.add("active");
        document.getElementById("claimRewardBtn").classList.remove("disabled");
    }

    if (saveRiverScore >= 700) {
        document.getElementById("claimsaveRiverBtn").classList.add("active");
        document
            .getElementById("claimsaveRiverBtn")
            .classList.remove("disabled");
    }

    if (sortingGarbageScore >= 400) {
        document.getElementById("claimsaveRiverBtn").classList.add("active");
        document
            .getElementById("claimsaveRiverBtn")
            .classList.remove("disabled");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    window.game = new Game();
});

// Event listener untuk tombol skin
document.getElementById("skinBtn").addEventListener("click", () => {
    game.openSkinModal();
});

// Event listener untuk tombol "Equip" di modal skin
document.querySelectorAll(".skin-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const skin = button.dataset.skin;
        const pot = document.querySelector(".pot");
        console.log(`Tombol pasang diklik untuk skin: ${skin}`);

        if (pot) {
            game.equipSkin(pot, skin);
            game.updateSkinModal();
            document.getElementById("skinModal").style.display = "none";
        } else {
            console.log("Tidak ada pot yang dipilih untuk dipasang.");
        }
    });
});

// Event listener untuk tombol klaim misi
document.getElementById("claimsaveRiverBtn").addEventListener("click", () => {
    game.claimMinigameReward();
});
