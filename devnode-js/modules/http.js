const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Bem-vindo à página inicial!</h1>');
    }

    if(req.url === '/users'){
        const users = [
            { name: 'Jade', age: 25 },
            { name: 'João', age: 30 },
            { name: 'Maria', age: 28 }
        ];

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));