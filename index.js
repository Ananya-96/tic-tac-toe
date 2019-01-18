function makeArray(w, h) {
    var matrixArray = [];
    for(i = 0; i < h; i++) {
        matrixArray[i] = [];
        for(j = 0; j < w; j++) {
            matrixArray[i][j] = 0;
        }
    }
    return matrixArray;
}
console.log(makeArray(3,3));