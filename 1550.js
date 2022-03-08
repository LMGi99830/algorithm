const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(item => parseInt(item, 16))

var number = input[0]
console.log(number)