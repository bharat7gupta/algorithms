var helpers = require("../helpers.js");

module.exports = {
    buildMaxHeap: buildMaxHeap,
    buildMinHeap: buildMinHeap,
    maxHeapify: maxHeapify,
    minHeapify: minHeapify,
    leftChildIndex: leftChildIndex,
    rightChildIndex: rightChildIndex,
    parentIndex: parentIndex
}

function buildMaxHeap(array) {
    var lastIndex = Math.floor(array.length/2);
    for(var i=lastIndex; i>=0; i--){
        maxHeapify(array, i);
    }
}

function buildMinHeap(array) {
    var lastIndex = Math.floor(array.length/2);
    for(var i=lastIndex; i>=0; i--){
        minHeapify(array, i);
    }
}

function maxHeapify(array, index) {
    var left = leftChildIndex(array, index);
    var right = rightChildIndex(array, index);
    var largest = index;

    if(left<array.heapSize && array[left] > array[index]) // if left child is largest
        largest = left;
    if(right<array.heapSize && array[right] > array[largest]) // if right child is largest
        largest = right;

    if(largest !== index){ // "float-down" the parent if it is already not the largest
        array.swap(index, largest);
        maxHeapify(array, largest);
    }
}

function minHeapify(array, index) {
    var left = leftChildIndex(array, index);
    var right = rightChildIndex(array, index);
    var smallest = index;

    if(left<array.heapSize && array[left] < array[index]) // if left child is smallest
        smallest = left;
    if(right<array.heapSize && array[right] < array[smallest]) // if right child is smallest
        smallest = right;

    if(smallest !== index){ // "float-down" the parent if it is already not the smallest
        array.swap(index, smallest);
        minHeapify(array, smallest);
    }
}

function leftChildIndex(array, index) {
    return 2*index + 1;
}

function rightChildIndex(array, index) {
    return 2*index + 2;
}

function parentIndex(array, index) {
    return Math.floor(index/2);
}