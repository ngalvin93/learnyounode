// const input = process.argv;
var sum = 0;
for (i=2; i<process.argv.length;i++) {
    sum +=  Number(process.argv[i]);
}
console.log(sum);

// solution
// var result = 0

// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)