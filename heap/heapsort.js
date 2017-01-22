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
        array.swap(0, i); // we take out the first element and place it at the end of array, since it is the highest.
        array.heapSize--; // the highest value is no longer considered to be a part of the heap
        heap.maxHeapify(array, 0);
    }
}