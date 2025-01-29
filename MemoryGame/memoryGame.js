
let selectedCards = [];
let matchedCards = [];
let symbols = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍍', '🥝', '🍓', '🍊', '🥥', '🥭', '🍑', '🍐', '🍋', '🍈', '🍏', '🍔', '🍕', '🍟', '🌭', '🍩', '🍪', '🍫', '🍬', '🍯', '🥞', '🧇', '🍗', '🍖', '🍤', '🥗', '🍲', '🍛', '🥘', '🍜', '🍣', '🥪', '🥒', '🌶', '🥕', '🌽', '🍠', '🍄', '🥑', '🥔', '🥬', '🥯', '🥖', '🧀', '🥚', '🍰', '🎂', '🧁', '🥣', '🥫', '🫒'];

function startGame() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    let difficulty = document.getElementById('difficulty').value;
    let selectedSymbols = symbols.slice(0, difficulty / 2);
    let gameSymbols = [...selectedSymbols, ...selectedSymbols];
    gameSymbols.sort(() => 0.5 - Math.random());
    
    gameSymbols.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('col-4', 'col-md-2', 'card');
        card.dataset.symbol = symbol;
        card.dataset.index = index;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (selectedCards.length < 2 && !this.classList.contains('flipped')) {
        this.textContent = this.dataset.symbol;
        this.classList.add('flipped');
        selectedCards.push(this);
    }
    
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (selectedCards[0].dataset.symbol === selectedCards[1].dataset.symbol) {
        matchedCards.push(...selectedCards);
    } else {
        selectedCards.forEach(card => {
            card.textContent = '';
            card.classList.remove('flipped');
        });
    }
    selectedCards = [];
    
    if (matchedCards.length === document.getElementById('difficulty').value) {
        alert('You win!');
    }
}

function resetGame() {
    selectedCards = [];
    matchedCards = [];
    startGame();
}
