module.exports = {
    readInput: readInput,
    writeOutput: writeOutput
}

function readInput(){
    var text = fs.readFileSync("./input.txt");
    return text.toString();
}

function writeOutput(data){
    fs.writeFile("./output.txt", JSON.stringify(data, null, 2));
}