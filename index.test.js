console.log('tst');
const { TicTacToeGame } = require('./index');
var assert = require('assert');

let width = 3, height = 3;
let arr = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
var len = 9;
let tictactoeObj = new TicTacToeGame();

describe('Checking with matrix', () => {
    
    it('should check the matrix length', () => {
        let res = tictactoeObj.makeArray(len);
        assert.equal(res.length , len);

    });

    it('should check the matrix initialization', () => {
        let res = tictactoeObj.makeArray(len);
        let count = 0;
        
            for (let j = 0; j < len; j++) {
                if (res[j] == j)
                    count++;
                else
                    break;
            }
        
        assert.equal(count, len);
    });
});

describe('Checking user inputs boundary conditions', () => {
    let x, y;
    it('should check the user values is less than the matrix boundary', () => {
        x = 2;
        assert.equal(tictactoeObj.checkInput(arr, x, len), true);
    });

    it('should check if width is less than 0', () => {
        x = -2;
        assert.equal(tictactoeObj.checkInput(arr, x, y, len), false);
    });

    it('should check if height is less than 0', () => {
        x = 2, y = -1;
        assert.equal(tictactoeObj.checkInput(arr, x, y, len), false);
    });

    it('should check if user values is less than 0', () => {
        x = -2, y = -1;
        assert.equal(tictactoeObj.checkInput(arr, x, y, len), false);
    });

    it('should check if width is greater than the matrix boundary', () => {
        x = 100, y = 0;
        assert.equal(tictactoeObj.checkInput(arr, x, y, len), false);
    });

    it('should check if width is greater than the matrix boundary', () => {
        x = 100, y = 0;
        assert.equal(tictactoeObj.checkInput(arr, x, y, len), false);
    });

    it('should check if height is greater than the matrix boundary', () => {
        x = 0, y = 9;
        assert.equal(tictactoeObj.checkInput(arr, x, y, len), false);
    });

    it('should check if the user values is greater than the matrix boundary', () => {
        x = 0, y = 9;
        assert.equal(tictactoeObj.checkInput(arr, x, y, len), false);
    });


     it('should check the user inputs is working for negative values', () => {
        x = -1;
        assert.equal(tictactoeObj.checkInput(arr,x,len),false);
    });


});





