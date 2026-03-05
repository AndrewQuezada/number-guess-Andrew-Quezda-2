let alphabets = [
    ['😀', '😆', '😢', '😆'],
    ['😢', '😎', '😎', '🤔'],
    ['😀', '😆', '😆', '🤔'],
    ['😴', '😑', '😴', '😑'],
];

let firstCell = null;
let firstRow = -1;
let firstCol = -1;
let matches = 0;
let attempts = 0;
let lockBoard = false;

function playGame() {
    let html = "<table>";
    for (let i = 0; i < alphabets.length; i++) {
        html += "<tr>";
        for (let j = 0; j < alphabets[i].length; j++) {
            html += `<td onclick="cellClick(this, ${i}, ${j})">?</td>`;
        }
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("grid").innerHTML = html;
    
    firstCell = null;
    firstRow = -1;
    firstCol = -1;
    matches = 0;
    attempts = 0;
    lockBoard = false;
    displayStats();
    document.getElementById("message").innerHTML = "Find the pairs!";
}

function cellClick(cell, row, col) {
    if (lockBoard || cell.innerHTML !== "?" || cell === firstCell) return;

    cell.innerHTML = alphabets[row][col];

    if (firstRow === -1) {
        firstCell = cell;
        firstRow = row;
        firstCol = col;
    } else {
        attempts++;
        if(alphabets[firstRow][firstCol] === alphabets[row][col]){
matches++
document.getElementById("message").innerHTML = "☑️ Match Found!";
}else{
    firstCell.innerHTML = "?";
    cell.innerHTML = "?";
    document.getElementById("message").innerHTML = "❌ Try Again"
}
    firstCell = null;
    firstRow = -1;
    firstCol = -1;
    displayStats();
    }
}

function displayStats() {
    document.getElementById("stats").innerHTML = `Matches: ${matches} | Attempts: ${attempts}`;
}
