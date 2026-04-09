const express = require('express');
const UserModel = require('../src/models/user.model');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers['content-type']}`);
    console.log(`Date: ${new Date()}`);
    
    next();
});

// Para enviar uma view, página dos usuários
app.get('/views/users', async (req, res) => {
    const users = await UserModel.find({});
    res.render('index', { users });
});


app.get('/home', (req, res) => {
    res.contentType('application/html');
    res.status(200).send('<h1>Bem-vindo à página inicial!</h1>');
});

// Para acessar todos os usuários
app.get('/users', async (req, res) => {
    try{
        const users = await UserModel.find({});
        res.status(200).json(users);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
});

// Para Acessar o usuário pelo ID
app.get('/users/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await UserModel.findById(id);

        return res.status(200).json(user);
    }
    catch(error){ 
        return res.status(500).send(error.message);
    }
});

// Para criar um novo usuário
app.post('/users', async (req, res) => {
    try{
        const user = await UserModel.create(req.body);  
        res.status(201).json(user);
    }
    catch(error){
        res.status(500).send(error.message);
    }
});

// Atualizar Usuário
app.patch('/users/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).send(error.message);
    }
});

// Deletar Usuário
app.delete('/users/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id);
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).send(error.message);
    }
});

const port = 8080;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));