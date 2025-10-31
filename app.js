const http = require('http');
const fs = require('fs')

// ------------server creating--------------

// const server = http.createServer((req,res) => {
//     // console.log("req made from" + req.url);
//     res.writeHead(200, {'content-type' : 'text/plain'})
//     res.end('Hey umang')
// })
// server.listen(3000,'127.0.0.1')
// console.log("server on port 3000");

// --------------Read write file------------

// fs.writeFileSync('ReadMe.txt',"hello node js this is my first file which i am creating with fs module")
// const read = fs.readFileSync('./ReadMe.txt','utf-8')
// console.log(read)

//--------------file Stream buffer-----------

const myReadStream = fs.createReadStream('./ReadMe.txt', 'utf-8')
const myWritStream = fs.createWriteStream('./WriteMe.txt')

// myReadStream.on('data', function(chunk){
//     console.log('new chunk');
//     console.log(chunk)
//     myWritStream.write(chunk)
// })  

// ---------------pipes----------------

myReadStream.pipe(myWritStream) //it can make easy compare to above
//both things are same one file read and then data is write in new file 