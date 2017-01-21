var fs = require("fs");
var helpers = require("../helpers.js");

module.exports = {
    subArray: function(){
        var input = helpers.readInput();
        if(typeof input === "object")
            helpers.writeOutput(input.toNumArray());
        else{
            console.time("program");
            var array = input.toNumArray();
            var output = findMaxSubArray(array, 0, array.length - 1);
            console.timeEnd("program");
            helpers.writeOutput(output);
        }
    }
};

function findMaxSubArray(array, low, high) {
    if(low === high)
        return array[low];
    else{
        var mid = Math.floor((low+high)/2);
        var left = findMaxSubArray(array, low, mid);
        var right = findMaxSubArray(array, mid+1, high);
        var cross = findMaxCrossingSubArray(array, low, mid, high);

        if(left.sum >= right.sum && left.sum >= cross.sum) return left;
        else if(right.sum >= left.sum && right.sum >= cross.sum) return right;
        else return cross;
    }
}

function findMaxCrossingSubArray(array, low, mid, high) {
    var leftSum = -Infinity, 
        rightSum = -Infinity,
        sum = 0,
        maxLeft,
        maxRight;

    for(var i=mid; i>=low; i--){
        sum += array[i];
        if(sum > leftSum){
            leftSum = sum;
            maxLeft = i;
        }
    }

    sum = 0;
    for(var j=mid+1; j<high; j++){
        sum += array[j];
        if(sum > rightSum){
            rightSum = sum;
            maxRight = j;
        }
    }

    return {
        low: maxLeft,
        high: maxRight,
        sum: leftSum + rightSum
    };
}