const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 31182;
server.listen(port, () => console.log('Server started on port ' + port))



io.on('connection', (socket) => {
    console.log('A client Connected')
    socket.on('event', (msg) => {
        msg.ora = aggiornaOra()
        //console.log(msg)
        io.emit('receiveEvent', msg) 
    });

    socket.on('pushEvent', (msg) => {
        console.log(msg)
        io.emit('pushEvent', msg);
    });
    socket.on('releaseEvent', (msg) => {
        console.log(msg)
        io.emit('releaseEvent', msg);
    });
})

aggiornaOra = () =>{
    let now = new Date();
    let giorno = now.getDate().toString().length < 2 ? "0" + now.getDate() : now.getDate();
    let mese = now.getMonth().toString().length < 2 ? "0" + now.getMonth() : now.getMonth();
    let anno = now.getFullYear();
    let ora = now.getHours().toString().length < 2 ? "0" + now.getHours() : now.getHours();
    let minuto =  now.getMinutes().toString().length < 2 ? "0" + now.getMinutes() : now.getMinutes();
    let secondi = now.getSeconds().toString().length < 2 ? "0" + now.getSeconds() : now.getSeconds();
    return giorno + "/" + mese + "/" + anno + " " + ora + ":" + minuto + ":" + secondi;
}