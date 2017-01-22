var heap = require("./heap.js");
var helpers = require("../helpers.js");

module.exports = {
    buildPriorityQueue: buildPriorityQueue,
    heapMax: heapMax,
    heapExtractMax: heapExtractMax,
    heapIncreaseKey: heapIncreaseKey,
    maxHeapInsert: maxHeapInsert
};

function buildPriorityQueue(array) {
    heap.buildMaxHeap(array);
}

function heapMax(array) {
    return array[0];
}

function heapExtractMax(array) {
    var max = array[0];
    array[0] = array[array.heapSize - 1];
    array.heapSize--;
    heap.maxHeapify(array, 0);
    return max;
}

function heapIncreaseKey(array, index, key) {
    if(key < array[index])
        throw "new key is smaller than current key";

    array[index] = key;
    while(index>0 && array[heap.parentIndex(array, index)] < array[index]){
        var pIndex = heap.parentIndex(array, index);
        array.swap(pIndex, index);
        index = pIndex;
    }
}

function maxHeapInsert(array, key) {
    array.heapSize--;
    array.push(-Infinity);
    heapIncreaseKey(array, array.heapSize - 1, key);
}