module.exports = {
    buildMaxHeap: buildMaxHeap,
    buildMinHeap: buildMinHeap,
    maxHeapify: maxHeapify,
    minHeapify: minHeapify
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
    var left = 2*index + 1;
    var right = 2*index + 2;
    var largest = index;

    if(left<array.heapSize && array[left] > array[index]) // if left child is largest
        largest = left;
    if(right<array.heapSize && array[right] > array[largest]) // if right child is largest
        largest = right;

    if(largest !== index){ // "float-down" the parent if it is already not the largest
        swap(array, index, largest);
        maxHeapify(array, largest);
    }
}

function minHeapify(array, index) {
    var left = 2*index + 1;
    var right = 2*index + 2;
    var smallest = index;

    if(left<array.heapSize && array[left] < array[index]) // if left child is smallest
        smallest = left;
    if(right<array.heapSize && array[right] < array[smallest]) // if right child is smallest
        smallest = right;

    if(smallest !== index){ // "float-down" the parent if it is already not the smallest
        swap(array, index, smallest);
        minHeapify(array, smallest);
    }
}

function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}