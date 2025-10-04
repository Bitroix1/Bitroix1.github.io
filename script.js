// Configuration - Set your target date here
const targetDate = new Date('2025-11-04T16:00:00'); // Return date
const tripStartDate = new Date('2025-10-08T00:00:00'); // Trip start date

// Game unlock dates (days before the target date)
const gameUnlockDays = {
    memory: 20,    // Memory game unlocks 20 days before
    scramble: 18,  // Scramble game unlocks 18 days before
    quiz: 15,      // Quiz game unlocks 15 days before
    song: 12,      // Song game unlocks 12 days before
    loveCalc: 5    // Love calculator unlocks 5 days before
};

// Game data
const memoryGameData = [
    { id: 1, image: 'images/memory/WhatsApp Image 2025-09-03 at 08.07.14_bfef956a.jpg' },
    { id: 2, image: 'images/memory/WhatsApp Image 2025-09-03 at 08.07.21_9a65ca6b.jpg' },
    { id: 3, image: 'images/memory/WhatsApp Image 2025-09-03 at 08.15.14_a8a69ba6.jpg' },
    { id: 4, image: 'images/memory/WhatsApp Image 2025-09-03 at 08.16.47_7ef46a79.jpg' },
    { id: 5, image: 'images/memory/WhatsApp Image 2025-09-03 at 08.17.38_b3693f81.jpg' },
    { id: 6, image: 'images/memory/WhatsApp Image 2025-09-03 at 08.17.39_7584d2da.jpg' },
    { id: 7, image: 'images/memory/WhatsApp Image 2025-09-03 at 08.17.40_0e11610e.jpg' },
    { id: 8, image: 'images/memory/WhatsApp Image 2025-09-03 at 08.20.39_b62aed2b.jpg' }
];

const scrambleGameData = [
    { word: 'אהבה', scrambled: 'הבהא', hint: 'יש לנו' },
    { word: 'רומנטיקה', scrambled: 'הקיטנמור', hint: 'זוגיות' },
    { word: 'מלאכית', scrambled: 'יכאלתמ', hint: 'הכינוי הקבוע' },
    { word: 'חמוד', scrambled: 'דומח', hint: 'אלעד' },
    { word: 'שמחה', scrambled: 'החמש', hint: 'להיות איתך' }
];

const quizGameData = [
    {
        question: 'מה הבירה של אקוודור?',
        options: ['לימה', 'מונטצ\'לו', 'קיטו', 'אקוודור סיטי'],
        correct: 2
    },
    {
        question: 'מי הלך?',
        options: ['חתול', 'יאיר', 'רבין', 'נועם'],
        correct: 0
    },
    {
        question: 'למי יש בעיה?',
        options: ['לעפולה', 'למשה כהן', 'לקוף', 'לאלעד'],
        correct: 2
    },
    {
        question: 'באיזה צבע אורי רוצה טבעת?',
        options: ['כסף', 'גם וגם', 'זהב', 'גם היא לא יודעת'],
        correct: 1
    },
    {
        question: 'מה נועם הכי אוהב?',
        options: ['סקייט', 'אותך', 'אלכס', 'לנגן'],
        correct: 1
    }
];

