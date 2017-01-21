var fs = require("fs");
var helpers = require("../../helpers.js");

module.exports = {
    sort: function(){
        var input = helpers.readInput();
        if(typeof input === "object")
            helpers.writeOutput(input);
        else{
            console.time("program");
            var output = insertionSort(input);
            console.timeEnd("program");
            helpers.writeOutput(output);
        }
    }
};

function insertionSort(array) {
    return array;
}