import { useState, useEffect } from 'react';
import './App.css'
import confetti from 'canvas-confetti';

import { Square } from './components/Square';
import { TURNS, WINNER_COMBOS } from './constants.js';
import { checkWinnerFrom, checkEndGame } from './logic/board';
import { WinnerModal } from './components/WinnerModal.jsx';
import { getBoardFromStorage, resetGameStorage, saveGameToStorage, getTurnFromStorage } from './logic/storage/index.js';

function App() {
  console.log("Render");

  const [board, setBoard] = useState(() => {
    console.log("Start status board");

    const boardFromStorage = getBoardFromStorage();
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    console.log("Start status turn");

    const turnFromStorage = getTurnFromStorage();
    return turnFromStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    // Don't update the board if the square is already filled
    if (board[index] || winner) return;

    // Update the board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Change the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    });

    // Check for a winner
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // It's a tie
    }

  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  }

  const changePlayerStart = () => {
    resetGame();
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
  }

  useEffect(() => {
    console.log("Use effect");
    resetGameStorage();
  }, [winner]);

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <button onClick={changePlayerStart}>Change Player</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >{board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
