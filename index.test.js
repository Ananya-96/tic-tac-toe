const { makeArray } = require('./index');


describe('Checking with matrix', () => {

it('should check the matrix length', () => {
    let width = 3, height = 3;
    let res = makeArray(width, height);
    if (res.length * res[0].length !== (width * height)) 
    throw new Error(`Excepted ${width*height} but got ${res.length * res[0].length}`);
});

it ('should check the matrix initialization', () => {
    let width = 3, height = 3;
    let res = makeArray(width, height);
    let count = 0;
    for(let i = 0; i < height ; i++) {
        for(let j = 0; j < width; j++){
            if (res [i][j] == 0)
                count ++;
            else
                break;
        }
    }
    if (count !== (width*height))
       throw new Error (`Excepted ${width*height} but got ${count}`);
});
});
