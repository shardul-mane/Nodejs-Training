

//  example of buffer how words it pre defines the size 
// of buffer as per the length of out input string
//  if over write then it will not take extra size letters
// example by techinical thapa if we wanted send file of 2 tb from pc1 with 8 gb ram to pc2 16 gb ram 


const buffer =  new Buffer.from("shardul");


buffer.write("maneshardul")

console.log(buffer.toString());
console.log(buffer.toJSON());

console.log(buffer)

// different example 

const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('largeFile.txt');

// Listen for the 'data' event, which emits chunks of data
readableStream.on('data', (chunk) => {
    console.log('Received a chunk of data:', chunk);
});

// Listen for the 'end' event, when all the data has been read
readableStream.on('end', () => {
    console.log('Finished reading the file.');
});

