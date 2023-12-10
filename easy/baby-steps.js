//console.log(process.argv);


// function findSum(argv){
// let count = 0;
// let arr = []

// for (let i = argv[3]; i < argv.length; i++){
//     //count += i
//     // console.log(argv[i]);
//     // count = count + parseInt(Number(argv[i]))-- works
//     count = count + Number(argv[i])//-- works 
//     //arr.push(argv[i])

// }

// // for (let i = 0; i < 10; i++){
// //     count =+ i
// // }
// return count

// }

// console.log(findSum(process.argv));







//console.log(process.argv);

function findSum(argv) {
    let count = 0;

    for (let i = 2; i < argv.length; i++){
        count+= parseInt(Number(argv[i]))
    }

    return count
}

console.log(findSum(process.argv));