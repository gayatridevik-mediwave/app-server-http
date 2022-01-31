// const fs = require('fs');

// fs.readFile("content.txt", "utf8", (error, data) => {
//     if (error) {
//         console.log("error");
//         console.log(error);
//     } else {
//         console.log(data);
//     }

// });

const http = require('http');
const port = 8080;

function logger(req) {
    console.log(`${new Date().toISOString()}- ${req.url} : ${req.method}`);
}
const server = http.createServer(function (req, res) {
    logger(req);
    const html = "<h1>hello world</h1>";
    const json = {
        message: "hello world!",
    }
    res.setHeader("content-type", "application/json");
    // res.setHeader("content-type", "text/html");
    res.write(JSON.stringify(json));
    res.end();
});

console.log(`server running on ${port}`);
server.listen(port);