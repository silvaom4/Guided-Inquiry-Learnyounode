const fs = require('fs')


fs.writeFileSync('planets.txt', 'mercury')

fs.appendFileSync('planets.txt',', venus')
fs.appendFileSync('planets.txt',', saturn')
fs.appendFileSync('planets.txt',', uranus')
fs.appendFileSync('planets.txt',', neptune')
fs.appendFileSync('planets.txt',', pluto')


// console.log(planets.txt)


const planetBuffer = fs.readFileSync('planets.txt')

// console.log(planetBuffer);

const planetString = planetBuffer.toString()

console.log(planetString);