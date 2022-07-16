const fs = require('fs')
// const book = {
//     title : 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data =  JSON.parse(dataJSON)
// console.log(data.author)

// /// We can use .author because the parseData is an object and that 
// // cannot be done on bookJSON as it is a string 
// const parsedData = JSON.parse(bookJSON)   
// console.log(parsedData.author)


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data =  JSON.parse(dataJSON)
const updateData = {
    name : 'Gurjot',
    planet : data.planet,
    age: '27'
}
const updateDataJSON = JSON.stringify(updateData)
fs.writeFileSync('1-json.json',updateDataJSON)