// Daily challenges for the trip (Oct 8 - Nov 4, 2025)
const dailyChallenges = [
    // Week 1
    { date: '2025-10-08', title: 'יום 1: ההתחלה', type: 'quiz', question: 'איפה הצעתי לך לצאת?', options: ['מצפה רמון', 'שביל ליד עפולה', 'וואטצאפ', 'פסגותפסט'], correct: 0 },
    { date: '2025-10-09', title: 'יום 2: זיכרון ראשון', type: 'text', question: 'למה הסכמת לצאת איתי? (אגב אני רואה את התשובות אז תעני באמת)<br><br>היה לי כל כך כיף איתך במורשת, פשוט לא רציתי שנתרחק אחרי כמה שהתחברנו שם' },
    { date: '2025-10-10', title: 'יום 3: הדייט הראשון', type: 'quiz', question: 'לאן הלכנו בדייט הראשון?', options: ['למסעדה', 'לסרט', 'לסוף העולם', 'לפארק'], correct: 2 },
    { date: '2025-10-11', title: 'יום 4: רגע מצחיק', type: 'text', question: 'יש רגע מצחיק שלנו שאת זוכרת?<br><br>אני זוכר למשל כשהיינו בדירה שלך בטכניון ופשוט נקרענו מצחוק מלא זמן בלי סיבה, היה ממש כיף ואת מושלמת' },
    { date: '2025-10-12', title: 'יום 5: שיר שלנו', type: 'quiz', question: 'מה השיר שלנו?', options: ['כל מה שיש לי', 'טקילה', 'משהו באנגלית של נועם', 'רק שלך'], correct: 3 },
    { date: '2025-10-13', title: 'יום 6: חלום משותף', type: 'text', question: 'משהו שבא לך לעשות בחיים שלך, בלי קשר אליי<br><br>אני למשל רוצה לעשות איזה משהו מוזיקלי' },
    { date: '2025-10-14', title: 'יום 7: מה אני אוהב בך', type: 'text', question: 'כתבי 3 דברים שאת אוהבת בי<br><br>אני אוהב בך שאת יודעת להקשיב טוב, שאת חיובית תמיד, ושאת לא שיפוטית בפני אף אחד' },
    
    // Week 2
    { date: '2025-10-15', title: 'יום 8: טיול חלומות', type: 'quiz', question: 'לאן הכי היית רוצה לטוס איתי?', options: ['ונציה', 'פריז', 'ארה"ב', 'מלדיבים'], correct: 1 },
    { date: '2025-10-16', title: 'יום 9: ארוחה משותפת', type: 'text', question: 'מה את הכי אוהבת שאנחנו אוכלים ביחד בדייטים?<br><br>אני הכי אוהב מקומות חדשים כשאנחנו מנסים דברים' },
    { date: '2025-10-17', title: 'יום 10: הפתעה', type: 'text', question: 'מה ההפתעה שעשיתי שהכי אהבת?<br><br>אני ממש זוכר את הנפחות זכוכית ואיזה יום מושלם היה, אבל עשית לי מלא ימים מושלמים אז התחרות קשה' },
    { date: '2025-10-18', title: 'יום 11: תכונה מיוחדת', type: 'text', question: 'מה התכונה שאת הכי אוהבת בי?' },
    { date: '2025-10-19', title: 'יום 12: רגע קסום', type: 'text', question: 'רגע שאת זוכרת שהיה לנו בו ממש ממש כיף?<br><br>אני זוכר שהיינו ביחד באוטופיה ואיך נהניתי' },
    { date: '2025-10-20', title: 'יום 13: צבע שמלה', type: 'quiz', question: 'מה הצבע האהוב עליי לשמלה?', options: ['הצהובה', 'הלבנה', 'הכל מושלם', 'הורודה'], correct: 2 },
    { date: '2025-10-21', title: 'יום 14: מחמאה', type: 'text', question: 'תני לי מחמאה שתמיד רצית לתת לי<br><br>איזה כיף לסחוט מחמאות ככה' },
    
    // Week 3
    { date: '2025-10-22', title: 'יום 15: דייטים', type: 'quiz', question: 'איזה דייט לא היה לנו?', options: ['כדרות', 'רכיבה על סוסים', 'ציור בים', 'פיטמאסטר'], correct: 3 },
    { date: '2025-10-23', title: 'יום 16: מוזיקה', type: 'text', question: 'מה השיר שאת הכי אוהבת מהפלייליסט אנגלית?' },
    { date: '2025-10-24', title: 'יום 17: חיוך', type: 'quiz', question: 'מה גורם לי לחייך הכי הרבה?', options: ['הבדיחות שלך', 'החיבוק שלך', 'החיוך שלך', 'הכל'], correct: 3 },
    { date: '2025-10-25', title: 'יום 18: תמונה יפה', type: 'text', question: 'תארי את התמונה האהובה עלייך שלנו<br><br>אני אוהב ממש את התמונה שלנו מהרכיבה על סוסים' },
    { date: '2025-10-26', title: 'יום 19: הרגש', type: 'quiz', question: 'איך את מרגישה כשאנחנו ביחד?', options: ['מאושרת', 'בטוחה', 'מאוהבת', 'כל התשובות נכונות'], correct: 3 },
    { date: '2025-10-27', title: 'יום 20: מילה אחת', type: 'text', question: 'במילה אחת, מה אני בשבילך?<br><br>מילה אחת רק אבל' },
    { date: '2025-10-28', title: 'יום 21: המוזיקה שלנו', type: 'text', question: 'איזה שיר היית מקדישה לי?' },
    
    // Week 4
    { date: '2025-10-29', title: 'יום 22: תכנון עתידי', type: 'quiz', question: 'איך את רואה אותנו בעוד 5 שנים?', options: ['נשואים', 'עם ילדים', 'בבית משלנו', 'כל התשובות'], correct: 3 },
    { date: '2025-10-30', title: 'יום 23: מתנה מושלמת', type: 'text', question: 'נכון האתר זה מתנה מגניבה? כן אבל מה יותר מגניב שהיית רוצה?' },
    { date: '2025-10-31', title: 'יום 24: רגע רומנטי', type: 'text', question: 'תארי רגע רומנטי שאת זוכרת' },
    { date: '2025-11-01', title: 'יום 25: סיבה לאהוב', type: 'quiz', question: 'למה את אוהבת אותי?', options: ['בגלל מי שאני', 'החיבוקים החזקים', 'החיבור בינינו', 'הכל ועוד'], correct: 3 },
    { date: '2025-11-02', title: 'יום 26: חוזק יחד', type: 'text', question: 'מה עושה אותנו חזקים כזוג?<br><br>לדעתי העובדה ששנינו מכבדים אחד את השנייה ונותנים לכל אחד את המקום שלו.<br><br>וגם שאת יפה ממש כמובן' },
    { date: '2025-11-03', title: 'יום 27: מחר נפגש!', type: 'text', question: 'מה הדבר הראשון שתרצי לעשות כשנפגש?<br><br>חוץ מחיבוק כי זה ברור' },
    { date: '2025-11-04', title: 'יום 28: היום! 💝', type: 'special', question: 'היום אנחנו ביחד שוב! אני אוהב אותך! 💕' }
];

