var readline = require("readline-sync");
const resultArray = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8], [0, 1, 2]];
var xArray = [];
var yArray  = [];
class TicTacToeGame {
    makeArray(length) {
        var matrixArray = [];
        for (var i = 0; i < length; i++) {
            matrixArray[i] = i
        }
        this.printMatrix(matrixArray)
        return matrixArray;
    }

    startGame() {
        let tictactoe = [];
        let length = 9;
        let result =undefined;
        tictactoe = this.makeArray(length);
        for (var i = 0; i < length; i++) {
            var x;
            var symbol;
            if (i % 2 == 0) {
                console.log("Enter position of player 1");
                x = readline.question("enter position ");

                symbol = "x";
                if (!this.checkInput(tictactoe, x, length)) {
                    i--;
                    continue;
                }
                else {
                    xArray.push(x);
                }
                tictactoe = this.initSymbol(tictactoe, x, symbol)


            }
            else {
                console.log("Enter position of player 2 ");
                x = readline.question("enter position ");
                symbol = "o";

                if (!this.checkInput(tictactoe, x, length)) {
                    i--;
                    continue;
                }
                else {
                    yArray.push(x);
                }
                tictactoe = this.initSymbol(tictactoe, x, symbol)

            }

            this.printMatrix(tictactoe);
            result = this.compareCondition( symbol);
            if (result == "player 1" || result == "player 2") {
                //this.makeArray(9);
                var restart = readline.question("press y if you want to restart: ");
                if(restart == "y"){
                    xArray = [];
                    yArray = []
                    this.startGame();
                }
                break;
            }
        }
            if( i >= 8 ){
                var restart = readline.question("press y if you want to restart: ");
                if(restart == "y"){
                    xArray = [];
                    yArray = []
                    this.startGame();
                }
            }
            if ( i >= 8 && result ==undefined)
            {
                console.log('MATCH IS DRAW');
                return;
            }  
    }

    printMatrix(tictactoe) {
        for (let index = 0; index < tictactoe.length; index += 3) {
            var temp = "";
            for (let j = index; j < index + 3; j++) {
                temp = temp + tictactoe[j] + "      ";

            }
            console.log(temp)
            console.log();
        }
    }


    initSymbol(arr, x, symbol) {
        arr[x] = symbol;
        return arr;

    }

    checkInput(arr, x, length) {
        if ((x >= length - 1 || x <= -1) || x === '') {
            console.log("position out of matrix range")
            console.log("Please enter again")
            return false;
        }
        if (arr[x] == "x" || arr[x] == "o") {
            console.log("This coordinates has already filled by the values")
            console.log("Please enter again")
            return false;
        }

        return true;
    }

    compareCondition( symbol) {
        var res;
        if (symbol == "x") {
            res = this.winnerCheck(xArray, symbol);
        }
        else if (symbol == "o") {
            res = this.winnerCheck(yArray, symbol);
        }
        return res
    }

    checkArray(arr, ele) {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] == ele) {
                return true
            }
        }
        return false
    }




    winnerCheck(array, symbol) {
        var count = 0;
        var flag = 1;

        if (array.length >= 3) {
            for (let index = 0; index < resultArray.length; index++) {
                count = 0;
                flag = 1;
                for (let index1 = 0; index1 < array.length; index1++) {
                    var element = array[index1]
                    if (this.checkArray(resultArray[index], element))
                        count++;
                    if (count == 3) {
                        flag = 0;
                        break;
                    }
                }
                if (flag == 0) {
                    break;
                }
            }
        }
        if (symbol == "x" && count == 3) {
            console.log("PLAYER ONE IS THE WINNER");
            return "player 1";
        }
        else if (count == 3 && symbol == "o") {
            console.log("PLAYER TWO IS THE WINNER");
            return "player 2";
        }
    }
}

module.exports = { TicTacToeGame };

