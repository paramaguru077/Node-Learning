const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title> Enter Form Details </title> </head>');
        res.write('<body><form action="/guru" method="POST"> <input type="text" name="message"/> <input type="submit" value="send"/> </form> </body>');
        res.write('</html>');
        res.end();
        return;  // Ensure no further code runs after sending this response
    }

    if(url==='/guru' && req.method  == 'POST'){
        fs.writeFileSync('hello.txt','Dummy');

        res.setHeader ('Location','/');
        res.statusCode = 302;
        return res.end();
    }

    // For other URLs, respond with a simple page
    
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title> Guru </title> </head>');
        res.write('<body><h1>Hello from Node.js</h1> </body>');
        res.write('</html>');
        res.end();
    
    
});

server.listen(3000);
