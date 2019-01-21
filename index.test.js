console.log('tst');
const { TicTacToeGame } = require('./index');
var assert = require('assert');

let len = 9;
let arr = [0,1,2,3,4,5,6,7,8];
let tictactoeObj = new TicTacToeGame();
describe('Checking with matrix', () => {

it('should check the matrix length', () => {
    console.log("checking")
     let res = tictactoeObj.makeArray(len);
    assert.equal(res.length , len);

    });

it ('should check the matrix initialization', () => {
    let res = tictactoeObj.makeArray(len);
    let count = 0;
    for(let i = 0; i < len ; i++)
    {
            if (res [i]== i)
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
             x = 7;
             console.log(x)
            assert.equal(tictactoeObj.checkInput(arr,x,len),true);
     });

     it('should check the user inputs is greater than the matrix boundary', () => {
         x = 100;
         assert.equal(tictactoeObj.checkInput(arr,x,len),false);
     });


     it('should check the user inputs is working for negative values', () => {
        x = -1;
        assert.equal(tictactoeObj.checkInput(arr,x,len),false);
    });


});


describe('winning status', () => {
    it ('should check the winner status of player1', () => {
        assert.equal(tictactoeObj.winnerCheck([1,4,7],'x'),'player 1');
    });
    it ('should check the winning status of player2', () => {
        assert.equal(tictactoeObj.winnerCheck([2,5,8],'o'), 'player 2');
    });
});