// Song recognition game configuration
const SONG_PLAY_DURATION = 3000; // Duration in milliseconds (3 seconds)
const SONG_START_TIMES = {
    'היא לא את': 25,     // Start at 25 seconds for "היא לא את"
    'מה אם נתנשק': 20,  // Start at 20 seconds for "מה אם נתנשק"
    'מישהו פעם': 25,     // Start at 25 seconds for "מישהו פעם"
    'תהום': 18,          // Start at 18 seconds for "תהום"
    'רק שלך': 22         // Start at 22 seconds for "רק שלך"
};

// Song recognition game data
const songGameData = [
    { 
        name: 'היא לא את', 
        artist: 'אייל גולן',
        options: ['היא לא את', 'עיר נמל', 'חלומות', 'לוחמת'],
        correct: 0,
        audioUrl: 'audio/אייל גולן היא לא את Eyal Golan.mp3',
        startTime: SONG_START_TIMES['היא לא את']
    },
    { 
        name: 'מה אם נתנשק', 
        artist: 'נתן גושן',
        options: ['26', 'מה אם נתנשק', 'שמלה כחולה', 'שממה'],
        correct: 1,
        audioUrl: 'audio/נתן גושן מה אם נתנשק Nathan Goshen.mp3',
        startTime: SONG_START_TIMES['מה אם נתנשק']
    },
    { 
        name: 'מישהו פעם', 
        artist: 'עברי לידר',
        options: ['מישהו פעם', 'לראות את האור', 'פרחה במרצדס', 'רסיסים'],
        correct: 0,
        audioUrl: 'audio/עברי לידר - מישהו פעם  Ivri Lider - Mishehu Pa\'am.mp3',
        startTime: SONG_START_TIMES['מישהו פעם']
    },
    { 
        name: 'תהום', 
        artist: 'עומר אדם',
        options: ['טקילה', 'תהום', 'שני משוגעים', 'אקדח'],
        correct: 1,
        audioUrl: 'audio/עומר אדם  תהום (Prod.by Guy Dan & Shrek & Tzukush).mp3',
        startTime: SONG_START_TIMES['תהום']
    },
    { 
        name: 'רק שלך', 
        artist: 'עומר אדם',
        options: ['גברת אגו', 'רוקנרול', 'רק שלך', 'רוזה'],
        correct: 2,
        audioUrl: 'audio/עומר אדם - רק שלך (Prod. By Osher Cohen).mp3',
        startTime: SONG_START_TIMES['רק שלך']
    }
];

// State management
let gameState = {
    completedGames: new Set(),
    completedDays: new Set(),
    dailyAnswers: {}, // Store text answers from daily challenges { date: answer }
    memoryMoves: 0,
    memoryMatched: 0,
    scrambleAttempts: 0,
    scrambleCurrentWord: 0,
    quizCurrentQuestion: 0,
    quizCorrectAnswers: 0,
    songCurrentQuestion: 0,
    songCorrectAnswers: 0
};

// Audio player for song game
let currentAudio = null;

// Load state from localStorage
function loadState() {
    const saved = localStorage.getItem('oriGameState');
    if (saved) {
        const parsed = JSON.parse(saved);
        gameState.completedGames = new Set(parsed.completedGames || []);
        gameState.completedDays = new Set(parsed.completedDays || []);
        gameState.dailyAnswers = parsed.dailyAnswers || {};
    }
}

// Save state to localStorage
function saveState() {
    const toSave = {
        completedGames: Array.from(gameState.completedGames),
        completedDays: Array.from(gameState.completedDays),
        dailyAnswers: gameState.dailyAnswers
    };
    localStorage.setItem('oriGameState', JSON.stringify(toSave));
}

