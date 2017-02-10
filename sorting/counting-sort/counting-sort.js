var fs = require("fs");
var helpers = require("../../helpers.js");

module.exports = {
    sort: function() {
        var input = helpers.readInput();
        if(typeof input === "object")
            helpers.writeOutput(input.toNumArray());
        else{
            console.time("program");
            var output = countingSort(input.toNumArray(), 10);
            console.timeEnd("program");
            helpers.writeOutput(output);
        }
    }
};

function countingSort(array, maxRange) {
    var output = new Array(array.length);
    var count = new Array(maxRange); // keeps the count of individual numbers in array

    for(var i=0; i<maxRange; i++)
        count[i] = 0;
    for(var i=0; i<array.length; i++)
        count[array[i]]++;
    for(var i=1; i<maxRange; i++)
        count[i] = count[i] + count[i-1]; // evaluates the running total of numbers less than or equal to the current index. 

    for(var j=array.length-1; j>=0; j--){
        var pos = count[array[j]]; // position of array[j] in the sorted sequence
        output[pos] = array[j]; // places the element in its sorted position
        // some comment
        count[array[j]]--;
    }

    return output;
}