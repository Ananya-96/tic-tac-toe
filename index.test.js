const { TicTacToeGame } = require('./index');
var assert = require('assert');

let width = 3, height = 3;
let arr = [["-","-","-"],["-","-","-"],["-","-","-"]];
let tictactoeObj = new TicTacToeGame();
describe('Checking with matrix', () => {

it('should check the matrix length', () => {
    console.log("checking")
     let res = tictactoeObj.makeArray(width, height);
    assert.equal(res.length * res[0].length,(width * height));

});

it ('should check the matrix initialization', () => {
    let res = tictactoeObj.makeArray(width, height);
    let count = 0;
    for(let i = 0; i < height ; i++) {
        for(let j = 0; j < width; j++){
            if (res [i][j] == '-')
                count ++;
            else
                break;
        }
    }
    assert.equal(count,(width * height));
});
});

describe('Checking user inputs boundary conditions', () => {
     let x , y;
    it ('should check the user values is less than the matrix boundary', () => {
             x = 2, y = 1;
             console.log(x + " " + y)
            assert.equal(tictactoeObj.checkInput(arr,x,y,width,height),true);
     });

     it('should check the user inputs is greater than the matrix boundary', () => {
         x = 100, y = 9;
         assert.equal(tictactoeObj.checkInput(arr,x,y,width,height),false);
     });

});





