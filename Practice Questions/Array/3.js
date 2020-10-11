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
    var len = Number(userInput[0])
    var sum = 0
    const arr = userInput[1].split(' ').map(Number)
    let left_arr = new Array(arr.length)
    let right_arr = new Array(arr.length)
    left_arr[0] = Number.NEGATIVE_INFINITY
    right_arr[len-1] = Number.NEGATIVE_INFINITY
    
    for (var i =1 ; i < len ; i++){
        left_arr[i] = Math.max(left_arr[i-1], arr[i-1])
    }

    for (var i = len-2 ; i >= 0 ; i--){
        right_arr[i] = Math.max(right_arr[i+1], arr[i+1])
    }

    console.log(left_arr, right_arr)
    
    
});