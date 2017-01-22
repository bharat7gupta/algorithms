var fs = require("fs");
var helpers = require("../helpers.js");
var heap = require("./heap.js");

module.exports = {
    sort: function(){
        var input = helpers.readInput();
        if(typeof input === "object")
            helpers.writeOutput(input.toNumArray());
        else{
            console.time("program");
            var array = input.toNumArray();
            heapSort(array);
            console.timeEnd("program");
            helpers.writeOutput(array);
        }
    }
};

function heapSort(array) {
    array.heapSize = array.length;
    heap.buildMaxHeap(array);

    for(var i=array.length-1; i>=1; i--){
        // we take out the first element and place it at the end of array, since it is the highest.
        var temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        array.heapSize--;
        heap.maxHeapify(array, 0);
    }
}