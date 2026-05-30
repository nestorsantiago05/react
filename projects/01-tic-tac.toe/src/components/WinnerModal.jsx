import { Square } from './Square';

export function WinnerModal({resetGame, winner}) {
    const winnerText = winner === false
        ? 'It\'s a tie!'
        : `The winner is`;

    if (winner === null) return null;

    return (
        <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Play Again</button>
                </footer>
            </div>
        </section>
    );
}