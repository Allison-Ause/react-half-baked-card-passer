import React from 'react';
import { useGame } from '../context/GameContext';
import Card from './Card';

export default function ExecutePassButton({
  passCard,
  // setFrom,
  // from,
  // to,
  // selectedCard,
  // setSelectedCard,
}) {
  const { to, from, selectedCard } = useGame();
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} /> from {from} to {to}
    </div>
  );
}
// setSelectedCard={setSelectedCard} setFrom={setFrom}
