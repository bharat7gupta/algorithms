var fs = require("fs");
var helpers = require("../../helpers.js");

module.exports = {
    sort: function(){
        var input = helpers.readInput();
        if(typeof input === "object")
            helpers.writeOutput(input.toNumArray());
        else{
            //console.time("program");
            var output = insertionSort(input.toNumArray());
            //console.timeEnd("program");
            helpers.writeOutput(output);
        }
    }
};

function insertionSort(array) {
    var key, i;
    
    for(var j=1; j<array.length; j++){
        key = array[j];
        i = j - 1;
        while(i >= 0 && array[i]>key){
            array[i + 1] = array[i];
            i = i - 1;
        }
        array[i + 1] = key;
    }

    return array;
}