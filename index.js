var readline = require("readline-sync");
class TicTacToeGame {
    makeArray(row, column) {
        var matrixArray = [];
        for (var i = 0; i < row; i++) {
            matrixArray[i] = [];
            for (var j = 0; j < column; j++) {
                matrixArray[i][j] = '-';
            }
        }
        return matrixArray;
    }

    startGame() {
        let tictactoe = [];
        let width = 3, height = 3;
        tictactoe = makeArray(width, height);
        for (var i = 0; i < (width * height); i++) {
            var x;
            var y;

            if (i % 2 == 0) {
                console.log("Enter x and y of player 1")
                x = readline.question("enter x coordinate ");
                y = readline.question("enter y coordinate ");
                if (!checkInput(tictactoe, x, y, width, height)) {
                    i--;
                    continue;
                }
                tictactoe = initSymbol(tictactoe, x, y, "x")
                console.log(tictactoe);

            }
            else {
                console.log("Enter x and y of player 2 ")
                x = readline.question("enter x coordinate ");
                y = readline.question("enter y coordinate ");
                if (!checkInput(tictactoe, x, y, width, height)) {
                    i--;
                    continue;
                }
                tictactoe = initSymbol(tictactoe, x, y, "o")
                console.log(tictactoe);
            }

        }

    }

    initSymbol(arr, x, y, symbol) {
        arr[x][y] = symbol;
        return arr;

    }

    checkInput(arr, x, y, width, height) {
        if (x > width - 1 && y > height - 1) {
            console.log("coordinates out of matrix range")
            console.log("Please enter again")
            return false;
        }
        if (arr[x][y] != 0) {
            console.log("This coordinates has already filled by the values")
            console.log("Please enter again")
            return false;
        }

        return true;
    }
}

module.exports = { TicTacToeGame };

