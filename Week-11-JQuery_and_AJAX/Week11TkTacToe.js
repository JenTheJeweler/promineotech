// Using any of the tools you've worked with so far, 
// create a game of Tic-Tac-Toe.
// Create a Tic-Tac-Toe game grid using your HTML 
// element of choice.
// When a cell in the grid is clicked, an X or O 
// should appear in that spot depending on whose turn it is.
// A heading should say whether it is X's or O's 
// turn and change with each move made.
// A button should be available to clear the grid and restart the game.
// When a player has won, or the board is full and the game results in
// a draw, a Bootstrap alert or similar Bootstrap component should 
// appear across the screen announcing the winner.

//      Steps for Tic Tac Toe

//      1- Build the grid -done in CSS
//      2- Reference which cell was clicked
//      3- Make sure cell is empty
//      4- Put X or O in cell
//      5- Store existing choices in array (state of the grid) 
//      6- Check if winner (use array of winning combinations - array of arrays)
//      7- If winner, display winning message ("X Wins or O Wins")
//      8- Have reset button - reset game

// 
$(document).ready(function() {
    // Constants to represent player symbols
    const PLAYER_X = 'X';
    const PLAYER_O = 'O';

    let currentPlayer = PLAYER_X; // Player X starts
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    // Function to update the game status text
    function updateGameStatus() {
        const statusElement = $('#game-status');
        statusElement.text(`${currentPlayer}'s Turn`);
    }

    // Function to handle a cell click
    function handleCellClick(event) {
        const cell = event.target;
        const cellIndex = $(cell).data('index');

        if (gameBoard[cellIndex] === '' && gameActive) {
            gameBoard[cellIndex] = currentPlayer;
            cell.textContent = currentPlayer;
            $(cell).addClass('occupied');

            if (checkWin() === true) {
                // Player has won
                $('#game-status').text(`${currentPlayer} Wins!`);
                gameActive = false;
            } else if (gameBoard.indexOf('') === -1) {
                // It's a draw
                $('#game-status').text('It\'s a Draw!');
                gameActive = false;
            } else {
                currentPlayer = (currentPlayer === PLAYER_X) ? PLAYER_O : PLAYER_X;
                updateGameStatus();
            }
        }
    }

    // Function to check if a player has won
    function checkWin() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return true;
            }
        }

        return false;
    }

    // Function to restart the game
    function restartGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer = PLAYER_X;

        // Clear the board
        $('.cell').removeClass('occupied').text('');

        // Update game status
        updateGameStatus();
    }

    // Add click event handlers
    $('#game-container').on('click', '.cell', handleCellClick);
    $('#restart-button').click(restartGame);

    // Initial game status
    updateGameStatus();
});




