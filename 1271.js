const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(item => BigInt(item))

var money = input[0]
var count = input[1]
console.log((money/count).toString())
console.log((money%count).toString())

