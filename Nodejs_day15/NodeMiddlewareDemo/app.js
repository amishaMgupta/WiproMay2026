const http = require('http');
// Middleware function
const logger = require("./loggers/logger");
const auth = require("./loggers/auth");


// API Handler
function hadleRequest(req,res){
    if(req.url ==='/' && req.method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Home API");

    }       
    else if(req.url ==='/users' && req.method === 'GET'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(
            JSON.stringify({
                id:1,
                name:'John Doe'
            })
        );
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end("Not Found");
    }
}

// Middleware Execution
function middleware(req,res){
    logger(req,res,() =>{
        auth(req,res,() =>{
        hadleRequest(req,res);
    });
})
}
// const server = http.createServer((req,res) =>{
//     if(req.url ==='/'){
//         res.end("Home")
//     }
//     else if(req.url ==='/about'){
//         res.end("About")
//     }
//     else{
//         res.end("Error")
//     }
// });

const server = http.createServer(middleware);
server.listen(8080,(req,res)=>{
    console.log("Server is runnig");
});