// Countdown timer
function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        showRevealSection();
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Update progress bar
    const totalTime = targetDate - new Date(targetDate.getTime() - (30 * 24 * 60 * 60 * 1000)); // 30 days total
    const elapsed = new Date() - (targetDate - (30 * 24 * 60 * 60 * 1000));
    const progress = Math.max(0, Math.min(100, (elapsed / (30 * 24 * 60 * 60 * 1000)) * 100));
    
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressText').textContent = Math.round(progress) + '% הושלם';
}

// Check which games should be unlocked
function checkGameUnlocks() {
    const now = new Date();
    const daysUntilTarget = Math.floor((targetDate - now) / (1000 * 60 * 60 * 24));

    const games = ['memory', 'scramble', 'quiz', 'song', 'loveCalc'];
    
    games.forEach(game => {
        if (daysUntilTarget <= gameUnlockDays[game]) {
            unlockGame(game);
        } else {
            const daysLeft = daysUntilTarget - gameUnlockDays[game];
            updateGameTimer(game, daysLeft);
        }
    });
}

function updateGameTimer(game, daysLeft) {
    const timerElement = document.getElementById(`${game}Timer`);
    if (timerElement) {
        timerElement.querySelector('span').textContent = `נפתח בעוד ${daysLeft} ימים`;
    }
}

function unlockGame(game) {
    const btn = document.getElementById(`${game}Btn`);
    const timer = document.getElementById(`${game}Timer`);
    
    if (btn && !gameState.completedGames.has(game)) {
        btn.disabled = false;
        btn.classList.add('unlocked');
        btn.innerHTML = '<i class="fas fa-play"></i> שחק עכשיו';
        if (timer) {
            timer.innerHTML = '<i class="fas fa-check"></i> <span>פתוח למשחק!</span>';
        }
    } else if (btn && gameState.completedGames.has(game)) {
        btn.classList.add('completed');
        btn.innerHTML = '<i class="fas fa-trophy"></i> הושלם';
        if (timer) {
            timer.innerHTML = '<i class="fas fa-trophy"></i> <span>הושלם!</span>';
        }
    }
}

function showRevealSection() {
    document.getElementById('revealSection').style.display = 'block';
}

// Memory Game
function startMemoryGame() {
    const modal = document.getElementById('memoryModal');
    modal.classList.add('active');
    
    gameState.memoryMoves = 0;
    gameState.memoryMatched = 0;
    updateMemoryStats();
    
    createMemoryGrid();
}

function createMemoryGrid() {
    const grid = document.getElementById('memoryGrid');
    grid.innerHTML = '';
    
    // Create pairs
    const cards = [...memoryGameData, ...memoryGameData]
        .sort(() => Math.random() - 0.5);
    
    let flippedCards = [];
    
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.dataset.id = card.id;
        cardElement.dataset.index = index;
        cardElement.dataset.image = card.image;
        
        cardElement.addEventListener('click', function() {
            if (this.classList.contains('flipped') || 
                this.classList.contains('matched') || 
                flippedCards.length >= 2) {
                return;
            }
            
            this.classList.add('flipped');
            this.style.backgroundImage = `url('${card.image}')`;
            this.style.backgroundSize = 'cover';
            this.style.backgroundPosition = 'center';
            flippedCards.push(this);
            
            if (flippedCards.length === 2) {
                gameState.memoryMoves++;
                updateMemoryStats();
                
                setTimeout(() => {
                    if (flippedCards[0].dataset.id === flippedCards[1].dataset.id) {
                        flippedCards[0].classList.add('matched');
                        flippedCards[1].classList.add('matched');
                        gameState.memoryMatched++;
                        updateMemoryStats();
                        
                        if (gameState.memoryMatched === memoryGameData.length) {
                            completeMemoryGame();
                        }
                    } else {
                        flippedCards[0].classList.remove('flipped');
                        flippedCards[1].classList.remove('flipped');
                        flippedCards[0].style.backgroundImage = '';
                        flippedCards[1].style.backgroundImage = '';
                    }
                    flippedCards = [];
                }, 1000);
            }
        });
        
        grid.appendChild(cardElement);
    });
}

function updateMemoryStats() {
    document.getElementById('moves').textContent = gameState.memoryMoves;
    document.getElementById('pairs').textContent = `${gameState.memoryMatched}/${memoryGameData.length}`;
}

function completeMemoryGame() {
    gameState.completedGames.add('memory');
    saveState();
    
    const message = document.getElementById('memoryMessage');
    message.style.display = 'block';
    message.className = 'game-message success';
    message.innerHTML = `
        <h3>🎉 כל הכבוד!</h3>
        <p>השלמת את משחק הזיכרון ב-${gameState.memoryMoves} מהלכים!</p>
    `;
    
    unlockGame('memory');
}

