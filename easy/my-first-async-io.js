const fs = require('fs')


//const buffer = fs.readFileSync(process.argv[2])

//const string = buffer.toString().split('\n').length - 1

fs.readFile(process.argv[2],'utf8', (error, data) => {
    if(error) {
        throw error
    } else {
        console.log(data.split('\n').length-1)
    }
})

//Possible answer
// const fs = require('fs')
// const file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   if (err) {
//     return console.log(err)
//   }
//   // fs.readFile(file, 'utf8', callback) can also be used
//   const lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })