module.exports = {
    readInput: readInput,
    writeOutput: writeOutput
}

function readInput(){
    var text = fs.readFileSync("./input.txt");
    return text.toString();
}

function writeOutput(data){
    if(data.isArray())
        data = data.join(" ");
    else
        data = JSON.stringify(data, null, 2).replace(/\"/g, "");
    fs.writeFile("./output.txt", data);
}

String.prototype.toNumArray = function() {
    return this.split(" ").map(Number);
}

String.prototype.toArray = function() {
    return this.split(" ");
}

Object.prototype.isArray = function() {
    return Object.prototype.toString.call(this) === '[object Array]';
}