const boardEl = document.getElementById('board');

const CELLS = Array.from({ length: 9 }, (_, i) => {
    const el = document.createElement('button');
    el.className = 'cell';
    el.dataset.index = i;
    boardEl.appendChild(el);
    return el;
});

CELLS.forEach((cell, idx) => {
    cell.addEventListener('click', () => {
        console.log("Clicou na celula:", idx);
    });
});

CELLS.forEach(c => {
    c.tabIndex = 0;
    c.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === '') {
            e.preventDefault();
            c.click();
        }
    });
});

console.log("Aula 2 - Celulas criadas!");