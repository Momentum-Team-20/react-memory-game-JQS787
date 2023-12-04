import React, { useState, useEffect } from 'react';
import './App.css';

const symbols = ["🍎", "🍌", "🍒", "🍓", "🍊", "🍇", "🍉", "🥥"];

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  useEffect(() => {
    const initialCards = shuffleArray([...symbols, ...symbols]);
    setCards(initialCards);
  }, []);

  const flipCard = (index) => {
    if (flippedCards.length < 2) {
      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, index]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [index1, index2] = flippedCards;
      if (cards[index1] === cards[index2]) {
        setMatchedPairs((prev) => prev + 1);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards, cards]);

  return (
    <div className="App">
      <div className="game-container">
        {cards.map((symbol, index) => (
          <div
            key={index}
            className={`card ${flippedCards.includes(index) ? 'flipped' : ''}`}
            onClick={() => flipCard(index)}
          >
            {flippedCards.includes(index) || matchedPairs === symbols.length ? (
              <span>{symbol}</span>
            ) : null}
          </div>
        ))}
      </div>
      {matchedPairs === symbols.length && <div className="win-message">Congratulations! You've matched all pairs.</div>}
    </div>
  );
}

export default App;
