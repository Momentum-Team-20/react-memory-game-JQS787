import React, { useState, useEffect } from 'react';
import './App.css';

const symbols = ['🌟', '🍎', '🚀', '🌈', '🦄', '⚽', '🎸', '🍕'];

const generateCards = () => {
  const allCards = [...symbols, ...symbols];
  return allCards.sort(() => Math.random() - 0.5).map((symbol, index) => ({ id: index, symbol, isFlipped: false, isMatched: false }));
};

const App = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [congratulations, setCongratulations] = useState(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.symbol === secondCard.symbol) {
        setMatchedPairs((prev) => [...prev, firstCard.symbol]);
        setCards((prev) =>
          prev.map((card) =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isMatched: true, isFlipped: false }
              : card
          )
        );
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) => (card.isMatched ? card : { ...card, isFlipped: false }))
          );
        }, 1000);
      }
      setFlippedCards([]);
    }
  }, [flippedCards]);

  useEffect(() => {
    if (matchedPairs.length === symbols.length) {
      setCongratulations(true);
    }
  }, [matchedPairs]);

  const handleCardClick = (id) => {
    if (flippedCards.length < 2) {
      setFlippedCards((prev) => [...prev, cards.find((card) => card.id === id)]);
      setCards((prev) =>
        prev.map((card) => (card.id === id ? { ...card, isFlipped: true } : card))
      );
    }
  };

  const resetGame = () => {
    setCards(generateCards());
    setFlippedCards([]);
    setMatchedPairs([]);
    setCongratulations(false);
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}
            onClick={() => !card.isFlipped && !card.isMatched && handleCardClick(card.id)}
          >
            {card.isFlipped || card.isMatched ? card.symbol : '❓'}
          </div>
        ))}
      </div>
      <button onClick={resetGame}>Reset Game</button>
      {congratulations && <p>Congratulations! You've won!</p>}
    </div>
  );
};

export default App;
