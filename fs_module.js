const fs = require('fs');
// // Reading the json file
const file = fs.readFileSync('./data.json')
console.log(file)
// // Deserializing the returned value
const data = JSON.parse(file)
console.log(data)
// // changing the data
data.rating = 5
// // rewriting the file
fs.writeFileSync('./data.json', JSON.stringify(data))
fs.readFile('./data.json', (error, file) => {
    const data = JSON.parse(file)
    console.log(data)
    data.rating = 6
    fs.writeFile('./data.json', JSON.stringify(data), () => {
        console.log('file rewritten...')
    })
})