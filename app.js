/*
porta const = 3000;
// Atende arquivos estáticos (precisamos importar um arquivo css) 
app.use (express.static ('public'))
// Define uma rota básica 
app.get ('/', (req, res) => res.send ('Hello World!'));

// Faz com que o aplicativo escute a porta 3000 
app.listen (port, () => console.log (`Aplicativo escutando a porta $ {port}`));

*/
const express = require("express");// Carrega o módulo express
const app = express();// Cria nosso servidor expresso
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const moment = require('moment')
const Pagamento = require("./models/Pagamento")


app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        }
    }
}))
app.set('view engine', 'handlebars')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//app.use("/bootstrap", express.static(__dirname+"/node_modules/bootstrap/dist"))
app.use("/bootstrap", express.static("/node_modules/bootstrap/dist"))


//Serves static files (we need it to import a css file)
app.use(express.static('public'))// Atende arquivos estáticos (precisamos importar um arquivo css) 

//app.use(express.static((__dirname, '/public')));

app.use(express.static('images')); 



// Define uma rota básica 
app.get ('/', (req, res) => res.send ('Hello World!'));


//Rotas



app.get('/pagamento', function(req, res){
    Pagamento.findAll({order: [['id', 'DESC']]}).then(function(pagamentos){
        res.render('pagamento', {pagamentos: pagamentos});
    })
    
});

app.get('/cad-pagamento', function(req, res){
    res.render('cad-pagamento');
});

app.post('/add-pagamento', function(req, res){
    Pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function(){
        res.redirect('/pagamento')
        //res.send("Pagamento cadastro com sucesso!")
    }).catch(function(erro){
        res.send("Erro: Pagamento não foi cadastrado com sucesso!" + erro)
    })
    //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>") 
})

app.listen(8080);