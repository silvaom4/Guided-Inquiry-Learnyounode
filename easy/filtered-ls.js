const fs = require('fs')

// fs.readdir(process.argv[2],'utf8', (error, list) => {
//     if(error) {
//         throw error;
//     }else {
//         console.log(list.split('\n').length-1);
//     }
// })

// fs.readdir(process.argv[2],'utf8', (error, list) => {
//     if(error) {
//         throw error;
//     }else {
//         const extension = process.argv[3]

//         // console.log(list.split('\n').length-1);
//         const filteredList = list.filter(file => {
//             const fileExtension = file.split('.').pop()
//             return fileExtension === extension
//         })
//         console.log(filteredList.length);
//     }

// })


// fs.readdir(process.argv[2], 'utf8', (error, list) => {
//   if (error) {
//     throw error;
//   } else {
//     const fileExtension = process.argv[3];

//     const filteredFiles = list.filter(file => {
//       const extension = file.split('.').pop();
//       return extension === fileExtension;
//     });

//     console.log(filteredFiles.length);
//   }
// });

// fs.readdir(process.argv[2], (error, list) => {
//     if(error) {
//         throw error;
//     }

//     list.forEach((file) => {
//         if(file.endsWith(process.argv[3])){
//             console.log(file);
//         }
//     })


// })

// const directoryPath = process.argv[2];
// const fileExtension = process.argv[3];

// fs.readdir(directoryPath, (error, files) => {
//   if (error) {
//     throw error;
//   }

//   const filtered = files.filtered(file => file.endsWith('.' + fileExtension));

//   filtered.forEach(file => {
//     console.log(file);
//   })


// });


if (process.argv.length < 4) {
    console.error('Missing directory name and file extension as command-line arguments.');
    process.exit(1);
  }

  const directoryName = process.argv[2];
   const fileExtension = process.argv[3];

   fs.readdir(directoryName, (err, files) => {
    if (err) {
      console.error('Error reading the directory:', err);
      process.exit(1);
    }

    // Filter the files based on the file extension
    const filteredFiles = files.filter(file => file.endsWith(`.${fileExtension}`));

    // Print the filtered files
    filteredFiles.forEach(file => console.log(file));
  });


  //

  const fs = require('fs')
  const path = require('path')
  
  const folder = process.argv[2]
  const ext = '.' + process.argv[3]
  
  fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
      if (path.extname(file) === ext) {
        console.log(file)
      }
    })
  })
