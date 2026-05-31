export { saveGameToStorage, resetGameStorage, getBoardFromStorage, getTurnFromStorage };

const saveGameToStorage = ({ board, turn }) => {
    window.localStorage.setItem('board', JSON.stringify(board));
    window.localStorage.setItem('turn', turn);
}

const resetGameStorage = () => {
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
}

const getBoardFromStorage = () => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage;
}

const getTurnFromStorage = () => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage;
}