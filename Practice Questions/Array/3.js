// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    var arr1 = userInput[0].split(' ').map(Number)
    var arr2 = userInput[1].split(' ').map(Number)
    var arr3 = userInput[2].split(' ').map(Number)
    
    arr2.sort(function(a,b){return a-b})
    arr3.sort(function(a,b){return b-a})
    console.log((arr2.concat(arr3)).join(' '))
});