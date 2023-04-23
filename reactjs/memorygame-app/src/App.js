import React, { useState, useEffect } from 'react';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  const images = [
    '🐶',
    '🐱',
    '🐭',
    '🐹',
    '🐰',
    '🦊',
    '🐻',
    '🐼',
    '🐨',
    '🐯',
    '🦁',
    '🐮',
    '🐷',
    '🐸',
    '🐙',
    '🦑',
  ];

  const generateCards = (count) => {
    const cards = [];
    for (let i = 0; i < count; i++) {
      const imageIndex = i % (count / 2);
      cards.push({ id: i, image: images[imageIndex], flipped: false });
    }
    return cards;
  };

  const shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  };

  const handleCardClick = (card) => {
    if (selected.length === 2 || matched.includes(card.id)) {
      return;
    }

    setSelected([...selected, card]);
    setCards(
      cards.map((c) => (c.id === card.id ? { ...c, flipped: true } : c))
    );
  };

  useEffect(() => {
    if (selected.length === 2) {
      setMoves((moves) => moves + 1);
      if (selected[0].image === selected[1].image) {
        setMatched([...matched, ...selected.map((c) => c.id)]);
      }
      setTimeout(() => {
        setSelected([]);
        setCards(
          cards.map((c) =>
            selected.includes(c) ? { ...c, flipped: true } : c
          )
        );
      }, 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (matched.length === cards.length) {
      alert(`Congratulations! You won in ${moves} moves.`);
    }
  }, [matched]);

  useEffect(() => {
    setCards(shuffleCards(generateCards(16)));
  }, []);

  return (
    <div>
      <div className="game-board">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.flipped ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card)}
          >
            {card.flipped ? card.image : ''}
          </div>
        ))}
      </div>
      <div className="moves">Moves: {moves}</div>
    </div>
  );
};

export default MemoryGame;
