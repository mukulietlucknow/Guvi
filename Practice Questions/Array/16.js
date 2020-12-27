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
    let arr = userInput[1].split(' ').map(Number)
    let result = 0
    for (var i  = 0 ; i < 32 ; i++){
        x = (1 << i)
        let sum = 0
        for (var j = 0; j < arr.length ; j++){
            if (arr[j] & x){
                sum += 1
            }
        }
        
        if (sum%3 !== 0){
            result = result | x
        }
    }
    console.log(result)
});