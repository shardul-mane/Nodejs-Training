

//   http it is use for handled the client request and server Response 
//   it provied  methodes and propertys for http request and repsonse  to build thre rest api and web pages 

// Raw HTTP server (no Express)


const http = require('http');




const server = http.createServer((req,res)=>{
    if(req.url == "/home"){
        res.write("this an home page ");
        res.end();
    }

})
let PORT = 8000;

server.listen(PORT,()=>{
    console.log("server is running on 8000")
})