// Soru verileri - Kullanıcı tarafından doldurulacak
const questions = {
    easy: [
        {
            question: "Sin30º değeri kaçtır?",
            options: ["1", "0", "1/2", "1/3"],
            correct: 2
        },
        {
            question: "Cos180º değeri kaçtır?",
            options: ["0", "1", "1/2", "-1"],
            correct: 3
        },
        {
            question: "tanx.cotx=?",
            options: ["2", "1", "0", "-1"],
            correct: 1
        },
        {
            question: "sin²x+cos²x =?",
            options: ["1", "0", "-1", "2"],
            correct: 0
        },
        {
            question: "sin60º - cos30º + tan45º =?",
            options: ["0", "1/2", "2", "1"],
            correct: 3
        },
        {
            question: "sinx + cosx = 1/3 ise sinx.cosx =?",
            options: ["-4/9", "-2/9", "1", "-1/9"],
            correct: 0
        },
        {
            question: "tanx + cotx = 3 ise tan²x + cot²x =?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "sin1980º=?",
            options: ["1/2", "1", "0", "-1"],
            correct: 2
        },
        {
            question: "tan (-1260º)=?",
            options: ["0", "Tanımsız", "1", "-1"],
            correct: 0
        },
        {
            question: "a=sin15 b=cos80 c=cos20 değerlerinin sıralaması hangisidir?",
            options: ["a<b<c", "b<a<c", "c<a<b", "a<c<b"],
            correct: 1
        },
        {
            question: "-780° lik açının esas ölçüsü x°, 7485°lik açının esas ölçüsü y°dir. Buna göre x + y toplamının esas ölçüsü kaç derecedir?",
            options: ["225", "45", "135", "315"],
            correct: 0
        },
        {
            question: "x ve y birer gerçek sayıdır. A = 2sinx – 3cosy olduğuna göre, A'nın kaç farklı tam sayı değeri vardır?",
            options: ["9", "10", "11", "12"],
            correct: 2
        },
        {
            question: "sin²1 + sin²2 + sin²3 +....+ sin²90° toplamının sonucu kaçtır?",
            options: ["45", "89/2", "87/2", "91/2"],
            correct: 3
        },
        {
            question: "a = sin200° b = tan154° c = cos350° olduğuna göre; a, b, c nin işaretlerini bulunuz.",
            options: ["-,-", "+,+,+", "+,-,-", "-,-,+"],
            correct: 0
        },
        {
            question: "Dik koordinat düzleminde pozitif yönlü 270°lik merkez açı, orijin merkezli birim çemberi A noktasında kesmektedir. Buna göre A noktasının koordinatlarını bulunuz.",
            options: ["(1,1)", "(0,1)", "(0,-1)", "(-1,0)"],
            correct: 2
        },
        {
            question: "x + y = 90° ise tan (2x+3y) . sin (x+2y) =?",
            options: ["tany", "cosy", "siny", "coty"],
            correct: 2
        },
        {
            question: "(tanx + cotx) : secx =?",
            options: ["secx", "cosecx", "tanx", "cosx"],
            correct: 1
        },
        {
            question: "4sinx = 5cosx ise tanx =?",
            options: ["1", "-1", "4/5", "5/4"],
            correct: 3
        },
        {
            question: "arctan (-1) =?",
            options: ["315°", "135°", "45°", "225°"],
            correct: 0
        },
        {
            question: "cos² (arctan1/2) =?",
            options: ["4/5", "3/5", "2/5", "1/5"],
            correct: 0
        },
        {
            question: "cos(x) = 1/2 denkleminin çözüm kümesi nedir?",
            options: ["x = π/3 + 2kπ veya x = 5π/3 + 2kπ", "x = π/6 + 2kπ veya x = 11π/6 + 2kπ", "x = π/4 + 2kπ veya x = 7π/4 + 2kπ", "x = π/2 + 2kπ veya x = 3π/2 + 2kπ"],
            correct: 1
        },
        {
            question: "sin(2x) = √3/2 denkleminin çözüm kümesi nedir?",
            options: ["x = π/6 + kπ veya x = π/3 + kπ", "x = π/12 + kπ veya x = 5π/12 + kπ", "x = π/4 + kπ veya x = 3π/4 + kπ", "x = π/8 + kπ veya x = 3π/8 + kπ"],
            correct: 1
        },
        {
            question: "tan(x - π/4) = 1 denkleminin çözüm kümesi nedir?",
            options: ["x = π/2 + kπ", "x = π/4 + kπ", "x = 3π/4 + kπ", "x = π + kπ"],
            correct: 3
        },
        {
            question: "2cos²(x) - 1 = 0 denkleminin çözüm kümesi nedir?",
            options: ["x = π/4 + kπ/2", "x = π/2 + kπ", "x = π/3 + kπ", "x = π/6 + kπ"],
            correct: 0
        },
        {
            question: "sin(3x) = cos(x) denkleminin çözüm kümesi nedir?",
            options: ["x = π/8 + kπ/2 veya x = π/4 + kπ", "x = π/6 + kπ/2 veya x = π/3 + kπ", "x = π/10 + kπ/2 veya x = π/5 + kπ", "x = π/12 + kπ/2 veya x = π/6 + kπ"],
            correct: 1
        },
        {
            question: "sin(x) + cos(x) = 0 denkleminin çözüm kümesi nedir?",
            options: ["x = π/4 + kπ", "x = 3π/4 + kπ", "x = 3π/4 + kπ", "x = π/2 + kπ"],
            correct: 2
        },
        {
            question: "tan²(x) - 1 = 0 denkleminin çözüm kümesi nedir?",
            options: ["x = π/4 + kπ/2", "x = π/4 + kπ", "x = π/2 + kπ", "x = π/3 + kπ"],
            correct: 0
        },
        {
            question: "sin(x) = 1/2 denkleminin [0, 2π] aralığındaki çözüm kümesi nedir?",
            options: ["{π/6, 5π/6}", "{π/3, 2π/3}", "{π/4, 3π/4}", "{π/2, 3π/2}"],
            correct: 0
        },
        {
            question: "cos(2x) = 0 denkleminin çözüm kümesi nedir?",
            options: ["x = π/4 + kπ/2", "x = π/2 + kπ", "x = π/3 + kπ", "x = π/6 + kπ"],
            correct: 0
        }
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
let shuffledCorrectIndex = null;

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

    // Seçenekleri karıştır
    const shuffledOptions = [...currentQuestion.options];
    const originalCorrectIndex = currentQuestion.correct;
    
    // Shuffle array using Fisher-Yates algorithm
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }
    
    // Find the new index of the correct answer
    shuffledCorrectIndex = shuffledOptions.indexOf(currentQuestion.options[originalCorrectIndex]);

    // Seçenekleri göster
    optionBtns.forEach((btn, index) => {
        btn.textContent = shuffledOptions[index];
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
    timerEl.classList.remove('warning', 'critical');

    currentTimer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        // Renk değişimi: yeşilden kırmızıya
        if (timeLeft <= 10) {
            timerEl.classList.remove('warning');
            timerEl.classList.add('critical');
        } else if (timeLeft <= 20) {
            timerEl.classList.remove('critical');
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
    
    // 3 saniye sonra ana ekrana dön
    setTimeout(() => {
        returnToMainScreen();
    }, 3000);
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
        if (index === shuffledCorrectIndex) {
            // Doğru cevap
            btn.classList.add('correct');
            resultMessageEl.textContent = 'HAMLE HAKKI KAZANDINIZ';
            resultMessageEl.classList.remove('hidden', 'failure');
            resultMessageEl.classList.add('success');
        } else {
            // Yanlış cevap
            btn.classList.add('wrong');
            // Doğru cevabı göster
            optionBtns[shuffledCorrectIndex].classList.add('correct');
            resultMessageEl.textContent = 'HAMLE HAKKI RAKİBE GEÇTİ';
            resultMessageEl.classList.remove('hidden', 'success');
            resultMessageEl.classList.add('failure');
        }

        // 3 saniye sonra ana ekrana dön
        setTimeout(() => {
            returnToMainScreen();
        }, 3000);
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
