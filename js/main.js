var currentPlayer;
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: true,
})

swalWithBootstrapButtons.fire({
    title: 'What letter is playing first?',
    text: "Choose a letter.",
    type: 'question',
    showCancelButton: true,
    confirmButtonText: 'O',
    cancelButtonText: 'X',
    reverseButtons: true
}).then(result => {if (result.value === true) {
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
    ['td#cell00', 'td#cell01', 'td#cell02'], // Top Row
    ['td#cell10', 'td#cell11', 'td#cell12'], // Middle Row
    ['td#cell20', 'td#cell21', 'td#cell22'], // Bottom Row
    ['td#cell00', 'td#cell11', 'td#cell22'], // Diagnoally from the top-left
    ['td#cell02', 'td#cell11', 'td#cell20'], // Diagnoally from the top-right
    ['td#cell00', 'td#cell10', 'td#cell20'], // Left Column
    ['td#cell01', 'td#cell11', 'td#cell21'], // Middle Column
    ['td#cell02', 'td#cell12', 'td#cell22'] // Right Column 
]
var xMoves = [];
var oMoves = [];

for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
        grid[i][j] = 0;
    }
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
            xMoves.push(move);
            grid[x][y] = 1;
            currentPlayer = 2;
            console.log('X Moves: ', xMoves);
            console.log('if: ', currentPlayer);

        } else if (currentPlayer === 2) {
            move.style.color = "#E2C290";;
            move.innerHTML = "X";
            oMoves.push(move);
            grid[x][y] = 2;
            currentPlayer = 1;
            console.log('O Moves: ', oMoves);
            console.log('Else: ', currentPlayer);
        }
        console.log('Win: ', move.textContent);

    }
}

function reset() {
    location.reload();
}