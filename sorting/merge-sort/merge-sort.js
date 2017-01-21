var fs = require("fs");
var helpers = require("../../helpers.js");

module.exports = {
    sort: function(){
        var input = helpers.readInput();
        if(typeof input === "object")
            helpers.writeOutput(input.toNumArray());
        else{
            console.time("program");
            var array = input.toNumArray();
            mergeSort(array, 0, array.length - 1);
            console.timeEnd("program");
            helpers.writeOutput(array);
        }
    }
};

function mergeSort(array, start, end) {
    if(start < end){
        var mid = Math.floor((start + end) / 2);
        mergeSort(array, start, mid);
        mergeSort(array, mid + 1, end);
        merge(array, start, mid, end);
    }
}

function merge(array, start, mid, end) {
    var iterations = end - start + 1, i=0, j=0;

    // copy the left and right block
    var leftArray = array.slice(start, mid + 1);
    var rightArray = array.slice(mid + 1, end + 1);

    // Add Infinity as sentinels (end of block)
    leftArray.push(Infinity);
    rightArray.push(Infinity);

    for(var k=start; k<=end; k++){
        if(leftArray[i] < rightArray[j]){
            array[k] = leftArray[i++];
        }else{
            array[k] = rightArray[j++];
        }
    }
}