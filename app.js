import http from 'http';
import fs from 'fs';

const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/info':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream('./index.html').pipe(res);
            break;
        default:
            res.write('Hello, World!');
            res.end();
    }
});

server.listen(port);