class Game {
    constructor() {
        this.gameData = {
            plants: [
                {
                    id: 1,
                    title: "Pohon Jati",
                    description: "Pohon yang kuat dan tahan lama",
                    image: "jati.png",
                    rarity: "common",
                    growthTime: 5,
                    pollutionReduction: 10,
                    sellPrice: 100,
                    basePrice: 50,
                    updateInterval: 10,
                    moneyIncrement: 10,
                    pollutionReductionAmount: 5
                },
                {
                    id: 2,
                    title: "Rumput",
                    description: "Tanaman yang tumbuh cepat dan umum",
                    image: "rumput.png",
                    rarity: "common",
                    growthTime: 10,
                    pollutionReduction: 10,
                    sellPrice: 0,
                    basePrice: 10,
                    updateInterval: 10,
                    moneyIncrement: 5,
                    pollutionReductionAmount: 2
                },
                {
                    id: 3,
                    title: "Bunga Matahari",
                    description: "Bunga cerah yang menarik banyak perhatian",
                    image: "bunga-matahari.png",
                    rarity: "uncommon",
                    growthTime: 15,
                    pollutionReduction: 15,
                    sellPrice: 150,
                    basePrice: 75,
                    updateInterval: 12,
                    moneyIncrement: 15,
                    pollutionReductionAmount: 7
                },
                {
                    id: 4,
                    title: "Kaktus Mini",
                    description: "Kaktus kecil yang mudah dirawat",
                    image: "kaktus-mini.png",
                    rarity: "uncommon",
                    growthTime: 20,
                    pollutionReduction: 12,
                    sellPrice: 130,
                    basePrice: 65,
                    updateInterval: 14,
                    moneyIncrement: 12,
                    pollutionReductionAmount: 6
                },
                {
                    id: 5,
                    title: "Jamur Merah",
                    description: "Jamur berwarna merah yang menarik",
                    image: "jamur-merah.png",
                    rarity: "uncommon",
                    growthTime: 18,
                    pollutionReduction: 14,
                    sellPrice: 140,
                    basePrice: 70,
                    updateInterval: 13,
                    moneyIncrement: 14,
                    pollutionReductionAmount: 7
                },
                {
                    id: 6,
                    title: "Mawar Hitam",
                    description: "Mawar dengan kelopak berwarna hitam yang eksotis",
                    image: "mawar-hitam.png",
                    rarity: "rare",
                    growthTime: 25,
                    pollutionReduction: 20,
                    sellPrice: 250,
                    basePrice: 125,
                    updateInterval: 20,
                    moneyIncrement: 25,
                    pollutionReductionAmount: 10
                },
                {
                    id: 7,
                    title: "Anggrek Biru",
                    description: "Anggrek langka dengan kelopak berwarna biru",
                    image: "anggrek-biru.png",
                    rarity: "rare",
                    growthTime: 30,
                    pollutionReduction: 18,
                    sellPrice: 240,
                    basePrice: 120,
                    updateInterval: 22,
                    moneyIncrement: 24,
                    pollutionReductionAmount: 9
                },
                {
                    id: 8,
                    title: "Tanaman Pemakan Serangga",
                    description: "Tanaman yang dapat menangkap dan mencerna serangga",
                    image: "pemakan-serangga.png",
                    rarity: "rare",
                    growthTime: 28,
                    pollutionReduction: 19,
                    sellPrice: 230,
                    basePrice: 115,
                    updateInterval: 21,
                    moneyIncrement: 23,
                    pollutionReductionAmount: 9
                },
                // Epic (Langka Banget)
                {
                    id: 9,
                    title: "Pohon Sakura Mini",
                    description: "Versi mini dari pohon sakura yang indah",
                    image: "sakura-mini.png",
                    rarity: "epic",
                    growthTime: 35,
                    pollutionReduction: 25,
                    sellPrice: 350,
                    basePrice: 175,
                    updateInterval: 30,
                    moneyIncrement: 35,
                    pollutionReductionAmount: 12
                },
                {
                    id: 10,
                    title: "Tanaman Glow-in-the-Dark",
                    description: "Tanaman yang bersinar di kegelapan",
                    image: "glow-plant.png",
                    rarity: "epic",
                    growthTime: 40,
                    pollutionReduction: 22,
                    sellPrice: 340,
                    basePrice: 170,
                    updateInterval: 28,
                    moneyIncrement: 34,
                    pollutionReductionAmount: 11
                },
                {
                    id: 11,
                    title: "Jamur Kristal",
                    description: "Jamur dengan bentuk kristal yang memukau",
                    image: "jamur-kristal.png",
                    rarity: "epic",
                    growthTime: 38,
                    pollutionReduction: 24,
                    sellPrice: 330,
                    basePrice: 165,
                    updateInterval: 29,
                    moneyIncrement: 33,
                    pollutionReductionAmount: 12
                },
                {
                    id: 12,
                    title: "Pohon Emas",
                    description: "Pohon langka dengan daun berwarna emas",
                    image: "pohon-emas.png",
                    rarity: "legendary",
                    growthTime: 50,
                    pollutionReduction: 30,
                    sellPrice: 500,
                    basePrice: 250,
                    updateInterval: 40,
                    moneyIncrement: 50,
                    pollutionReductionAmount: 15
                },
                {
                    id: 13,
                    title: "Bunga Pelangi",
                    description: "Bunga yang memiliki warna pelangi yang mempesona",
                    image: "bunga-pelangi.png",
                    rarity: "legendary",
                    growthTime: 45,
                    pollutionReduction: 28,
                    sellPrice: 480,
                    basePrice: 240,
                    updateInterval: 38,
                    moneyIncrement: 48,
                    pollutionReductionAmount: 14
                }
            ],
            playerData: {
                money: 1000000,
                pollution: 10000,
                inventory: [
                    { name: "Pupuk", type: "item" },
                    { name: "Rumput", type: "plant" },
                    { name: "Air", type: "item" }
                ],
                upgrades: {
                    potCount: 1,
                    moneyMultiplier: 1,
                    pollutionMultiplier: 1
                },
                plantStatus: {} 
            },
            shopItems: {
                gacha: {
                    price: 500,
                    rates: {
                        common: 60,
                        uncommon: 25,
                        rare: 10,
                        epic: 4,
                        legendary: 1
                    }
                }
            }
        };
        this.selectedPot = null;
        this.notifications = [];
        this.currentItemToUse = null;
        this.init();
    }

