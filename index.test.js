const { TicTacToeGame } = require('./index');
var assert = require('assert');

<<<<<<< HEAD
let len = 9;
let arr = [["-","-","-"],["-","-","-"],["-","-","-"]];
let tictactoeObj = new TicTacToeGame();
describe('Checking with matrix', () => {

it('should check the matrix length', () => {
    console.log("checking")
     let res = tictactoeObj.makeArray(len);
    assert.equal(res.length * res[0].length,(len));
=======
let width = 3, height = 3;
let arr = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
let tictactoeObj = new TicTacToeGame();
describe('Checking with matrix', () => {

    it('should check the matrix length', () => {
        let res = tictactoeObj.makeArray(width, height);
        assert.equal(res.length * res[0].length, (width * height));
>>>>>>> 5d89d9c6d0d41d5eba80896258c133af09eed987

    });

<<<<<<< HEAD
it ('should check the matrix initialization', () => {
    let res = tictactoeObj.makeArray(len);
    let count = 0;
    for(let i = 0; i < len ; i++)
    {
            if (res [i]== '-')
                count ++;
            else
                break;
        
    }
    assert.equal(count,(len));
});
});

describe('Checking user inputs boundary conditions', () => {
     let x ;
    it ('should check the user values is less than the matrix boundary', () => {
             x = 2;
             console.log(x)
            assert.equal(tictactoeObj.checkInput(arr,x,len),true);
     });

     it('should check the user inputs is greater than the matrix boundary', () => {
         x = 100;
         assert.equal(tictactoeObj.checkInput(arr,x,len),false);
     });
=======
    it('should check the matrix initialization', () => {
        let res = tictactoeObj.makeArray(width, height);
        let count = 0;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (res[i][j] == '-')
                    count++;
                else
                    break;
            }
        }
        assert.equal(count, (width * height));
    });
});

describe('Checking user inputs boundary conditions', () => {
    let x, y;
    it('should check the user values is less than the matrix boundary', () => {
        x = 2, y = 1;
        assert.equal(tictactoeObj.checkInput(arr, x, y, width, height), true);
    });

    it('should check if width is less than 0', () => {
        x = -2, y = 1;
        assert.equal(tictactoeObj.checkInput(arr, x, y, width, height), false);
    });

    it('should check if height is less than 0', () => {
        x = 2, y = -1;
        assert.equal(tictactoeObj.checkInput(arr, x, y, width, height), false);
    });

    it('should check if user values is less than 0', () => {
        x = -2, y = -1;
        assert.equal(tictactoeObj.checkInput(arr, x, y, width, height), false);
    });

    it('should check if width is greater than the matrix boundary', () => {
        x = 100, y = 0;
        assert.equal(tictactoeObj.checkInput(arr, x, y, width, height), false);
    });

    it('should check if width is greater than the matrix boundary', () => {
        x = 100, y = 0;
        assert.equal(tictactoeObj.checkInput(arr, x, y, width, height), false);
    });

    it('should check if height is greater than the matrix boundary', () => {
        x = 0, y = 9;
        assert.equal(tictactoeObj.checkInput(arr, x, y, width, height), false);
    });

    it('should check if the user values is greater than the matrix boundary', () => {
        x = 0, y = 9;
        assert.equal(tictactoeObj.checkInput(arr, x, y, width, height), false);
    });
>>>>>>> 5d89d9c6d0d41d5eba80896258c133af09eed987


     it('should check the user inputs is working for negative values', () => {
        x = -1;
        assert.equal(tictactoeObj.checkInput(arr,x,len),false);
    });


});





