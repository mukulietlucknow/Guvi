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
  var data = {}
  const len = Number(userInput[0])
  const arr = userInput[1].split(' ').map(Number)
  for(const num of arr){
      if (data[num]){
          data[num] += 1
      }else{
          data[num] = 1
      }
  }
  
  var sortable = [];
    for (var index in data) {
        sortable.push([index, data[index]]);
    }
    
    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });
  
  var str = ''
  
  for (const datum of sortable){
      str += datum[0]+' '
  }
  console.log(str.trim())
  
});