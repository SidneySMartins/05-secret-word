import React from 'react';
import './GameOver.css';

const GameOver = ({ retry, score }) => {
  return (
    <div className='game'>
      <h1>Fim de jogo!</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Reset game</button>
    </div>
  );
};

export default GameOver;
