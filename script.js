// Soru verileri - Kullanıcı tarafından doldurulacak
const questions = {
    easy: [
        // Kolay sorular buraya eklenecek
        // Örnek format:
        // {
        //     question: "Soru metni",
        //     options: ["Seçenek A", "Seçenek B", "Seçenek C"],
        //     correct: 0, // Doğru cevabın indeksi (0, 1, veya 2)
        //     image: "resim_yolu.jpg" // Opsiyonel
        // }
    ],
    medium: [
        // Orta sorular buraya eklenecek
    ],
    hard: [
        // Zor sorular buraya eklenecek
    ]
};

// Kutu oyunu açıklaması - Kullanıcı tarafından doldurulacak
const gameDescription = "Kutu oyunu açıklaması buraya gelecek. Lütfen bu metni güncelleyin.";

// DOM elementleri
const mainScreen = document.getElementById('mainScreen');
const questionScreen = document.getElementById('questionScreen');
const infoBtn = document.getElementById('infoBtn');
const infoModal = document.getElementById('infoModal');
const closeModal = document.getElementById('closeModal');
const backBtn = document.getElementById('backBtn');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const timerEl = document.getElementById('timer');
const questionTextEl = document.getElementById('questionText');
const questionImageEl = document.getElementById('questionImage');
const optionBtns = document.querySelectorAll('.option-btn');
const resultMessageEl = document.getElementById('resultMessage');

// Değişkenler
let currentTimer = null;
let currentDifficulty = null;
let currentQuestion = null;
let timeLeft = 60;

// Timer süreleri zorluk bazlı
const timerDurations = {
    easy: 30,
    medium: 45,
    hard: 60
};

// Zorluk butonlarına tıklama olayı
difficultyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentDifficulty = btn.dataset.difficulty;
        startQuestion();
    });
});

// Info butonu
infoBtn.addEventListener('click', () => {
    infoModal.classList.remove('hidden');
});

// Modal kapatma
closeModal.addEventListener('click', () => {
    infoModal.classList.add('hidden');
});

// Modal dışına tıklama ile kapatma
infoModal.addEventListener('click', (e) => {
    if (e.target === infoModal) {
        infoModal.classList.add('hidden');
    }
});

// Geri butonu
backBtn.addEventListener('click', () => {
    infoModal.classList.add('hidden');
});

// Soru başlat
function startQuestion() {
    // Soruları kontrol et
    if (questions[currentDifficulty].length === 0) {
        alert('Bu zorluk seviyesinde henüz soru yok!');
        return;
    }
    
    // Rastgele soru seç
    const randomIndex = Math.floor(Math.random() * questions[currentDifficulty].length);
    currentQuestion = questions[currentDifficulty][randomIndex];
    
    // Ekranı değiştir
    mainScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    
    // Soruyu göster
    displayQuestion();
    
    // Timer'ı başlat
    startTimer();
}

// Soruyu göster
function displayQuestion() {
    questionTextEl.textContent = currentQuestion.question;
    
    // Görsel varsa göster
    if (currentQuestion.image) {
        questionImageEl.innerHTML = `<img src="${currentQuestion.image}" alt="Soru görseli">`;
        questionImageEl.classList.remove('hidden');
    } else {
        questionImageEl.classList.add('hidden');
    }
    
    // Seçenekleri göster
    optionBtns.forEach((btn, index) => {
        btn.textContent = currentQuestion.options[index];
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });
    
    // Sonuç mesajını gizle
    resultMessageEl.classList.add('hidden');
}

// Timer başlat
function startTimer() {
    timeLeft = timerDurations[currentDifficulty];
    timerEl.textContent = timeLeft;
    timerEl.classList.remove('warning');
    
    currentTimer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        
        // Son 10 saniyede uyarı
        if (timeLeft <= 10) {
            timerEl.classList.add('warning');
        }
        
        // Süre doldu
        if (timeLeft <= 0) {
            clearInterval(currentTimer);
            handleTimeout();
        }
    }, 1000);
}

// Süre dolduğunda
function handleTimeout() {
    // Tüm butonları devre dışı bırak
    optionBtns.forEach(btn => {
        btn.disabled = true;
    });
    
    // Yanlış mesajı göster
    resultMessageEl.textContent = 'HAMLE HAKKI RAKİBE GEÇTİ';
    resultMessageEl.classList.remove('hidden', 'success');
    resultMessageEl.classList.add('failure');
    
    // 2 saniye sonra ana ekrana dön
    setTimeout(() => {
        returnToMainScreen();
    }, 2000);
}

// Seçenek butonlarına tıklama olayı
optionBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Timer'ı durdur
        clearInterval(currentTimer);
        
        // Tüm butonları devre dışı bırak
        optionBtns.forEach(b => {
            b.disabled = true;
        });
        
        // Cevabı kontrol et
        if (index === currentQuestion.correct) {
            // Doğru cevap
            btn.classList.add('correct');
            resultMessageEl.textContent = 'HAMLE HAKKI KAZANDINIZ';
            resultMessageEl.classList.remove('hidden', 'failure');
            resultMessageEl.classList.add('success');
        } else {
            // Yanlış cevap
            btn.classList.add('wrong');
            // Doğru cevabı göster
            optionBtns[currentQuestion.correct].classList.add('correct');
            resultMessageEl.textContent = 'HAMLE HAKKI RAKİBE GEÇTİ';
            resultMessageEl.classList.remove('hidden', 'success');
            resultMessageEl.classList.add('failure');
        }
        
        // 2 saniye sonra ana ekrana dön
        setTimeout(() => {
            returnToMainScreen();
        }, 2000);
    });
});

// Ana ekrana dön
function returnToMainScreen() {
    questionScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');
    
    // Timer'ı temizle
    if (currentTimer) {
        clearInterval(currentTimer);
        currentTimer = null;
    }
    
    // Değişkenleri sıfırla
    currentQuestion = null;
    currentDifficulty = null;
    timeLeft = 60;
}
