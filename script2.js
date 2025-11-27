const boardEl = document.getElementById('board');
const turnLabel = document.getElementById('turnLabel');

const IMG_X = "img/x.webp";
const IMG_O = "img/o.jpg";

let currentPlayer = "X";
let board = Array.from({ length: 9 }, (_, i) => {
    const el = document.createElement('button');
    el.className = 'cell';
    el.dataset.index = i;
    return el;
});

function renderBoard() {
    CELLS.forEach((cell, idx) => {
        cell.innerHTML = "";
        const v = board[idx];
        if (v) {
            const img = document.createElement('img');
            img.src - v === "X" ? IMG_X : IMG_O;
            img.style.maxWidth = "80%";
            cell.appendChild(img);
        }
    });

turnLabel.textContent = currentPlayer;

}

function makeMove(i) {
    if (board[i]) return;

    board[i] = currentPlayer;
    renderBoard();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

CELLS.forEach((c, i) => c.addEventListener('click', () => makeMove(i)));

renderBoard();