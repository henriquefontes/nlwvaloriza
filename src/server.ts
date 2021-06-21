import express, { response } from "express";
// @types/express

/* 
* GET    => Buscar informação
* POST   => Inserir (Criar) uma informação
* PUT    => Alterar uma informação
* DELETE => Remover um dado
* PATCH  => Alterar uma informação específica
*/


const app = express();

app.get('/test', (req, res) => {
    // Request => Entrando
    // Response ==> Saindo
    return res.send("Olá NLW")
});

app.post('/test-post', (req, res) => {
    return res.send("Olá NLW, método POST")
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"))