// Scramble Game
function startScrambleGame() {
    const modal = document.getElementById('scrambleModal');
    modal.classList.add('active');
    
    gameState.scrambleCurrentWord = 0;
    gameState.scrambleAttempts = 0;
    
    showScrambleWord();
}

function showScrambleWord() {
    const currentData = scrambleGameData[gameState.scrambleCurrentWord];
    
    document.getElementById('scrambledWord').textContent = currentData.scrambled;
    document.getElementById('hintText').textContent = `רמז: ${currentData.hint}`;
    document.getElementById('answerInput').value = '';
    document.getElementById('wordProgress').textContent = 
        `${gameState.scrambleCurrentWord + 1}/${scrambleGameData.length}`;
    document.getElementById('attempts').textContent = gameState.scrambleAttempts;
    
    const message = document.getElementById('scrambleMessage');
    message.style.display = 'none';
}

function checkScrambleAnswer() {
    const input = document.getElementById('answerInput').value.trim();
    const currentData = scrambleGameData[gameState.scrambleCurrentWord];
    const message = document.getElementById('scrambleMessage');
    
    gameState.scrambleAttempts++;
    document.getElementById('attempts').textContent = gameState.scrambleAttempts;
    
    if (input === currentData.word) {
        message.style.display = 'block';
        message.className = 'game-message success';
        message.textContent = '✅ נכון! מעולה!';
        
        gameState.scrambleCurrentWord++;
        
        if (gameState.scrambleCurrentWord >= scrambleGameData.length) {
            setTimeout(() => completeScrambleGame(), 1500);
        } else {
            setTimeout(() => showScrambleWord(), 1500);
        }
    } else {
        message.style.display = 'block';
        message.className = 'game-message error';
        message.textContent = '❌ לא נכון, נסה שוב!';
    }
}

function completeScrambleGame() {
    gameState.completedGames.add('scramble');
    saveState();
    
    const message = document.getElementById('scrambleMessage');
    message.style.display = 'block';
    message.className = 'game-message success';
    message.innerHTML = `
        <h3>🎉 מעולה!</h3>
        <p>פענחת את כל המילים!</p>
    `;
    
    unlockGame('scramble');
}

// Quiz Game
function startQuizGame() {
    const modal = document.getElementById('quizModal');
    modal.classList.add('active');
    
    gameState.quizCurrentQuestion = 0;
    gameState.quizCorrectAnswers = 0;
    
    showQuizQuestion();
}

function showQuizQuestion() {
    const currentData = quizGameData[gameState.quizCurrentQuestion];
    
    document.getElementById('question').textContent = currentData.question;
    document.getElementById('quizProgress').textContent = 
        `${gameState.quizCurrentQuestion + 1}/${quizGameData.length}`;
    document.getElementById('correctAnswers').textContent = gameState.quizCorrectAnswers;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    currentData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkQuizAnswer(index));
        optionsContainer.appendChild(btn);
    });
    
    const message = document.getElementById('quizMessage');
    message.style.display = 'none';
}

function checkQuizAnswer(selectedIndex) {
    const currentData = quizGameData[gameState.quizCurrentQuestion];
    const message = document.getElementById('quizMessage');
    const buttons = document.querySelectorAll('.option-btn');
    
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === currentData.correct) {
        buttons[selectedIndex].classList.add('correct');
        gameState.quizCorrectAnswers++;
        message.style.display = 'block';
        message.className = 'game-message success';
        message.textContent = '✅ תשובה נכונה!';
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        buttons[currentData.correct].classList.add('correct');
        message.style.display = 'block';
        message.className = 'game-message error';
        message.textContent = '❌ תשובה שגויה';
    }
    
    gameState.quizCurrentQuestion++;
    
    if (gameState.quizCurrentQuestion >= quizGameData.length) {
        setTimeout(() => completeQuizGame(), 2000);
    } else {
        setTimeout(() => showQuizQuestion(), 2000);
    }
}

function completeQuizGame() {
    gameState.completedGames.add('quiz');
    saveState();
    
    const message = document.getElementById('quizMessage');
    message.style.display = 'block';
    message.className = 'game-message success';
    message.innerHTML = `
        <h3>🎉 סיימת את החידון!</h3>
        <p>ענית נכון על ${gameState.quizCorrectAnswers}/${quizGameData.length} שאלות!</p>
    `;
    
    unlockGame('quiz');
}

