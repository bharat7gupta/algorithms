var fs = require("fs");
var helpers = require("../../helpers.js");

module.exports = {
    sort: function() {
        var input = helpers.readInput();
        if(typeof input === "object")
            helpers.writeOutput(input.toNumArray());
        else{
            console.time("program");
            var array = input.toNumArray();
            quickSort(array, 0, array.length - 1);
            console.timeEnd("program");
            helpers.writeOutput(array);
        }
    }
};

function quickSort(array, start, end) {
    if(start < end) {
        var pos = partition(array, start, end);
        quickSort(array, start, pos - 1);
        quickSort(array, pos + 1, end);
    }
}

function partition(array, pos, right) {
    var x = array[right];
    var i = pos - 1;

    for(var j=pos; j<right; j++) {
        if(array[j] <= x) {
            i++;
            array.swap(i, j);
        }
    }
    array.swap(i+1, right);
    return i + 1;
}