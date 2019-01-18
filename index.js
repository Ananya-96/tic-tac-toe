function makeArray(row, column) {
    var matrixArray = [];
    for(i = 0; i < row; i++) {
        matrixArray[i] = [];
        for(j = 0; j < column; j++) {
            matrixArray[i][j] = 0;
        }
    }
    return matrixArray;
}
console.log(makeArray(3,3));
console.log("enter a row:");
console.log("enter the column:")