// Daily Calendar Functions
function createDailyCalendar() {
    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';
    
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    dailyChallenges.forEach((challenge, index) => {
        const challengeDate = new Date(challenge.date);
        challengeDate.setHours(0, 0, 0, 0);
        
        const dayBox = document.createElement('div');
        dayBox.className = 'day-box';
        
        const isToday = challengeDate.getTime() === now.getTime();
        const isPast = challengeDate < now;
        const isFuture = challengeDate > now;
        const isCompleted = gameState.completedDays.has(challenge.date);
        
        if (isToday) {
            dayBox.classList.add('today');
        } else if (isFuture) {
            dayBox.classList.add('locked');
        } else if (isCompleted) {
            dayBox.classList.add('completed');
        }
        
        const dayNumber = challengeDate.getDate();
        const monthName = challengeDate.toLocaleDateString('he-IL', { month: 'short' });
        
        dayBox.innerHTML = `
            <div class="day-icon"></div>
            <div class="day-number">${dayNumber}</div>
            <div class="day-month">${monthName}</div>
        `;
        
        if (!isFuture) {
            dayBox.addEventListener('click', () => openDailyChallenge(challenge));
        }
        
        grid.appendChild(dayBox);
    });
}

function openDailyChallenge(challenge) {
    const modal = document.getElementById('dailyChallengeModal');
    modal.classList.add('active');
    
    document.getElementById('dailyChallengeTitle').textContent = challenge.title;
    document.getElementById('dailyChallengeDate').textContent = 
        new Date(challenge.date).toLocaleDateString('he-IL', { dateStyle: 'long' });
    
    const content = document.getElementById('dailyChallengeContent');
    const message = document.getElementById('dailyChallengeMessage');
    message.style.display = 'none';
    
    if (challenge.type === 'special') {
        content.innerHTML = `
            <div class="challenge-question">${challenge.question}</div>
            <div style="text-align: center; font-size: 3rem; margin: 30px 0;">
                ❤️💕💝💖💗💓
            </div>
        `;
        gameState.completedDays.add(challenge.date);
        saveState();
        createDailyCalendar();
        return;
    }
    
    if (challenge.type === 'quiz') {
        content.innerHTML = `
            <div class="challenge-question">${challenge.question}</div>
            <div class="challenge-options" id="challengeOptions"></div>
        `;
        
        const optionsContainer = document.getElementById('challengeOptions');
        challenge.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => checkDailyChallengeAnswer(challenge, index));
            optionsContainer.appendChild(btn);
        });
    } else if (challenge.type === 'text') {
        // Pre-fill answer if it exists
        const existingAnswer = gameState.dailyAnswers[challenge.date] || '';
        content.innerHTML = `
            <div class="challenge-question">${challenge.question}</div>
            <textarea class="challenge-textarea" id="challengeAnswer" placeholder="כתבי את תשובתך כאן...">${existingAnswer}</textarea>
            <button class="submit-btn" id="submitChallenge">שלח תשובה</button>
        `;
        
        document.getElementById('submitChallenge').addEventListener('click', () => {
            const answer = document.getElementById('challengeAnswer').value.trim();
            if (answer) {
                message.style.display = 'block';
                message.className = 'game-message success';
                message.innerHTML = '<h3>💝 תודה על התשובה!</h3><p>התשובה שלך נשמרה בלב שלי</p>';
                gameState.completedDays.add(challenge.date);
                // Save the text answer
                gameState.dailyAnswers[challenge.date] = answer;
                saveState();
                createDailyCalendar();
            } else {
                message.style.display = 'block';
                message.className = 'game-message error';
                message.textContent = 'אנא כתבי תשובה';
            }
        });
    }
}

function checkDailyChallengeAnswer(challenge, selectedIndex) {
    const message = document.getElementById('dailyChallengeMessage');
    const buttons = document.querySelectorAll('#challengeOptions .option-btn');
    
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === challenge.correct) {
        buttons[selectedIndex].classList.add('correct');
        message.style.display = 'block';
        message.className = 'game-message success';
        message.innerHTML = '<h3>💝 תשובה נכונה!</h3><p>את מכירה אותי טוב!</p>';
        gameState.completedDays.add(challenge.date);
        saveState();
        setTimeout(() => createDailyCalendar(), 2000);
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        buttons[challenge.correct].classList.add('correct');
        message.style.display = 'block';
        message.className = 'game-message error';
        message.textContent = 'לא בדיוק, אבל זה בסדר! 😊';
    }
}

// Song Recognition Game
function startSongGame() {
    const modal = document.getElementById('songModal');
    modal.classList.add('active');
    
    gameState.songCurrentQuestion = 0;
    gameState.songCorrectAnswers = 0;
    
    showSongQuestion();
}

function showSongQuestion() {
    const currentData = songGameData[gameState.songCurrentQuestion];
    
    document.getElementById('songProgress').textContent = 
        `${gameState.songCurrentQuestion + 1}/${songGameData.length}`;
    document.getElementById('songCorrect').textContent = gameState.songCorrectAnswers;
    
    const optionsContainer = document.getElementById('songOptions');
    optionsContainer.innerHTML = '';
    
    currentData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkSongAnswer(index));
        optionsContainer.appendChild(btn);
    });
    
    const message = document.getElementById('songMessage');
    message.style.display = 'none';
    
    const playBtn = document.getElementById('playSongBtn');
    playBtn.innerHTML = '<i class="fas fa-play"></i> נגן קטע';
    playBtn.onclick = playSongSnippet;
}

