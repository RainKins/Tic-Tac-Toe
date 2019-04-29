function autoResizeDiv() {
    document.getElementById('board').style.height = window.innerHeight + 'px';
}
window.onresize = autoResizeDiv;
autoResizeDiv();

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false,
})

swalWithBootstrapButtons.fire({
    title: 'What letter is playing first?',
    text: "Choose a letter.",
    type: 'question',
    showCancelButton: true,
    confirmButtonText: 'O',
    cancelButtonText: 'X',
    reverseButtons: true
}).then(result => {
    if (result.value === true) {
        currentPlayer = 1;
    } else {
        currentPlayer = 2;
    }
})
// Creates Board
var grid = new Array(3);
grid[0] = new Array(3);
grid[1] = new Array(3);
grid[2] = new Array(3);

var winCondition = [
    [[0, 0], [0, 1], [0, 2]], // Top Row
    [[1, 0], [1, 1], [1, 2]], // Middle Row
    [[2, 0], [2, 1], [2, 2]], // Bottom Row
    [[0, 0], [1, 1], [2, 2]], // Diagnoally from the top-left
    [[0, 2], [1, 1], [2, 0]], // Diagnoally from the top-right
    [[0, 0], [1, 0], [2, 0]], // Left Column
    [[0, 1], [1, 1], [2, 1]], // Middle Column
    [[0, 2], [1, 2], [2, 2]] // Right Column 
]
var xMoves = [];
var oMoves = [];

function checkWin() {
    var status = document.getElementById("cell" + x + y);
}
// Checks If Grid Is Already Clicked
function clickCell(x, y) {
    if (grid[x][y] > 0) {
        Swal.fire({
            title: 'Cheating Detected',
            text: 'No Cheating!!!',
            type: 'Cheat',
            confirmButtonText: "Okay, I'll Behave"
        })
    }
    // Box Clicks
    else {
        var move = document.getElementById("cell" + x + y);

        if (currentPlayer === 1) {
            move.style.color = "#f8f1f2";
            move.innerHTML = "O";
            oMoves.push([x, y]);
            grid[x][y] = 1;
            currentPlayer = 2;
        } else if (currentPlayer === 2) {
            move.style.color = "#E2C290";
            move.innerHTML = "X";
            xMoves.push([x, y]);
            grid[x][y] = 2;
            currentPlayer = 1;
        }
        
    }
}

function reset() {
    location.reload();
}