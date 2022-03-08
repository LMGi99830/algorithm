const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(item=>parseInt(item))

  var number1 = input[0]
  var number2 = input[1]
  console.log(number1 + number2)