const http = require("http");
const fs = require("fs");

// ------------server creating--------------

// const server = http.createServer((req, res) => {
// console.log("req made from" + req.url);

//------serve HTML

//   res.writeHead(200, { "content-type": "text/html" });
//   const myReadStream = fs.createReadStream("./index.html");
//   myReadStream.pipe(res);

//-------serve JSon

// res.writeHead(200, { "content-type": "application/json" });
// const myObj = {
//     name:'umang',
//     lName:'dhandhukiya',
//     age:10,
// }

// res.end(JSON.stringify(myObj))
// });
// server.listen(3000, "127.0.0.1");
// console.log("server on port 3000");

// --------------Read write file------------

// fs.writeFileSync('ReadMe.txt',"hello node js this is my first file which i am creating with fs module")
// const read = fs.readFileSync('./ReadMe.txt','utf-8')
// console.log(read)

//--------------file Stream buffer-----------

// const myReadStream = fs.createReadStream("./ReadMe.txt", "utf-8");
// const myWritStream = fs.createWriteStream("./WriteMe.txt");

// myReadStream.on('data', function(chunk){
//     console.log('new chunk');
//     console.log(chunk)
//     myWritStream.write(chunk)
// })

// ---------------pipes----------------

// myReadStream.pipe(myWritStream); 
//it can make easy compare to above
//both things are same one file read and then data is write in new file


//---------------Routing---------------

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url === "/home" || req.url === "/"){
        res.writeHead(200,{"content-type" : "text/html"})
        fs.createReadStream("./index.html").pipe(res)
    } else if(req.url === "/api/call"){
        res.writeHead(200,{"content-type" : "application/json"})
        const myObj = [{name : 'umang',age : 20},{name : 'umang',age : 21},{name : 'umang',age : 22}]
        res.end(JSON.stringify(myObj))
    } else {
         res.writeHead(200,{"content-type" : "text/html"})
        fs.createReadStream("./error.html").pipe(res)
    }
})

server.listen(3000, "127.0.0.1");
console.log("server on port 3000");