function playSongSnippet() {
    const currentData = songGameData[gameState.songCurrentQuestion];
    const playBtn = document.getElementById('playSongBtn');
    
    // Stop previous audio if playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    // Create new audio
    currentAudio = new Audio(currentData.audioUrl);
    currentAudio.currentTime = currentData.startTime || 0;
    
    playBtn.innerHTML = '<i class="fas fa-pause"></i> מנגן...';
    playBtn.disabled = true;
    
    // Play for specified duration
    currentAudio.play();
    
    setTimeout(() => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }
        playBtn.innerHTML = '<i class="fas fa-play"></i> נגן שוב';
        playBtn.disabled = false;
    }, SONG_PLAY_DURATION);
}

function checkSongAnswer(selectedIndex) {
    const currentData = songGameData[gameState.songCurrentQuestion];
    const message = document.getElementById('songMessage');
    const buttons = document.querySelectorAll('#songOptions .option-btn');
    
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === currentData.correct) {
        buttons[selectedIndex].classList.add('correct');
        gameState.songCorrectAnswers++;
        message.style.display = 'block';
        message.className = 'game-message success';
        message.innerHTML = `✅ נכון! ${currentData.name} של ${currentData.artist}`;
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        buttons[currentData.correct].classList.add('correct');
        message.style.display = 'block';
        message.className = 'game-message error';
        message.innerHTML = `❌ לא נכון. התשובה הנכונה: ${currentData.name}`;
    }
    
    gameState.songCurrentQuestion++;
    
    if (gameState.songCurrentQuestion >= songGameData.length) {
        setTimeout(() => completeSongGame(), 2000);
    } else {
        setTimeout(() => showSongQuestion(), 2000);
    }
}

function completeSongGame() {
    gameState.completedGames.add('song');
    saveState();
    
    const message = document.getElementById('songMessage');
    message.style.display = 'block';
    message.className = 'game-message success';
    message.innerHTML = `
        <h3>🎵 כל הכבוד!</h3>
        <p>זיהית נכון ${gameState.songCorrectAnswers}/${songGameData.length} שירים!</p>
    `;
    
    unlockGame('song');
}

// Love Calculator Game
function startLoveCalcGame() {
    const modal = document.getElementById('loveCalcModal');
    modal.classList.add('active');
    
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    document.getElementById('loveResult').style.display = 'none';
}

