const fs = require('fs')


//const arg = process.argv[2]

//const bufferData = fs.readFileSync('test.txt')
const bufferData = fs.readFileSync(process.argv[2])


const string = bufferData.toString().split('\n').length-1

console.log(string);


// function spaces(arg) {
//     let count = 0;
//     split = arg.trim().split(' ').join(' ')
//     for (let i = 0; i < split.length; i++) {
//         if (split[i] === ' ') {
//             count++
//         }
//     }
//     return count
// }

// console.log(spaces(string));