    async init() {
        localStorage.removeItem('plantStatus');
        this.loadPlantStatus();
        this.setupEventListeners();
        this.renderGarden();
        this.updateUI();
        this.startGameLoop();
        
        // Tambahkan logika untuk menanam ulang tanaman saat halaman dimuat
        this.replantAll();

        // Load shop data jika diperlukan
        this.loadShopData();

        // Tambahkan event listener untuk tombol tutup semua modal dengan mengklik area luar modal
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeAllModals();
            }
        });

        // Setup upgrade modal
        this.setupUpgradeModal();
        this.setupSelectPlantModal();
    }

    async loadGameData() {
        try {
            const response = await fetch('data.json');
            const initialData = await response.json();
            
            // Ambil data dari localStorage jika ada
            const savedGameData = JSON.parse(localStorage.getItem('gameData'));
            
            // Gabungkan data awal dengan data yang tersimpan
            this.gameData = {
                ...initialData,
                playerData: savedGameData || initialData.playerData
            };
        } catch (error) {
            console.error('Error loading game data:', error);
        }
    }

    loadPlantStatus() {
        const savedStatus = JSON.parse(localStorage.getItem('plantStatus')) || {};
        this.gameData.playerData.plantStatus = savedStatus;
        
        Object.entries(savedStatus).forEach(([potIndex, plant]) => {
            const pot = document.querySelector(`.pot[data-index='${potIndex}']`);
            
            if (plant && pot) {
                if (plant.status === 'growing') {
                    pot.classList.add('growing');
                    pot.dataset.plantId = plant.plantId;
    
                    // Tambahkan elemen timer jika belum ada
                    let timerDiv = pot.querySelector('.pot-timer');
                    if (!timerDiv) {
                        timerDiv = document.createElement('div');
                        timerDiv.className = 'pot-timer';
                        pot.appendChild(timerDiv);
                    }
                    
                    console.log(`Timer added for pot ${potIndex}`);

                    // Hitung waktu yang sudah berlalu
                    const timePassed = Math.floor((Date.now() - plant.lastUpdate) / 1000);
                    let remainingGrowthTime = plant.remainingGrowthTime - timePassed;
                    
                    if (remainingGrowthTime > 0) {
                        // Lanjutkan dari sisa waktu yang ada
                        this.startPlantGrowth(pot, remainingGrowthTime);
                    } else {
                        pot.classList.remove('growing');
                        pot.classList.add('grown');
                        this.gameData.playerData.plantStatus[pot.dataset.index].status = 'grown';
                        this.updateUI();
                        this.savePlantStatus();
                    }
                } else if (plant.status === 'grown') {
                    pot.classList.add('grown');
                    this.updateUI();
                }
            }
        });
    }
    
    
    savePlantStatus() {
        localStorage.setItem('plantStatus', JSON.stringify(this.gameData.playerData.plantStatus));
    }

    updateUI() {
        document.getElementById('money').querySelector('span').textContent = this.gameData.playerData.money;
        document.getElementById('pollution').querySelector('span').textContent = this.gameData.playerData.pollution;
    }

    setupEventListeners() {
        document.getElementById('shopBtn').addEventListener('click', () => this.openShop());
        document.getElementById('minigameBtn').addEventListener('click', () => this.openMinigame());
        document.getElementById('upgradeBtn').addEventListener('click', () => this.openUpgrade());
        document.getElementById('inventoryBtn').addEventListener('click', () => this.openInventory());
        
        // Tambahkan tombol reset ke header
        const resetBtn = document.createElement('button');
        resetBtn.id = 'resetBtn';
        resetBtn.textContent = 'Reset Game';
        resetBtn.style.backgroundColor = 'red';
        resetBtn.style.color = 'white';
        document.querySelector('.navigation').appendChild(resetBtn);
        
        resetBtn.addEventListener('click', () => this.resetGame());

        // Tambahkan event listener untuk deselect pot ketika klik di luar
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.pot') && !e.target.closest('.modal')) {
                this.deselectCurrentPot();
            }
        });

        // Event listener untuk tab shop
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => this.switchShopTab(button));
        });

        // Event listener untuk gatcha buttons
        const gatchaButtons = document.querySelectorAll('.gatcha-btn');
        gatchaButtons.forEach(button => {
            button.addEventListener('click', (e) => this.handleGatcha(e.target.dataset.type, parseInt(e.target.dataset.count)));
        });

        // Event listener untuk beli tanaman
        const buyPlantButtons = document.querySelectorAll('.buy-plant-btn');
        buyPlantButtons.forEach(button => {
            button.addEventListener('click', () => this.buyPlant(button.dataset.plantId));
        });

        // Tambahkan event listener untuk tombol Plant pada setiap pot
        document.querySelectorAll('.pot').forEach(pot => {
            const plantButton = pot.querySelector('.plant-button');
            if (plantButton) {
                plantButton.addEventListener('click', (e) => {
                    e.stopPropagation(); // Mencegah event bubbling
                    const potIndex = pot.dataset.index;
                    this.openInventory(pot, 'plant'); // Membuka modal untuk memilih tanaman
                });
            }
        });
    }

    renderGarden() {
        const potsContainer = document.getElementById('plantPots');
        potsContainer.innerHTML = '';

        for (let i = 0; i < 10; i++) {
            const pot = document.createElement('div');
            pot.className = 'pot';
            pot.dataset.index = i;

            // Hide pots that are not yet unlocked
            if (i >= this.gameData.playerData.upgrades.potCount) {
                pot.style.display = 'none';
            }

            const plantStatus = this.gameData.playerData.plantStatus[i];
            if (plantStatus) {
                pot.dataset.plantId = plantStatus.plantId;
                pot.classList.add(plantStatus.status);
                
                if (plantStatus.status === 'growing') {
                    const timerDiv = document.createElement('div');
                    timerDiv.className = 'pot-timer';
                    timerDiv.textContent = `Matang dalam: ${plantStatus.remainingGrowthTime}s`;
                    pot.appendChild(timerDiv);
                    
                    // Start the growth timer if it's still growing
                    this.startPlantGrowth(pot, plantStatus.remainingGrowthTime);
                } else if (plantStatus.status === 'grown') {
                    const timerDiv = document.createElement('div');
                    timerDiv.className = 'pot-timer';
                    timerDiv.textContent = `Update dalam: ${plantStatus.updateCountdown}s`;
                    pot.appendChild(timerDiv);
                }
            }
            pot.addEventListener('click', () => this.selectPot(i));
            potsContainer.appendChild(pot);
        }
    }

    selectPot(index) {
        const pot = document.querySelector(`.pot[data-index='${index}']`);

        // Jika sedang dalam mode penggunaan item
        if (this.currentItemToUse) {
            this.applyItemToPlant(this.currentItemToUse, index);
            document.getElementById('selectPlantModal').style.display = 'none';
            this.currentItemToUse = null;
            return;
        }

        // Deselect pot sebelumnya jika ada
        if (this.selectedPot !== null) {
            const previousPot = document.querySelector(`.pot[data-index='${this.selectedPot}']`);
            previousPot.classList.remove('selected');
            this.removePotActions(previousPot);
        }

        // Select pot baru
        this.selectedPot = index;
        pot.classList.add('selected');
        this.showPotActions(pot);
    }

    removePotActions(pot) {
        const actions = pot.querySelector('.pot-actions');
        const plantButton = pot.querySelector('.plant-button');
        if (actions) pot.removeChild(actions);
        if (plantButton) pot.removeChild(plantButton);
    }

    showPotActions(pot) {
        this.removePotActions(pot);
        
        if (!pot.dataset.plantId) {
            const plantButton = document.createElement('button');
            plantButton.textContent = 'Plant';
            plantButton.className = 'plant-button';
            plantButton.addEventListener('click', () => this.openInventory(pot, 'plant'));
            
            pot.appendChild(plantButton);
            
            const actions = document.createElement('div');
            actions.className = 'pot-actions';
            actions.appendChild(plantButton);
            pot.appendChild(actions); 
        } else {
            const actions = document.createElement('div');
            actions.className = 'pot-actions';
            
            const sellButton = document.createElement('button');
            sellButton.textContent = 'Sell';
            sellButton.className = 'sell';
            sellButton.addEventListener('click', () => this.sellPlant(pot));
            actions.appendChild(sellButton);

            const infoButton = document.createElement('button');
            infoButton.textContent = 'Info';
            infoButton.className = 'info';
            infoButton.addEventListener('click', () => this.showPlantInfo(pot));
            actions.appendChild(infoButton);
            
            pot.appendChild(actions);
        }
    }

    /**
     * Membuka inventaris dan memungkinkan pengguna memilih item untuk digunakan pada tanaman
     * @param {HTMLElement} pot - Pot yang dipilih
     */
    openInventory(pot = null, mode = 'useItem') {
        if (this.isAnyModalOpen()) return;

        this.closeAllModals();
        const inventoryModal = document.getElementById('inventoryModal');
        const inventoryItems = document.getElementById('inventoryItems');
        inventoryItems.innerHTML = ''; // Bersihkan inventory sebelumnya

        if (mode === 'useItem' && pot) {
            // Menampilkan hanya item (Air dan Pupuk) untuk digunakan
            const items = this.gameData.playerData.inventory.filter(item => item.type === 'item');

            items.forEach(item => {
                const itemData = item.name;
                const itemDiv = document.createElement('div');
                itemDiv.className = 'inventory-item';
                
                const img = document.createElement('img');
                img.src = `images/${itemData.toLowerCase().replace(' ', '-')}.png`;
                img.alt = itemData;
                
                const span = document.createElement('span');
                span.textContent = itemData;
                
                itemDiv.appendChild(img);
                itemDiv.appendChild(span);
                
                itemDiv.addEventListener('click', () => {
                    this.currentItemToUse = itemData; // Menyimpan item yang akan digunakan
                    inventoryModal.style.display = 'none';
                    this.openSelectPlantModal(); // Membuka modal untuk memilih tanaman
                });
                
                inventoryItems.appendChild(itemDiv);
            });
        } else if (mode === 'plant') {
            // Menampilkan tanaman yang tersedia untuk ditanam
            const plants = this.gameData.playerData.inventory.filter(item => item.type === 'plant');

            plants.forEach(plant => {
                const plantData = this.gameData.plants.find(p => p.title === plant.name);
                const plantDiv = document.createElement('div');
                plantDiv.className = 'inventory-item';
                
                const img = document.createElement('img');
                img.src = `images/${plant.name.toLowerCase().replace(' ', '-')}-seed.png`;
                img.alt = plant.name;
                
                const span = document.createElement('span');
                span.textContent = plant.name;
                
                plantDiv.appendChild(img);
                plantDiv.appendChild(span);
                
                plantDiv.addEventListener('click', () => {
                    this.plantSelectedPlant(plantData.id, pot.dataset.index);
                    inventoryModal.style.display = 'none';
                });
                
                inventoryItems.appendChild(plantDiv);
            });

            // Jika tidak ada tanaman untuk ditanam, tampilkan pesan
            if (plants.length === 0) {
                inventoryItems.innerHTML = '<p>Tidak ada tanaman yang tersedia untuk ditanam.</p>';
            }
        }

        inventoryModal.style.display = 'block';
    }

    /**
     * Menggunakan item (Air atau Pupuk) pada tanaman tertentu
     * @param {string} itemName - Nama item (Air atau Pupuk)
     * @param {HTMLElement} pot - Pot yang dipilih
     */
    useItemOnPlant(itemName, pot) {
        // Cek apakah pot memiliki tanaman
        if (!pot.dataset.plantId) {
            alert('Pot kosong! Tidak bisa menggunakan item.');
            return;
        }

        const plantId = pot.dataset.plantId;
        const plantData = this.gameData.plants.find(p => p.id == plantId);

        if (itemName === 'Air') {
            // Mengurangi waktu pertumbuhan sebesar 10 detik
            if (this.gameData.playerData.plantStatus[pot.dataset.index].status === 'growing') {
                this.gameData.playerData.plantStatus[pot.dataset.index].remainingGrowthTime -= 10;
                if (this.gameData.playerData.plantStatus[pot.dataset.index].remainingGrowthTime < 0) {
                    this.gameData.playerData.plantStatus[pot.dataset.index].remainingGrowthTime = 0;
                }
                this.savePlantStatus();
                this.notifications.push(`Anda menggunakan Air pada ${plantData.title}. Waktu pertumbuhan berkurang 10 detik.`);
                this.showNotifications();
            } else {
                alert('Tanaman sudah matang atau sedang dalam status tidak bisa di-airi.');
            }
        } else if (itemName === 'Pupuk') {
            // Menggandakan resource untuk update selanjutnya, dapat di-stack hingga 3 kali
            const plantStatus = this.gameData.playerData.plantStatus[pot.dataset.index];
            if (!plantStatus.fertilizerStacks) {
                plantStatus.fertilizerStacks = 0;
            }

            if (plantStatus.fertilizerStacks >= 3) {
                alert('Pupuk sudah mencapai tumpukan maksimal (3 kali).');
                return;
            }

            plantStatus.fertilizerStacks += 1;
            plantStatus.pollutionReductionAmount *= 2;
            this.savePlantStatus();
            this.notifications.push(`Anda menggunakan Pupuk pada ${plantData.title}. Resource untuk update selanjutnya digandakan.`);
            this.showNotifications();
        }

        // Mengurangi stok item dari inventaris
        this.removeItemFromInventory(itemName);
    }

    /**
     * Menghapus item dari inventaris setelah digunakan
     * @param {string} itemName - Nama item yang digunakan
     */
    removeItemFromInventory(itemName) {
        const itemIndex = this.gameData.playerData.inventory.findIndex(
            item => item.type === 'item' && item.name === itemName
        );
        if (itemIndex !== -1) {
            this.gameData.playerData.inventory.splice(itemIndex, 1);
            this.saveGameData();
            this.updateUI();
        }
    }

    startPlantGrowth(pot, remainingGrowthTime = null) {
        const plantId = pot.dataset.plantId;
        const plantData = this.gameData.plants.find(p => p.id == plantId);
        pot.classList.add('growing');
        
        let timerDiv = pot.querySelector('.pot-timer');
        if (!timerDiv) {
            timerDiv = document.createElement('div');
            timerDiv.className = 'pot-timer';
            pot.appendChild(timerDiv);
        }
        
        if (remainingGrowthTime === null || isNaN(remainingGrowthTime)) {
            console.error(`remainingGrowthTime tidak terdefinisi untuk pot index ${pot.dataset.index}`);
            remainingGrowthTime = plantData.growthTime;
        }
        let updateCountdown = plantData.updateInterval;

        const updateTimer = setInterval(() => {
            const plantStatus = this.gameData.playerData.plantStatus[pot.dataset.index];
            if (plantStatus.status === 'growing') {
                timerDiv.innerHTML = `Matang dalam: ${remainingGrowthTime}s`;
                remainingGrowthTime--;
                plantStatus.remainingGrowthTime = remainingGrowthTime;
                this.savePlantStatus();
            } else if (plantStatus.status === 'grown') {
                timerDiv.innerHTML = `Update dalam: ${updateCountdown}s`;
                updateCountdown--;
                
                if (updateCountdown < 0) {
                    updateCountdown = plantData.updateInterval;
                    
                    // Terapkan Money Multiplier
                    let moneyEarned = plantData.moneyIncrement * this.gameData.playerData.upgrades.moneyMultiplier;
                    // Cek apakah pupuk digunakan
                    if (plantStatus.fertilizerStacks && plantStatus.fertilizerStacks > 0) {
                        moneyEarned *= 2; // Gandakan resource
                        plantStatus.fertilizerStacks -= 1; // Kurangi stack
                        if (plantStatus.fertilizerStacks === 0) {
                            plantStatus.pollutionReductionAmount = plantData.pollutionReductionAmount; // Reset ke nilai asli
                        }
                        this.notifications.push(`Efek Pupuk aktif: ${moneyEarned} uang dihasilkan.`);
                    }

                    this.gameData.playerData.money += moneyEarned;
                    
                    // Terapkan Pollution Multiplier
                    let pollutionReduction = plantData.pollutionReductionAmount * this.gameData.playerData.upgrades.pollutionMultiplier;
                    if (plantStatus.fertilizerStacks && plantStatus.fertilizerStacks > 0) {
                        pollutionReduction *= 2; // Gandakan pengurangan polusi
                    }
                    this.gameData.playerData.pollution -= pollutionReduction;
                    
                    plantStatus.lastUpdate = Date.now();
                    
                    this.updateUI();
                    this.saveGameData();
                    this.savePlantStatus();
                    
                    this.notifications.push(
                        `+${moneyEarned} uang, -${pollutionReduction} polusi dari tanaman`
                    );
                    this.showNotifications();
                }
            }
        }, 1000);
    
        const existingStatus = this.gameData.playerData.plantStatus[pot.dataset.index];
        if (existingStatus && existingStatus.updateTimer) {
            clearInterval(existingStatus.updateTimer);
        }
    
        this.gameData.playerData.plantStatus[pot.dataset.index] = { 
            plantId, 
            status: 'growing',
            updateTimer: updateTimer,
            lastUpdate: Date.now(),
            remainingGrowthTime: remainingGrowthTime,
            fertilizerStacks: existingStatus ? existingStatus.fertilizerStacks : 0 // Menambahkan properti untuk stack pupuk
        };
    
        this.savePlantStatus(); // Simpan status setelah perubahan
    
        setTimeout(() => {
            pot.classList.remove('growing');
            pot.classList.add('grown');
            this.gameData.playerData.plantStatus[pot.dataset.index].status = 'grown';
            this.updateUI();
            this.savePlantStatus();
            this.saveGameData();
        }, remainingGrowthTime * 1000);
    
        this.updatePotActions(pot);
    }
    
    

    sellPlant(pot) {
        const plantId = pot.dataset.plantId;
        const plantData = this.gameData.plants.find(p => p.id == plantId);
        const plantStatus = this.gameData.playerData.plantStatus[pot.dataset.index];
        
        // Hentikan timer update
        if (plantStatus && plantStatus.updateTimer) {
            clearInterval(plantStatus.updateTimer);
        }
        
        // Hapus timer div
        const timerDiv = pot.querySelector('.pot-timer');
        if (timerDiv) {
            pot.removeChild(timerDiv);
        }
        
        this.gameData.playerData.money += plantData.sellPrice;
        pot.classList.remove('grown');
        pot.classList.remove('growing');
        delete pot.dataset.plantId;
        delete this.gameData.playerData.plantStatus[pot.dataset.index];
        this.updateUI();
        this.savePlantStatus();
        this.saveGameData();

        // Update tampilan pot actions
        this.updatePotActions(pot);

        this.notifications.push(`Anda menjual: ${plantData.title} seharga ${plantData.sellPrice} uang`);
        this.showNotifications();
    }

    showPlantInfo(pot) {
        if (this.isAnyModalOpen()) return;

        this.closeAllModals();
        const plantId = pot.dataset.plantId;
        const plantData = this.gameData.plants.find(p => p.id == plantId);
        const plantInfoModal = document.getElementById('plantInfoModal');
        const plantInfo = document.getElementById('plantInfo');
        plantInfo.innerHTML = `
            <h3>${plantData.title}</h3>
            <p>${plantData.description}</p>
            <p>Waktu Tumbuh: ${plantData.growthTime} detik</p>
            <p>Pengurangan Polusi: ${plantData.pollutionReduction}</p>
            <p>Harga Jual: ${plantData.sellPrice}</p>
        `;
        plantInfoModal.style.display = 'block';
    }

    updatePlants() {
        // Logic to update plant growth and reduce pollution
    }

    startGameLoop() {
        setInterval(() => {
            this.updatePlants();
            this.updateUI();
        }, 1000);
    }

    async saveGameData() {
        // Simpan ke localStorage
        localStorage.setItem('gameData', JSON.stringify(this.gameData.playerData));
        
        // Kirim event ke main process Electron
        if (window.electron) {
            window.electron.saveGameData(this.gameData);
        }
    }

    showNotifications() {
        const notification = document.getElementById('notification');
        if (this.notifications.length === 0) return;

        notification.innerHTML = this.notifications.join('<br>');
        notification.style.display = 'block';
        notification.style.opacity = '1';

        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.style.display = 'none';
                this.notifications = [];
            }, 1000);
        }, 3000);
    }

    resetGame() {
        if (confirm('Apakah Anda yakin ingin mereset game? Semua progress akan hilang!')) {
            // Hapus data dari localStorage
            localStorage.removeItem('gameData');
            localStorage.removeItem('plantStatus');
            
            // Hentikan semua interval yang berjalan
            Object.values(this.gameData.playerData.plantStatus).forEach(plant => {
                if (plant.updateTimer) clearInterval(plant.updateTimer);
            });
            
            // Reset game data ke nilai awal
            this.loadGameData().then(() => {
                this.gameData.playerData.plantStatus = {};
                this.renderGarden();
                this.updateUI();
                this.notifications.push('Game telah direset!');
                this.showNotifications();
            });
        }
    }

    deselectCurrentPot() {
        if (this.selectedPot !== null) {
            const previousPot = document.querySelector(`.pot[data-index='${this.selectedPot}']`);
            previousPot.classList.remove('selected');
            this.removePotActions(previousPot);
            this.selectedPot = null;
        }
    }

    updatePotActions(pot) {
        this.removePotActions(pot);
        if (this.currentItemToUse) {
            // Dalam mode penggunaan item, tidak menampilkan aksi di pot
            return;
        }
        this.showPotActions(pot);
    }

    replantAll() {
        Object.entries(this.gameData.playerData.plantStatus).forEach(([potIndex, plant]) => {
            const pot = document.querySelector(`.pot[data-index='${potIndex}']`);
            if (plant && pot && plant.status !== 'grown') {
                this.startPlantGrowth(pot, plant.remainingGrowthTime);
            }
        });
    }

    addItem(name, type) {
        this.gameData.playerData.inventory.push({ name, type });
        this.saveGameData();
        this.updateUI();
    }

    // Method untuk membuka Shop Modal
    openShop() {
        if (this.isAnyModalOpen()) return;

        this.closeAllModals();
        document.getElementById('shopModal').style.display = 'block';
    }

    // Method untuk mengganti tab di Shop Modal
    switchShopTab(button) {
        const targetTab = button.dataset.tab;

        // Hapus kelas active dari semua tombol
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        // Tambahkan kelas active pada tombol yang diklik
        button.classList.add('active');

        // Tampilkan tab yang dipilih dan sembunyikan yang lain
        document.querySelectorAll('.tab-content').forEach(tab => {
            if (tab.id === targetTab) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }

    // Method untuk menangani aksi Gatcha
    handleGatcha(type, count) {
        let cost = 0;
        let rates = {};

        if (type === 'murah') {
            cost = 100 * count;
            rates = {
                common: 60,
                uncommon: 25,
                rare: 10
            };
        } else if (type === 'sedang') {
            cost = 1000 * count;
            rates = {
                uncommon: 50,
                rare: 35,
                epic: 15
            };
        } else if (type === 'mahal') {
            cost = 5000 * count;
            rates = {
                rare: 40,
                epic: 35,
                legendary: 25
            };
        }

        if (this.gameData.playerData.money < cost) {
            alert('Uang Anda tidak cukup untuk melakukan gatcha ini.');
            return;
        }

        // Kurangi uang pemain
        this.gameData.playerData.money -= cost;
        this.updateUI();
        this.saveGameData();

        // Lakukan gatcha
        for (let i = 0; i < count; i++) {
            const rarity = this.getRandomRarity(rates);
            const plant = this.getRandomPlantByRarity(rarity);
            if (plant) {
                this.gameData.playerData.inventory.push({ name: plant.title, type: 'plant' });
                // Terapkan Money Multiplier saat mendapatkan uang tambahan
                const moneyEarned = plant.moneyIncrement * this.gameData.playerData.upgrades.moneyMultiplier;
                this.gameData.playerData.money += moneyEarned;
                // Terapkan Pollution Multiplier
                const pollutionReduction = plant.pollutionReductionAmount * this.gameData.playerData.upgrades.pollutionMultiplier;
                this.gameData.playerData.pollution -= pollutionReduction;

                this.notifications.push(`Anda mendapatkan: ${plant.title} (${rarity}) dan ${moneyEarned} uang`);
            }
        }

        this.showNotifications();
        this.saveGameData();
    }

    // Method untuk mendapatkan rarity secara acak berdasarkan rates
    getRandomRarity(rates) {
        const rand = Math.random() * 100;
        let cumulative = 0;

        for (const rarity in rates) {
            cumulative += rates[rarity];
            if (rand < cumulative) {
                return rarity;
            }
        }

        return 'common'; // Default fallback
    }

    // Method untuk mendapatkan tanaman secara acak berdasarkan rarity
    getRandomPlantByRarity(rarity) {
        const plants = this.gameData.plants.filter(p => p.rarity === rarity);
        if (plants.length === 0) return null;
        const index = Math.floor(Math.random() * plants.length);
        return plants[index];
    }

    // Method untuk membeli tanaman langsung dari shop
    buyPlant(plantId) {
        const plant = this.gameData.plants.find(p => p.id == plantId);
        if (!plant) {
            alert('Tanaman tidak ditemukan.');
            return;
        }

        const price = plant.basePrice * 4; // Misalnya, harga beli 4 kali basePrice

        if (this.gameData.playerData.money < price) {
            alert('Uang Anda tidak cukup untuk membeli tanaman ini.');
            return;
        }

        this.gameData.playerData.money -= price;
        this.gameData.playerData.inventory.push({ name: plant.title, type: 'plant' });
        this.updateUI();
        this.saveGameData();

        // Terapkan Money Multiplier saat membeli tanaman
        const moneyEarned = plant.sellPrice * this.gameData.playerData.upgrades.moneyMultiplier;
        this.gameData.playerData.money += moneyEarned;

        this.notifications.push(`Anda membeli: ${plant.title} dan mendapatkan tambahan ${moneyEarned} uang`);
        this.showNotifications();
    }

    // Method untuk memuat data shop jika diperlukan
    loadShopData() {
        // Implementasi jika ada data shop yang berasal dari sumber eksternal
    }

    // Metode baru untuk menutup semua modal
    closeAllModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    }

    // Metode baru untuk memeriksa apakah ada modal yang terbuka
    isAnyModalOpen() {
        const modals = document.querySelectorAll('.modal');
        for (let modal of modals) {
            if (modal.style.display === 'block') {
                return true;
            }
        }
        return false;
    }

    // Metode untuk membuka modal upgrade
    openUpgrade() {
        if (this.isAnyModalOpen()) return;

        this.closeAllModals();
        const upgradeModal = document.getElementById('upgradeModal');
        this.updateUpgradeUI();
        upgradeModal.style.display = 'block';
    }

    // Metode untuk mengatur event listener untuk tombol upgrade
    setupUpgradeModal() {
        // Update UI Upgrade Modal
        this.updateUpgradeUI();

        // Event listener untuk tombol upgrade pot
        document.getElementById('upgradePotBtn').addEventListener('click', () => {
            this.upgradePot();
        });

        // Event listener untuk tombol upgrade money multiplier
        document.getElementById('upgradeMoneyMultiplierBtn').addEventListener('click', () => {
            this.upgradeMoneyMultiplier();
        });

        // Event listener untuk tombol upgrade pollution multiplier
        document.getElementById('upgradePollutionMultiplierBtn').addEventListener('click', () => {
            this.upgradePollutionMultiplier();
        });
    }

    // Metode untuk memperbarui UI modal upgrade
    updateUpgradeUI() {
        const potCount = this.gameData.playerData.upgrades.potCount;
        const moneyMultiplier = this.gameData.playerData.upgrades.moneyMultiplier;
        const pollutionMultiplier = this.gameData.playerData.upgrades.pollutionMultiplier;

        document.getElementById('potCount').textContent = potCount;
        document.getElementById('moneyMultiplier').textContent = `${moneyMultiplier}x`;
        document.getElementById('pollutionMultiplier').textContent = `${pollutionMultiplier}x`;

        // Hitung biaya upgrade berikutnya
        const nextPotUpgradeCost = 500 * potCount; // Contoh: bertambah 500 setiap upgrade
        const nextMoneyMultiplierCost = 1000 * moneyMultiplier; // Bertambah 1000 setiap upgrade
        const nextPollutionMultiplierCost = 5000 * pollutionMultiplier; // Bertambah 5000 setiap upgrade

        document.getElementById('potUpgradeCost').textContent = nextPotUpgradeCost;
        document.getElementById('moneyMultiplierCost').textContent = nextMoneyMultiplierCost;
        document.getElementById('pollutionMultiplierCost').textContent = nextPollutionMultiplierCost;
    }

    // Metode untuk upgrade pot
    upgradePot() {
        const currentPot = this.gameData.playerData.upgrades.potCount;
        if (currentPot >= 10) {
            alert('Jumlah pot sudah maksimal (10).');
            return;
        }

        const cost = 500 * currentPot;

        if (this.gameData.playerData.money < cost) {
            alert('Uang Anda tidak cukup untuk upgrade pot.');
            return;
        }

        // Kurangi uang
        this.gameData.playerData.money -= cost;

        // Tambah jumlah pot
        this.gameData.playerData.upgrades.potCount += 1;

        // Tampilkan pot baru
        const newPot = document.querySelector(`.pot[data-index='${currentPot}']`);
        if (newPot) {
            newPot.style.display = 'block';
        }

        // Perbarui UI
        this.updateUI();
        this.updateUpgradeUI();
        this.saveGameData();
    }

    // Metode untuk upgrade money multiplier
    upgradeMoneyMultiplier() {
        const currentMultiplier = this.gameData.playerData.upgrades.moneyMultiplier;
        if (currentMultiplier >= 5) {
            alert('Money multiplier sudah maksimal (5x).');
            return;
        }

        const cost = 1000 * currentMultiplier;

        if (this.gameData.playerData.money < cost) {
            alert('Uang Anda tidak cukup untuk upgrade money multiplier.');
            return;
        }

        // Kurangi uang
        this.gameData.playerData.money -= cost;

        // Upgrade multiplier
        this.gameData.playerData.upgrades.moneyMultiplier += 1;

        // Perbarui UI
        this.updateUI();
        this.updateUpgradeUI();
        this.saveGameData();

        alert('Money multiplier berhasil diupgrade!');
    }

    // Metode untuk upgrade pollution multiplier
    upgradePollutionMultiplier() {
        const currentMultiplier = this.gameData.playerData.upgrades.pollutionMultiplier;
        if (currentMultiplier >= 5) {
            alert('Pollution multiplier sudah maksimal (5x).');
            return;
        }

        const cost = 5000 * currentMultiplier;

        if (this.gameData.playerData.money < cost) {
            alert('Uang Anda tidak cukup untuk upgrade pollution multiplier.');
            return;
        }

        // Kurangi uang
        this.gameData.playerData.money -= cost;

        // Upgrade multiplier
        this.gameData.playerData.upgrades.pollutionMultiplier += 1;

        // Perbarui UI
        this.updateUI();
        this.updateUpgradeUI();
        this.saveGameData();

        alert('Pollution multiplier berhasil diupgrade!');
    }

    // Metode untuk memperbarui UI
    updateUI() {
        document.getElementById('money').querySelector('span').textContent = this.gameData.playerData.money;
        document.getElementById('pollution').querySelector('span').textContent = this.gameData.playerData.pollution;

        // Terapkan money multiplier
        // Anda perlu memastikan bahwa setiap peningkatan uang (misalnya saat menanam atau menjual) dikalikan dengan multiplier
    }

    /**
     * Menyiapkan event listener untuk modal pemilihan tanaman
     */
    setupSelectPlantModal() {
        const cancelBtn = document.getElementById('cancelSelectPlantBtn');
        cancelBtn.addEventListener('click', () => {
            this.currentItemToUse = null;
            document.getElementById('selectPlantModal').style.display = 'none';
        });
    }

    /**
     * Membuka modal untuk memilih tanaman setelah memilih item
     */
    openSelectPlantModal() {
        const selectPlantModal = document.getElementById('selectPlantModal');
        const selectPlantItems = document.getElementById('selectPlantItems');
        selectPlantItems.innerHTML = ''; // Bersihkan pilihan sebelumnya

        // Tampilkan semua pot yang memiliki tanaman untuk aplikasi item
        const potsWithPlants = Object.keys(this.gameData.playerData.plantStatus).filter(potIndex => {
            const status = this.gameData.playerData.plantStatus[potIndex];
            return status.status === 'growing' || status.status === 'grown';
        });

        potsWithPlants.forEach(potIndex => {
            const pot = document.querySelector(`.pot[data-index='${potIndex}']`);
            const plantId = pot.dataset.plantId;
            const plantData = this.gameData.plants.find(p => p.id == plantId);

            const plantDiv = document.createElement('div');
            plantDiv.className = 'inventory-item';
            plantDiv.style.cursor = 'pointer';

            const img = document.createElement('img');
            img.src = `images/${plantData.title.toLowerCase().replace(' ', '-')}.png`; // Pastikan nama gambar sesuai
            img.alt = plantData.title;

            const span = document.createElement('span');
            span.textContent = plantData.title;

            plantDiv.appendChild(img);
            plantDiv.appendChild(span);

            plantDiv.addEventListener('click', () => {
                this.applyItemToPlant(this.currentItemToUse, potIndex);
                selectPlantModal.style.display = 'none';
                this.currentItemToUse = null;
            });

            selectPlantItems.appendChild(plantDiv);
        });

        // Jika tidak ada tanaman yang dapat dikenai efek, tampilkan pesan
        if (potsWithPlants.length === 0) {
            selectPlantItems.innerHTML = '<p>Tidak ada tanaman yang tersedia untuk dikenai efek.</p>';
        }

        selectPlantModal.style.display = 'block';
    }

    /**
     * Menanam tanaman yang dipilih ke pot yang dipilih
     * @param {number} plantId - ID tanaman yang akan ditanam
     * @param {number} potIndex - Indeks pot tempat tanaman akan ditanam
     */
    plantSelectedPlant(plantId, potIndex) {
        const plant = this.gameData.plants.find(p => p.id == plantId);
        if (!plant) {
            alert('Tanaman tidak ditemukan.');
            return;
        }

        // Cek apakah pot sudah memiliki tanaman
        if (this.gameData.playerData.plantStatus[potIndex]) {
            alert('Pot sudah memiliki tanaman. Silakan pilih pot lain.');
            return;
        }

        // Cek apakah pemain memiliki uang yang cukup
        const cost = plant.basePrice;
        if (this.gameData.playerData.money < cost) {
            alert('Uang Anda tidak cukup untuk menanam tanaman ini.');
            return;
        }

        // Kurangi uang pemain
        this.gameData.playerData.money -= cost;

        // Tambahkan tanaman ke pot
        this.gameData.playerData.plantStatus[potIndex] = {
            plantId: plant.id,
            status: 'growing',
            lastUpdate: Date.now(),
            remainingGrowthTime: plant.growthTime,
            fertilizerStacks: 0 // Inisialisasi stack pupuk
        };

        // Mulai pertumbuhan tanaman
        const pot = document.querySelector(`.pot[data-index='${potIndex}']`);
        this.startPlantGrowth(pot, plant.growthTime);

        // Hapus tanaman dari inventaris
        const plantIndex = this.gameData.playerData.inventory.findIndex(
            item => item.type === 'plant' && item.name === plant.title
        );
        if (plantIndex !== -1) {
            this.gameData.playerData.inventory.splice(plantIndex, 1);
        }

        this.saveGameData();
        this.renderGarden();
        this.updateUI();

        this.notifications.push(`Anda menanam: ${plant.title}`);
        this.showNotifications();
    }

    /**
     * Menerapkan item (Air atau Pupuk) pada tanaman tertentu
     * @param {string} itemName - Nama item (Air atau Pupuk)
     * @param {number} potIndex - Indeks pot yang dipilih
     */
    applyItemToPlant(itemName, potIndex) {
        const plantStatus = this.gameData.playerData.plantStatus[potIndex];
        if (!plantStatus) {
            alert('Tidak ada tanaman di pot ini.');
            return;
        }

        const plantData = this.gameData.plants.find(p => p.id == plantStatus.plantId);
        if (!plantData) {
            alert('Data tanaman tidak ditemukan.');
            return;
        }

        if (itemName === 'Air') {
            // Mengurangi waktu pertumbuhan sebesar 10 detik
            if (plantStatus.status === 'growing') {
                plantStatus.remainingGrowthTime -= 10;
                if (plantStatus.remainingGrowthTime < 0) {
                    plantStatus.remainingGrowthTime = 0;
                }
                this.savePlantStatus();
                this.notifications.push(`Anda menggunakan Air pada ${plantData.title}. Waktu pertumbuhan berkurang 10 detik.`);
                this.showNotifications();
            } else {
                alert('Tanaman sudah matang atau sedang dalam status tidak bisa di-airi.');
            }
        } else if (itemName === 'Pupuk') {
            // Menggandakan resource untuk update selanjutnya, dapat di-stack hingga 3 kali
            if (plantStatus.fertilizerStacks >= 3) {
                alert('Pupuk sudah mencapai tumpukan maksimal (3 kali).');
                return;
            }

            plantStatus.fertilizerStacks += 1;
            plantStatus.pollutionReductionAmount *= 2;
            this.savePlantStatus();
            this.notifications.push(`Anda menggunakan Pupuk pada ${plantData.title}. Resource untuk update selanjutnya digandakan.`);
            this.showNotifications();
        }

        // Mengurangi stok item dari inventaris
        this.removeItemFromInventory(itemName);
    }
}

// Start the game
window.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    
    // Tambahkan event listener untuk mencegah refresh
    window.addEventListener('beforeunload', (event) => {
        event.preventDefault();
        event.returnValue = ''; // Diperlukan untuk beberapa browser agar dialog konfirmasi muncul
    });
});