function calculateLove() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    
    if (!name1 || !name2) {
        alert('אנא הכנס שני שמות!');
        return;
    }
    
    let percentage;
    const n1 = name1.toLowerCase();
    const n2 = name2.toLowerCase();
    
    // Check if names are אורי and נועם in any order
    const isOri = n1.includes('ori') || n1.includes('אורי');
    const isNoam = n2.includes('noam') || n2.includes('נועם');
    const isOriReverse = n2.includes('ori') || n2.includes('אורי');
    const isNoamReverse = n1.includes('noam') || n1.includes('נועם');
    
    if ((isOri && isNoam) || (isOriReverse && isNoamReverse)) {
        percentage = 100;
    } else {
        percentage = 0;
    }
    
    const resultDiv = document.getElementById('loveResult');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>💕 תוצאת התאימות</h3>
        <div class="love-percentage">${percentage}%</div>
        <div class="love-message">${getLoveMessage(percentage)}</div>
    `;
    
    if (percentage === 100) {
        gameState.completedGames.add('loveCalc');
        saveState();
        unlockGame('loveCalc');
    }
}

function getLoveMessage(percentage) {
    if (percentage === 100) return 'התאימות המושלמת! אהבה אמיתית! 💝💕💖';
    if (percentage === 0) return 'אין התאימות... נסה שמות אחרים! �';
    return 'תאימות טובה! 💗';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    loadState();
    updateCountdown();
    checkGameUnlocks();
    createDailyCalendar(); // Initialize calendar
    setInterval(updateCountdown, 1000);
    setInterval(checkGameUnlocks, 60000); // Check every minute
    
    // Memory game
    document.getElementById('memoryBtn').addEventListener('click', startMemoryGame);
    document.getElementById('closeMemory').addEventListener('click', function() {
        document.getElementById('memoryModal').classList.remove('active');
    });
    
    // Scramble game
    document.getElementById('scrambleBtn').addEventListener('click', startScrambleGame);
    document.getElementById('closeScramble').addEventListener('click', function() {
        document.getElementById('scrambleModal').classList.remove('active');
    });
    document.getElementById('submitAnswer').addEventListener('click', checkScrambleAnswer);
    document.getElementById('answerInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkScrambleAnswer();
        }
    });
    
    // Quiz game
    document.getElementById('quizBtn').addEventListener('click', startQuizGame);
    document.getElementById('closeQuiz').addEventListener('click', function() {
        document.getElementById('quizModal').classList.remove('active');
    });
    
    // Song game
    document.getElementById('songBtn').addEventListener('click', startSongGame);
    document.getElementById('closeSong').addEventListener('click', function() {
        document.getElementById('songModal').classList.remove('active');
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }
    });
    
    // Love Calculator game
    document.getElementById('loveCalcBtn').addEventListener('click', startLoveCalcGame);
    document.getElementById('closeLoveCalc').addEventListener('click', function() {
        document.getElementById('loveCalcModal').classList.remove('active');
    });
    document.getElementById('calculateLove').addEventListener('click', calculateLove);
    
    // Daily Challenge
    document.getElementById('closeDailyChallenge').addEventListener('click', function() {
        document.getElementById('dailyChallengeModal').classList.remove('active');
    });
    
    // Reveal button
    document.getElementById('revealBtn').addEventListener('click', function() {
        // Check if all games are completed (daily challenges are optional)
        const requiredGames = ['memory', 'scramble', 'quiz', 'song', 'loveCalc'];
        const allGamesCompleted = requiredGames.every(game => gameState.completedGames.has(game));
        
        if (!allGamesCompleted) {
            alert('עדיין לא השלמת את כל המשחקים! 💝\n\nהשלם את כל המשחקים כדי לראות את ההפתעה המיוחדת!');
            return;
        }
        
        // Show the reward image
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.style.zIndex = '2000';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 800px;">
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
                <h2>🎉 ההפתעה המיוחדת שלך! 🎉</h2>
                <p style="text-align: center; font-size: 1.2rem; margin: 20px 0;">
                    כל הכבוד! השלמת את כל האתגרים! 💝
                </p>
                <img src="images/reward/WhatsApp Image 2025-09-03 at 08.07.24_06a40cc6.jpg" 
                     style="width: 100%; border-radius: 15px; margin: 20px 0;" 
                     alt="ההפתעה המיוחדת">
                <p style="text-align: center; font-size: 1.5rem; color: #ff6b6b; margin-top: 20px;">
                    אני אוהב אותך, נועם ❤️💕
                </p>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Close on outside click
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.remove();
            }
        });
    });
    
    // Close modals on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
    
    // Dev reset button - Press Ctrl+Shift+R to toggle visibility
    let devModeEnabled = false;
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'R') {
            e.preventDefault();
            devModeEnabled = !devModeEnabled;
            const resetBtn = document.getElementById('devResetBtn');
            const devPanel = document.getElementById('devPanel');
            
            resetBtn.style.display = devModeEnabled ? 'block' : 'none';
            devPanel.style.display = devModeEnabled ? 'block' : 'none';
            
            if (devModeEnabled) {
                console.log('Dev mode enabled - Reset button and answers panel are now visible');
                updateDevPanel();
            } else {
                console.log('Dev mode disabled - Reset button and answers panel are now hidden');
            }
        }
    });
    
    document.getElementById('devResetBtn').addEventListener('click', function() {
        if (confirm('האם אתה בטוח שברצונך לאפס את כל ההתקדמות? פעולה זו אינה ניתנת לביטול!')) {
            localStorage.clear();
            location.reload();
        }
    });
    
    document.getElementById('closeDevPanel').addEventListener('click', function() {
        document.getElementById('devPanel').style.display = 'none';
        document.getElementById('devResetBtn').style.display = 'none';
        devModeEnabled = false;
    });
    
    // Update dev panel with answers
    function updateDevPanel() {
        const content = document.getElementById('devPanelContent');
        const answers = gameState.dailyAnswers;
        
        if (Object.keys(answers).length === 0) {
            content.innerHTML = '<p style="text-align: center; color: #999;">אין תשובות שנשמרו עדיין</p>';
            return;
        }
        
        content.innerHTML = '';
        
        // Sort by date
        const sortedDates = Object.keys(answers).sort();
        
        sortedDates.forEach(date => {
            // Find the challenge for this date
            const challenge = dailyChallenges.find(c => c.date === date);
            if (!challenge) return;
            
            const item = document.createElement('div');
            item.className = 'dev-answer-item';
            item.innerHTML = `
                <h4>${challenge.title}</h4>
                <div class="date">${date}</div>
                <div class="answer">${answers[date]}</div>
            `;
            content.appendChild(item);
        });
    }
});
