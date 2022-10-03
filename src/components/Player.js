import React from 'react';
import { useGame } from '../context/GameContext';
import CardList from './CardList';

export default function Player({
  player,
  // setTo,
  hand,
  // setFrom,
  // setSelectedCard,
  // selectedCard,
  // to,
}) {
  const { to, setTo } = useGame();
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList player={player} cards={hand} />
    </div>
  );
}
